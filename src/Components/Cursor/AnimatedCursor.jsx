import { useEffect, useState, useRef, useCallback } from "react";

const FancyCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cursorRef = useRef(null); // Ref to track the cursor element
  const positionRef = useRef({ x: 0, y: 0 }); // Ref to track cursor position

  // Fetch and listen for Dark Mode preference from localStorage
  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    setIsDarkMode(darkMode);
  }, []);

  // Optimized mouse move event handler
  const moveCursor = useCallback((e) => {
    positionRef.current = { x: e.clientX, y: e.clientY };
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
    }
  }, []);

  // Hover effect handler
  const handleHoverEffect = useCallback(
    (isHovering) => {
      setIsHovering(isHovering);
    },
    []
  );


  // Attach event listeners for theme changes
  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, img, span, div, h1, h2, li"
    );

    // Add event listeners for mouse movement and hover effects
    document.addEventListener("mousemove", moveCursor);
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleHoverEffect(true));
      el.addEventListener("mouseleave", () => handleHoverEffect(false));
    });

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleHoverEffect(true));
        el.removeEventListener("mouseleave", () => handleHoverEffect(false));
      });
    };
  }, [moveCursor, handleHoverEffect]);

  return (
    <>
     
      
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          display: isDarkMode ? "block" : "none", // Show cursor only in dark mode
          width: isHovering ? "50px" : "22px",
          height: isHovering ? "50px" : "22px",
          borderRadius: "50%",
          backgroundColor: isDarkMode ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.3)",
          boxShadow: isHovering
            ? "0 0 15px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5)"
            : "0 0 5px rgba(255, 255, 255, 0.3)",
          transition: "transform 0.08s ease-out, width 0.2s, height 0.2s, box-shadow 0.2s",
        }}
      />
    </>
  );
};

export default FancyCursor;
