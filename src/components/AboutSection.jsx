import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#222222" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

function InfoCard({ title, children }) {
  return (
    <div className="rounded-xl border border-white/15 bg-gradient-to-br from-[#222222] to-[#1b1b1b] p-5 shadow-lg transition duration-300 hover:border-white/30">
      <h2 className="mb-2 text-base font-bold text-white">{title}</h2>
      {children}
    </div>
  );
}

const AboutSection = () => {
  return (
    <main
      id="about"
      className="min-h-screen bg-black px-5 py-10 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl space-y-7">
        {/* About Me */}
        <InfoCard title="About Me">
          <p className="text-justify text-xs leading-6 text-gray-200 sm:text-sm">
            I am a passionate Full Stack Developer with expertise in React,
            JavaScript, Next.js, and Tailwind CSS. I enjoy building responsive
            and user-friendly web applications with modern UI designs. I also
            work with Node.js, Express.js, and MongoDB to develop full-stack
            applications. I am continuously learning new technologies and
            improving my skills to solve real-world problems through clean,
            maintainable, and efficient code.
          </p>
        </InfoCard>

        {/* Education and Certifications */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <InfoCard title="Education">
            <ul className="list-disc space-y-1 pl-4 text-sm text-gray-200">
              <li>Higher Secondary Certificate (HSC) — 2025</li>
              <li>Honours 1st Year — Running...</li>
            </ul>
          </InfoCard>

          <InfoCard title="Certifications & Courses">
            <ul className="list-disc space-y-1 pl-4 text-sm text-gray-200">
              <li>Web Design & Development</li>
              <li>Frontend Web Development</li>
              <li>JavaScript Programming</li>
              <li>React.js Development</li>
              <li>Full Stack MERN Development</li>
            </ul>
          </InfoCard>
        </div>

        {/* Skills */}
        <InfoCard title="Skills & Technologies">
          <div className="grid grid-cols-3 gap-3 pt-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="flex min-h-[100px] flex-col items-center justify-center gap-3 rounded-md border border-gray-200 bg-white px-2 py-3 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon
                    className="h-10 w-10"
                    style={{ color: skill.color }}
                    aria-hidden="true"
                  />

                  <span className="text-[10px] font-semibold text-black sm:text-xs">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </InfoCard>
      </div>
    </main>
  );
};

export default AboutSection;
