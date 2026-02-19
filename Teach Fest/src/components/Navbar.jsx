import { Link, NavLink } from "react-router-dom";
import logo from "../assets/techfest-logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="TechFest Logo"
            className="h-6 md:h-8 w-auto object-contain"
          />
        </Link>


        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {[
            { name: "Home", path: "/" },
            { name: "Events", path: "/events" },
            { name: "Register", path: "/register" },
            { name: "Sponsors", path: "/sponsors" },
            { name: "Gallery", path: "/gallery" },
            { name: "Teams", path: "/community" },
            { name: "Contact", path: "/contact" },

            { name: "Schedule", path: "/schedule" }, 
            { name: "Speakers", path: "/speakers" },
            { name: "Admin", path: "/admin" },
            { name: "Volunteers", path: "/volunteer-portal" },

          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-colors ${isActive
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>


        <Link
          to="/register"
          className="px-6 py-2.5 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-primary to-tech-purple
                     shadow-lg hover:shadow-xl hover:scale-105
                     transition-all duration-300"
        >
          Register Now
        </Link>
      </div>
    </header>
  );
}

