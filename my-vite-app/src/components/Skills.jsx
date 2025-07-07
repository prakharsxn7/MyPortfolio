import { motion } from "framer-motion";

const TechStackScroller = () => {
  const stackTop = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const stackBottom = ["Node.js", "Express", "MongoDB", "Git", "GitHub"];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const marqueeVariantsReverse = {
    animate: {
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="skills" className="bg-[#90caf9] py-16 overflow-hidden"> {/* Added overflow-hidden to section */}
      <h2 className="text-3xl font-bold text-center mb-10 text-[#0d47a1]">Tech Stack</h2>
      <motion.div
        className="flex gap-6 mb-4 whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {stackTop.map((tech, index) => (
          <div key={index} className="bg-white shadow-md px-6 py-3 rounded-lg text-[#0d47a1] font-semibold text-lg inline-block"> {/* Added inline-block */}
            {tech}
          </div>
        ))}
        {/* Duplicate items for seamless loop */}
        {stackTop.map((tech, index) => (
          <div key={`duplicate-top-${index}`} className="bg-white shadow-md px-6 py-3 rounded-lg text-[#0d47a1] font-semibold text-lg inline-block">
            {tech}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        variants={marqueeVariantsReverse}
        animate="animate"
      >
        {stackBottom.map((tech, index) => (
          <div key={index} className="bg-white shadow-md px-6 py-3 rounded-lg text-[#0d47a1] font-semibold text-lg inline-block"> {/* Added inline-block */}
            {tech}
          </div>
        ))}
        {/* Duplicate items for seamless loop */}
        {stackBottom.map((tech, index) => (
          <div key={`duplicate-bottom-${index}`} className="bg-white shadow-md px-6 py-3 rounded-lg text-[#0d47a1] font-semibold text-lg inline-block">
            {tech}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStackScroller;