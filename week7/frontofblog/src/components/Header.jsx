import { NavLink } from "react-router-dom";
import { useAuth } from "../store/authStore";
import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass,
} from "../styles/common";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);

  const getProfilePath = () => {
    if (!user) return "/";

    switch (user.role) {
      case "AUTHOR":
        return "/author-profile";
      case "ADMIN":
        return "/admin-profile";
      default:
        return "/user-profile";
    }
  };

  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className={navbarClass}>

        <NavLink to="/" className={`${navBrandClass} text-lg`}>
          BlogApp 
        </NavLink>

        <ul className={`${navLinksClass} gap-3`}>

          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? `${navLinkActiveClass} px-4 py-1.5 rounded-full bg-[#ede9ff]`
                  : `${navLinkClass} px-4 py-1.5 rounded-full bg-[#f8f6ff] text-[#6b6b8a] hover:bg-[#ede9ff] hover:text-[#2a2438] transition-all duration-200`
              }
            >
              Home
            </NavLink>
          </li>

          {!isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? `${navLinkActiveClass} px-4 py-1.5 rounded-full bg-[#ede9ff]`
                      : `${navLinkClass} px-4 py-1.5 rounded-full bg-[#f8f6ff] text-[#6b6b8a] hover:bg-[#ede9ff] hover:text-[#2a2438] transition-all duration-200`
                  }
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? `${navLinkActiveClass} px-4 py-1.5 rounded-full bg-[#ede9ff]`
                      : `${navLinkClass} px-4 py-1.5 rounded-full bg-[#f8f6ff] text-[#6b6b8a] hover:bg-[#ede9ff] hover:text-[#2a2438] transition-all duration-200`
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}

          {isAuthenticated && (
            <li>
              <NavLink
                to={getProfilePath()}
                className={({ isActive }) =>
                  isActive
                    ? `${navLinkActiveClass} px-4 py-1.5 rounded-full bg-[#ede9ff]`
                    : `${navLinkClass} px-4 py-1.5 rounded-full bg-[#f8f6ff] text-[#6b6b8a] hover:bg-[#ede9ff] hover:text-[#2a2438] transition-all duration-200`
                }
              >
                Profile
              </NavLink>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Header;