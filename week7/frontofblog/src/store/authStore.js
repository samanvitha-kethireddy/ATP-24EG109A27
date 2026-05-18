import { create } from "zustand";
import axios from "axios";

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true;

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,

  // LOGIN
  login: async (userCred) => {
    try {
      set({
        loading: true,
        currentUser: null,
        isAuthenticated: false,
        error: null,
      });
      const API = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${API}/common-api/login`, userCred);

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
      const res = await axios.get(`${API}/common-api/logout`);

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

  
  checkAuth: async () => {
    try {
      set({ loading: true });
      const API = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API}/common-api/check-auth`);

      set({
        currentUser: res.data?.payload,
        isAuthenticated: true,
        loading: false,
      });
    } catch (err) {
      if (err.response?.status === 401) {
        set({
          currentUser: null,
          isAuthenticated: false,
          loading: false,
        });
        return;
      }

      set({
        loading: false,
        error: "Something went wrong",
      });
    }
  },
}));