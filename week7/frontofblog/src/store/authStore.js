// // // import { create } from "zustand";
// // // import axios from "axios";

// // // export const useAuth = create((set) => ({
// // //   currentUser: null,
// // //   loading: false,
// // //   isAuthenticated: false,
// // //   error: null,

// // //   // LOGIN
// // //   login: async (userCred) => {
// // //     try {
// // //       set({
// // //         loading: true,
// // //         currentUser: null,
// // //         isAuthenticated: false,
// // //         error: null,
// // //         withCredentials: true,
// // //       });
// // //       const API = import.meta.env.VITE_API_URL;
// // //       const res = await axios.post(`${API}/common-api/login`, userCred);

// // //       if (res.status === 200) {
// // //         set({
// // //           currentUser: res.data?.payload,
// // //           loading: false,
// // //           isAuthenticated: true,
// // //           error: null,
// // //         });
// // //       }
// // //     } catch (err) {
// // //       set({
// // //         loading: false,
// // //         isAuthenticated: false,
// // //         currentUser: null,
// // //         error: err.response?.data?.message || "Login failed",
// // //       });
// // //     }
// // //   },

// // //   // LOGOUT
// // //   logout: async () => {
// // //     try {
// // //       set({ loading: true });
// // //       const API = import.meta.env.VITE_API_URL;
// // //       const res = await axios.get(`${API}/common-api/logout`);
// // //        {withCredentials: true}
// // //       if (res.status === 200) {
// // //         set({
// // //           currentUser: null,
// // //           isAuthenticated: false,
// // //           error: null,
// // //           loading: false,
// // //         });
// // //       }
// // //     } catch (err) {
// // //       set({
// // //         loading: false,
// // //         isAuthenticated: false,
// // //         currentUser: null,
// // //         error: err.response?.data?.message || "Logout failed",
// // //       });
// // //     }
// // //   },

  
// // //   checkAuth: async () => {
// // //     try {
// // //       set({ loading: true });
// // //       const API = import.meta.env.VITE_API_URL;
// // //       const res = await axios.get(`${API}/common-api/check-auth`), {withCredentials: true };

// // //       set({
// // //         currentUser: res.data?.payload,
// // //         isAuthenticated: true,
// // //         loading: false,
// // //       });
// // //     } catch (err) {
// // //       if (err.response?.status === 401) {
// // //         set({
// // //           currentUser: null,
// // //           isAuthenticated: false,
// // //           loading: false,
// // //         });
// // //         return;
// // //       }

// // //       set({
// // //         loading: false,
// // //         error: "Something went wrong",
// // //       });
// // //     }
// // //   },
// // // }));









// // import { create } from "zustand";
// // import axios from "axios";

// // export const useAuth = create((set) => ({
// //   currentUser: null,
// //   loading: false,
// //   isAuthenticated: false,
// //   error: null,

// //   // LOGIN
// //   login: async (userCred) => {
// //     try {
// //       set({ loading: true, currentUser: null, isAuthenticated: false, error: null });
// //       const API = import.meta.env.VITE_API_URL;
// //       const res = await axios.post(`${API}/common-api/login`, userCred, {
// //         withCredentials: true,
// //       });

// //       if (res.status === 200) {
// //         set({
// //           currentUser: res.data?.payload,
// //           loading: false,
// //           isAuthenticated: true,
// //           error: null,
// //         });
// //       }
// //     } catch (err) {
// //       set({
// //         loading: false,
// //         isAuthenticated: false,
// //         currentUser: null,
// //         error: err.response?.data?.message || "Login failed",
// //       });
// //     }
// //   },

// //   // LOGOUT
// //   logout: async () => {
// //     try {
// //       set({ loading: true });
// //       const API = import.meta.env.VITE_API_URL;
// //       const res = await axios.get(`${API}/common-api/logout`, {
// //         withCredentials: true,
// //       });

// //       if (res.status === 200) {
// //         set({
// //           currentUser: null,
// //           isAuthenticated: false,
// //           error: null,
// //           loading: false,
// //         });
// //       }
// //     } catch (err) {
// //       set({
// //         loading: false,
// //         isAuthenticated: false,
// //         currentUser: null,
// //         error: err.response?.data?.message || "Logout failed",
// //       });
// //     }
// //   },

