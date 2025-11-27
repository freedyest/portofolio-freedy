"use client";
import { motion } from "framer-motion";
export default function Skill() {
  const programmingLanguages = [
    {
      language: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { language: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
    { language: "Python", link: "https://docs.python.org/3/" },
    { language: "Java", link: "https://docs.oracle.com/javase/8/docs/" },
    { language: "C++", link: "https://cplusplus.com/doc/tutorial/" },
    { language: "PHP", link: "https://www.php.net/docs.php" },
    {
      language: "C#",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
  ];

  const databases = [
    { language: "MySQL", link: "https://dev.mysql.com/doc/" },
    { language: "MongoDB", link: "https://www.mongodb.com/docs/" },
    { language: "PostgreSQL", link: "https://www.postgresql.org/docs/" },
    { language: "MariaDB", link: "https://mariadb.org/documentation/" },
    {
      language: "Oracle Database",
      link: "https://docs.oracle.com/en/database/",
    },
    {
      language: "Firebase Firestore",
      link: "https://firebase.google.com/docs/firestore",
    },
  ];
  const frontEnd = [
    { language: "React", link: "https://react.dev/" },
    { language: "Next.js", link: "https://nextjs.org/docs" },
    { language: "Bootstrap", link: "https://getbootstrap.com/docs/" },
    { language: "Tailwind CSS", link: "https://tailwindcss.com/docs" },
    { language: "Framer Motion", link: "https://www.framer.com/motion/" },
    { language: "Figma", link: "https://www.figma.com/developers" },
  ];

  const backEnd = [
    { language: "Node.js", link: "https://nodejs.org/en/docs" },
    {
      language: "Express.js",
      link: "https://expressjs.com/en/guide/routing.html",
    },
    { language: "Laravel", link: "https://laravel.com/docs" },
    { language: "NestJS", link: "https://docs.nestjs.com/" },
    { language: "Firebase", link: "https://firebase.google.com/docs" },
  ];
  const tools = [
    { language: "Git", link: "https://git-scm.com/doc" },
    { language: "GitHub", link: "https://docs.github.com/" },
    { language: "Vercel", link: "https://vercel.com/docs" },
    { language: "Netlify", link: "https://docs.netlify.com/" },
    { language: "Docker", link: "https://docs.docker.com/" },
    {
      language: "Google Cloud Platform",
      link: "https://cloud.google.com/docs",
    },
    { language: "npm", link: "https://docs.npmjs.com/" },
    { language: "yarn", link: "https://classic.yarnpkg.com/en/docs/" },
    { language: "Vite", link: "https://vitejs.dev/guide/" },
    { language: "ESLint", link: "https://eslint.org/docs/latest/" },
    { language: "Prettier", link: "https://prettier.io/docs/en/" },
    { language: "Postman", link: "https://learning.postman.com/docs/" },
    { language: "Jupyter", link: "https://docs.jupyter.org/" },
    { language: "Apache", link: "https://httpd.apache.org/docs/" },
  ];

  return (
    <section
      id="skill"
      className="min-h-screen py-20 bg-warmyellow dark:bg-slate-700 text-secondary px-2 md:px-8"
    >
      <motion.div
        className="flex flex-col items-center pt-8 gap-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-secondary dark:text-primary font-bold text-center text-3xl pb-4">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-4 w-full justify-center px-4 md:px-0">
          <div
            id="programmingLanguages"
            className="border-2 border-secondary rounded-xl shadow-xl p-6  bg-white md:w-[48%] hover:shadow-2xl transition-shadow duration-300 "
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-secondary/20 pb-3">
              Programming Languages
            </h2>
            <div className="flex gap-4 flex-row flex-wrap">
              {programmingLanguages.map((lang, index) => (
                <motion.a
                  key={index}
                  href={lang.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:hover:text-fire text-primary font-medium px-4 py-2 border-2 border-secondary rounded-lg bg-warmyellow hover:shadow-md transition-shadow"
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#FFD580",
                    borderColor: "#FF8C42",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {lang.language}
                </motion.a>
              ))}
            </div>
          </div>
          <div
            id="databases"
            className="border-2 border-secondary rounded-xl shadow-xl p-6 bg-white md:w-[48%] hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-secondary/20 pb-3">
              Data Base
            </h2>
            <div className="flex gap-4 flex-wrap">
              {databases.map((lang, index) => (
                <motion.a
                  key={index}
                  href={lang.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:hover:text-fire text-primary font-medium px-4 py-2 border-2 border-secondary rounded-lg bg-warmyellow hover:shadow-md transition-shadow"
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#FFD580",
                    borderColor: "#FF8C42",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {lang.language}
                </motion.a>
              ))}
            </div>
          </div>
          <div
            id="frontEnd"
            className="border-2 border-secondary rounded-xl shadow-xl p-6 bg-white md:w-[48%] hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-secondary/20 pb-3">
              Front End
            </h2>
            <div className="flex gap-4 flex-wrap">
              {frontEnd.map((lang, index) => (
                <motion.a
                  key={index}
                  href={lang.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:hover:text-fire text-primary font-medium px-4 py-2 border-2 border-secondary rounded-lg bg-warmyellow hover:shadow-md transition-shadow"
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#FFD580",
                    borderColor: "#FF8C42",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {lang.language}
                </motion.a>
              ))}
            </div>
          </div>
          <div
            id="backEnd"
            className="border-2 border-secondary rounded-xl shadow-xl p-6 bg-white md:w-[48%] hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-secondary/20 pb-3">
              Back End
            </h2>
            <div className="flex gap-4 flex-wrap">
              {backEnd.map((lang, index) => (
                <motion.a
                  key={index}
                  href={lang.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:hover:text-fire text-primary font-medium px-4 py-2 border-2 border-secondary rounded-lg bg-warmyellow hover:shadow-md transition-shadow"
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#FFD580",
                    borderColor: "#FF8C42",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {lang.language}
                </motion.a>
              ))}
            </div>
          </div>
          <div
            id="otherTools"
            className="border-2 border-secondary rounded-xl shadow-xl p-6 bg-white md:w-[48%] hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-secondary/20 pb-3">
              Tools
            </h2>
            <div className="flex gap-4 flex-wrap">
              {tools.map((lang, index) => (
                <motion.a
                  key={index}
                  href={lang.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:hover:text-fire text-primary font-medium px-4 py-2 border-2 border-secondary rounded-lg bg-warmyellow hover:shadow-md transition-shadow"
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#FFD580",
                    borderColor: "#FF8C42",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {lang.language}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
