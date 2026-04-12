import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-[#e8e8ed] mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <h2 className="text-[#1d1d1f] font-semibold text-lg">
          Blog App
        </h2>

        <p className="text-[#6e6e73] text-sm text-center">
          © {new Date().getFullYear()} Blog App. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
          <span className="text-[#6e6e73] hover:text-[#1d1d1f] cursor-pointer transition">
            Privacy
          </span>
          <span className="text-[#6e6e73] hover:text-[#1d1d1f] cursor-pointer transition">
            Terms
          </span>
          <span className="text-[#6e6e73] hover:text-[#1d1d1f] cursor-pointer transition">
            Contact
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;