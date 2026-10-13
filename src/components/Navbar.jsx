import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="relative top-10 z-50 mx-auto w-[90%] max-w-[1200px] rounded-full border border-white/5 bg-[#272727] px-3 py-3 shadow-lg sm:px-5">
      <div className="flex items-center justify-between gap-3">
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="flex min-w-0 w-[180px] max-w-[45%] items-center justify-center rounded-full bg-black px-4 py-3 text-xs font-normal text-white transition duration-300 hover:bg-neutral-800"
        >
          Download Resume
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 sm:gap-7 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-[11px] text-gray-200 transition-colors duration-300 hover:text-white sm:text-xs"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
