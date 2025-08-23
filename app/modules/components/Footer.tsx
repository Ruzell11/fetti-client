import { Facebook, Instagram, Music2, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
          <img src="/fetti-name-logo.svg" alt="Logo" />
          <span>© 2025</span>
          <a href="#" className="hover:text-pink-600">fetti Website</a>
          <a href="#" className="hover:text-pink-600">Privacy Policy</a>
          <a href="#" className="hover:text-pink-600">Terms & Conditions</a>
          <a href="#" className="hover:text-pink-600">Vendor Manual</a>
          <a href="#" className="hover:text-pink-600">Report an issue</a>
        </div>

        {/* Right side */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <Instagram size={18} />
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <Music2 size={18} /> {/* TikTok replacement */}
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
