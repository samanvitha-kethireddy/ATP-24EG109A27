import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

export const authorApp = exp.Router();

// WRITE ARTICLE
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const articleObj = req.body;
    const authorId = req.user.id;

    // check author exists
    const author = await UserModel.findById(authorId);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    // create article
    const articleDoc = new ArticleModel({
      ...articleObj,
      author: authorId,
    });

    await articleDoc.save();

    res.status(201).json({ message: "Article published successfully" });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});


// GET ALL ARTICLES OF AUTHOR
authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const authorId = req.user.id;

    const articles = await ArticleModel.find({ author: authorId });

    res.status(200).json({
      message: "Articles fetched",
      payload: articles,
    });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});


// EDIT ARTICLE
authorApp.put("/articles", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const authorId = req.user.id;

    const { articleId, title, category, content } = req.body;

    const updatedArticle = await ArticleModel.findOneAndUpdate(
      { _id: articleId, author: authorId },
      { $set: { title, category, content } },
      { new: true }
    );

    if (!updatedArticle) {
      return res.status(403).json({ message: "Not authorized to edit article" });
    }

    res.status(200).json({
      message: "Article updated",
      payload: updatedArticle,
    });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});


// SOFT DELETE
authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const authorId = req.user.id;
    const { articleId, isArticleActive } = req.body;

    const article = await ArticleModel.findOne({
      _id: articleId,
      author: authorId,
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    article.isArticleActive = isArticleActive;
    await article.save();

    res.status(200).json({
      message: "Article status updated",
      payload: article,
    });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});