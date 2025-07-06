// Remove any WebSocket or API related code
// Keep only the frontend animation logic we've been working on
import { motion } from "framer-motion";
import { useRef } from "react";

// Add this import at the top of the file
import { useTransform, useScroll } from 'framer-motion';

const TechStackScroller = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Horizontal translation based on scroll
  const xTop = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const xBottom = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]); // Changed to move from right to left

  const stackTop = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const stackBottom = ["Node.js", "Express", "MongoDB", "Git", "GitHub"];

  return (
    <section id="skills" ref={ref} className="bg-[#90caf9] py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#0d47a1]">Tech Stack</h2>
      <motion.div style={{ x: xTop }} className="flex gap-6 overflow-hidden mb-4">
        {stackTop.map((tech, index) => (
          <div key={index} className="bg-white shadow-md px-6 py-3 rounded-lg text-[#0d47a1] font-semibold text-lg">
            {tech}
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: xBottom }} className="flex gap-6 overflow-hidden">
        {stackBottom.map((tech, index) => (
          <div key={index} className="bg-white shadow-md px-6 py-3 rounded-lg text-[#0d47a1] font-semibold text-lg">
            {tech}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStackScroller;