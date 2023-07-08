import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

function NavBar() {
  const sectionLinks = [
    {
      name: "About",
      link: "/#about",
    },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
  ];
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });

    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Logo />
        </motion.div>
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </motion.div>
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
          <ul className="nav-items-list">
            {sectionLinks.map((item, index) => (
              <motion.li
                key={item.name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={item.link} className="nav-items-list-item-link">
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Button text="Resume" link="http://localhost:3000/resume.pdf" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
