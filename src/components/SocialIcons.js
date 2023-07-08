import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";

function SocialIcons() {
  const sociallinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
    {
      name: "FiInstagram",
      icon: <FiInstagram />,
      link: "https://www.github.com",
    },
    { name: "FiYoutube", icon: <FiYoutube />, link: "https://www.github.com" },
    {
      name: "FiLinkedin",
      icon: <FiLinkedin />,
      link: "https://www.github.com",
    },
    { name: "FiTwitter", icon: <FiTwitter />, link: "https://www.github.com" },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 1.95 }}
    >
      <ul className="social-icons-list">
        {sociallinks.map((item) => (
          <li
            key={item.name}
            title={item.name}
            className="social-icons-list-item"
          >
            <Link
              href={item.link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
