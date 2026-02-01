import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/techfestwhite.svg";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-br from-black via-[#0b0f1a] to-black text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">


        <div>
          <img src={logo} alt="TechFest Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Pakistan’s premier technology festival celebrating innovation,
            creativity, and excellence at IMSciences.
          </p>

          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 transition cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>


        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/events" className="hover:text-white">Events</Link></li>
            <li><Link to="/register" className="hover:text-white">Register</Link></li>
            <li><Link to="/sponsors" className="hover:text-white">Sponsors</Link></li>
            <li><Link to="/community" className="hover:text-white">Teams</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/admin" className="hover:text-white text-primary">Admin Portal</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold text-white mb-4">Competitions</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Programming</li>
            <li>Robotics</li>
            <li>AI & ML</li>
            <li>Cybersecurity</li>
            <li>Gaming</li>
            <li>Startup Expo</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>
                Institute of Management Sciences<br />
                Peshawar, Pakistan
              </span>
            </li>

            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-primary mt-0.5" />
              <span>info@techfest2026.pk</span>
            </li>

            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-primary mt-0.5" />
              <span>+92 300 0000000</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>
            © 2026 TechFest. All rights reserved. Organized by IMSciences.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
