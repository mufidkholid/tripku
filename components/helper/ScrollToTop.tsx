"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <Button onClick={scrollToTop} className="bg-gradient-to-r from-primary to-red-400 text-white rounded-full h-12 w-12 flex items-center justify-center focus:outline-none">
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
