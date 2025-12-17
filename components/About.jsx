"use client";

import { motion } from "framer-motion";

export default function About() {
  const workexperience = [
    {
      position: "Seller",
      company: "Shopee",
      date: "Dec 2021 - July 2023",
    },
    {
      position: "Staff Undelivery",
      company: "PT. Tiki Jalur Nugraha Ekakurir (JNE) ",
      date: "Aug 2023 - Dec 2023",
    },
    {
      position: "Seller",
      company: "Tokogameku",
      date: "2023 - 2024",
    },
  ];
  return (
    <section
      id="about"
      className="  py-20 bg-peach/70 dark:bg-slate-900 text-primary px-8"
    >
      <motion.div
        className="flex max-w-7xl  mx-auto flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl text-primary font-bold text-center">
          About Me
        </h2>
        <motion.div
          id="intro"
          className="mt-10 border-2 border-primary bg-warmyellow dark:bg-slate-100 rounded-lg w-full md:w-4/5 shadow-lg flex flex-col"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl text-primary text-start dark:text-fire font-bold p-4">
            My Journey
          </h3>
          <p className="text-md text-primary dark:text-fire text-start px-4 pb-2">
            I am an enthusiastic, optimistic, and responsible individual with a
            strong passion for learning and self-improvement. My academic
            journey began at{" "}
            <span className="font-semibold">
              Senior High School Santo Tarcisius
            </span>
            , where I graduated with an average score of{" "}
            <span className="font-semibold">92</span>.
          </p>
          <p className="text-md text-primary dark:text-fire text-start px-4 pb-2">
            I continued my education at{" "}
            <span className="font-semibold">
              Institut Teknologi Pelita Indonesia
            </span>
            , earning a Bachelor’s degree in Informatics Engineering with a GPA
            of
            <span className="font-semibold">3.93/4.00</span>. This experience
            strengthened my technical foundation and shaped my ability to think
            analytically and creatively.
          </p>
          <p className="text-md text-primary dark:text-fire text-start px-4 pb-2">
            To deepen my practical skills, I joined{" "}
            <span className="font-semibold">Harisenin Bootcamp</span>, where I
            gained hands-on experience with real development workflows. In my
            free time, I actively upgrade myself by exploring new technologies
            and building personal projects to refine my abilities.
          </p>
          <p className="text-md text-primary dark:text-fire text-start px-4 pb-4">
            With a combination of discipline, technical expertise, and a growth
            mindset, I strive to contribute meaningfully in any environment and
            continue evolving as a professional.
          </p>
        </motion.div>

        <div id="workexperience">
          <h3 className="text-xl text-primary text-start font-bold p-4">
            Work Experience
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workexperience.map((work, index) => (
              <motion.div
                key={index}
                className="bg-warmyellow dark:text-fire dark:bg-slate-200 flex flex-col border-2 border-primary rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-2">{work.position}</h4>
                <p className="text-md">{work.company}</p>
                <p className="text-sm text-gray-600">{work.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
