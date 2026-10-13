import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <main
      id="home"
      className="relative min-h-screen py-18 overflow-hidden bg-black text-white"
    >
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-neutral-600 font-bold">Hi I'm</p>
            <h1 className="text-3xl font-bold uppercase leading-tight sm:text-4xl xl:text-[42px]">
              {/* <span className="text-neutral-600">MR. </span> */}
              <span>RIAZ MAHAMUD</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-gray-300">
              I am a passionate Jr.Full Stack Developer focused on building
              modern, responsive, and user-friendly web applications using
              React, Next.js, Node.js, Express.js, and MongoDB.
            </p>

            <Link
              href="mailto:your-email@example.com"
              className="mt-12 inline-flex min-w-[120px] items-center justify-center rounded-sm border border-neutral-700 bg-neutral-900 px-7 py-2.5 text-sm font-medium tracking-wide transition duration-300 hover:bg-white hover:text-black"
            >
              Hire Me
            </Link>

            {/* Social Links */}
            <div className="mt-16 flex max-w-[280px] items-center justify-between">
              <a
                href="https://www.facebook.com/mohammad.riaz.mahamud.2024"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-lg transition hover:text-gray-400"
              >
                <FaFacebook />
              </a>

              <a
                href="https://x.com/riazmahamud001"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="text-lg transition hover:text-gray-400"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.instagram.com/mdriazmahamud163/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-lg transition hover:text-gray-400"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/riaz-mahamud-dev/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-lg transition hover:text-gray-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/dev-riaz"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-lg transition hover:text-gray-400"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />

              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10">
                <Image
                  src="/Monochrome Professional Headshot.png"
                  alt="Profile photo"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 390px"
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
