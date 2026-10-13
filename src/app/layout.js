import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "My Portfolio |Jr Full Stack Developer",
  description: "Explore my portfolio as a Full Stack MERN Developer, showcasing projects built with React, Next.js, Node.js, Express.js, and MongoDB. Passionate about creating modern, responsive, and user-friendly web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
