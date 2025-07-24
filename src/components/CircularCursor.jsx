import React, { useEffect, useRef } from "react";

const CircularCursor = ({color1,color2}) => {
  const canvasRef = useRef(null);
  const trail = useRef([]);

  // You can change this size for a bigger or smaller dash/pointer
  const pointerSize = 10; // Increase this to make everything larger
  const maxTrailLength = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 1.0,
      });

      if (trail.current.length > maxTrailLength) {
        trail.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 1; i < trail.current.length; i++) {
        const p1 = trail.current[i - 1];
        const p2 = trail.current[i];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        ctx.strokeStyle = color1;
        ctx.lineWidth = pointerSize * 0.9 * p2.alpha; // Scale with pointerSize
        ctx.lineCap = "round";
        ctx.shadowBlur = pointerSize;
        ctx.shadowColor = color1;
        ctx.stroke();

        // Fade alpha
        p2.alpha -= 0.05;
      }

      // Draw the glowing pointer head
      if (trail.current.length) {
        const head = trail.current[trail.current.length - 1];
        ctx.beginPath();
        ctx.arc(head.x, head.y, pointerSize, 0, Math.PI * 2);
        ctx.fillStyle = color2;
        ctx.shadowBlur = pointerSize * 2;
        ctx.shadowColor = color2;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="hidden lg:block"
    />
  );
};
export default CircularCursor;