// //   // CHECK AUTH
// //   checkAuth: async () => {
// //     try {
// //       set({ loading: true });
// //       const API = import.meta.env.VITE_API_URL;
// //       const res = await axios.get(`${API}/common-api/check-auth`, {
// //         withCredentials: true,
// //       });

// //       set({
// //         currentUser: res.data?.payload,
// //         isAuthenticated: true,
// //         loading: false,
// //       });
// //     } catch (err) {
// //       if (err.response?.status === 401) {
// //         set({ currentUser: null, isAuthenticated: false, loading: false });
// //         return;
// //       }
// //       set({ loading: false, error: "Something went wrong" });
// //     }
// //   },
// // }));









// import { create } from "zustand";
// import axios from "axios";

// const { sign } = jwt;
// export const commonApp = exp.Router();

// config();

// // REGISTER
// commonApp.post("/users", upload.single("profileImageUrl"), async (req, res) => {
//   let cloudinaryResult;
//   try {
//     const newUser = req.body;
//     let allowedRoles = ["USER", "AUTHOR"];

//     if (!allowedRoles.includes(newUser.role)) {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//     if (req.file) {
//       cloudinaryResult = await uploadToCloudinary(req.file.buffer);
//       newUser.profileImageUrl = cloudinaryResult?.secure_url;
//     }

//     newUser.password = await hash(newUser.password, 12);

//     const newUserDoc = new UserModel(newUser);
//     await newUserDoc.save();

//     res.status(201).json({ message: "User created" });
//   } catch (err) {
//     if (cloudinaryResult?.public_id) {
//       await cloudinary.uploader.destroy(cloudinaryResult.public_id);
//     }
//     res.status(500).json({ message: err.message });
//   }
// });

// // LOGIN
// commonApp.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await UserModel.findOne({ email });

//     if (!user) return res.status(400).json({ message: "Invalid email" });
//     if (user.role !== "ADMIN" && user.isUserActive === false) {
//       return res.status(403).json({ message: "Account is blocked by admin" });
//     }

//     const isMatched = await compare(password, user.password);
//     if (!isMatched) return res.status(400).json({ message: "Invalid password" });

//     const signedToken = sign(
//       {
//         id: user._id,
//         email: user.email,
//         role: user.role,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         profileImageUrl: user.profileImageUrl,
//       },
//       process.env.SECRET_KEY,
//       { expiresIn: "1h" }
//     );

//     res.cookie("token", signedToken, {
//       httpOnly: true,
//       secure: true,
//       sameSite: "none",
//     });

//     let userObj = user.toObject();
//     delete userObj.password;

//     res.status(200).json({ message: "login success", payload: userObj });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // LOGOUT (fixed)
// commonApp.get("/logout", (req, res) => {
//   res.clearCookie("token", {
//     httpOnly: true,
//     secure: true,     // match login
//     sameSite: "none", // match login
//   });
//   res.status(200).json({ message: "Logout success" });
// });

// // CHECK AUTH
// commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
//   res.status(200).json({ message: "authenticated", payload: req.user });
// });

// // CHANGE PASSWORD (stub)
// commonApp.put("/password", verifyToken("USER", "AUTHOR", "ADMIN"), async (req, res) => {
//   // implement later
// });





import { create } from "zustand";
import axios from "axios";

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,

  // LOGIN
  login: async (userCred) => {
    try {
      set({ loading: true, currentUser: null, isAuthenticated: false, error: null });
      const API = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${API}/common-api/login`, userCred, {
        withCredentials: true,
      });

      if (res.status === 200) {
        set({
          currentUser: res.data?.payload,
          loading: false,
          isAuthenticated: true,
          error: null,
        });
      }
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.message || "Login failed",
      });
    }
  },

  // LOGOUT
  logout: async () => {
    try {
      set({ loading: true });
      const API = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API}/common-api/logout`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        set({
          currentUser: null,
          isAuthenticated: false,
          error: null,
          loading: false,
        });
      }
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.message || "Logout failed",
      });
    }
  },

  // CHECK AUTH
  checkAuth: async () => {
    try {
      set({ loading: true });
      const API = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API}/common-api/check-auth`, {
        withCredentials: true,
      });

      set({
        currentUser: res.data?.payload,
        isAuthenticated: true,
        loading: false,
      });
    } catch (err) {
      if (err.response?.status === 401) {
        set({ currentUser: null, isAuthenticated: false, loading: false });
        return;
      }
      set({ loading: false, error: "Something went wrong" });
    }
  },
}));
