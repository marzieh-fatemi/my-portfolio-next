import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.75 }}
      >
        Marzieh Fatemi.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.05 }}
      >
        Frontend Developer(react.js)
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.35 }}
      >
        I&apos;m a software enginner with expertise in frontend. Currently, I
        work as React Developer in Hamiket.
      </motion.p>

      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.35 }}
      >
        I am a quick learner, able to pick up new concepts and ideas quickly and
        use them effectively and also hope to continue building my skills.
      </motion.p>
    </div>
  );
}

export default Hero;
