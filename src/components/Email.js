import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Email() {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 1.95 }}
    >
      <Link href="mailto:marzie409@gmail.com" className="email-link">
        marzie409@gmail.com
      </Link>
    </motion.div>
  );
}

export default Email;
