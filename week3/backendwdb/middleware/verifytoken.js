import jwt from "jsonwebtoken";
const { verify } = jwt;

export function verifyToken(req, res, next) {
  //token verif logic
  const token = req.cookies?.token;
  //if token undefined,i.e, req from unauthorized user
  if (!token) {
    return res.status(401).json({ message: "pls login" });
  }
  try {
    //if token exists
    const decodedToken = verify(token, "abcdef");
    console.log(decodedToken);
    req.user= decodedToken
    //call next
    next();
  } catch (err) {
    res
      .status(401)
      .json({ message: "session expired. pls relogin to continue" });
  }
}
