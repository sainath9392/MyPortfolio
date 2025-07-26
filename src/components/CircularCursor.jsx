import React, { useEffect, useRef } from "react";

const CircularCursor = ({ color1 = "#ffffff", color2 = "#00ffff" }) => {
  const canvasRef = useRef(null);
  const trail = useRef([]);
  const pointerSize = 10; // Increased pointer head size
  const maxTrailLength = 40; // Longer tail

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const resetTrail = () => {
      trail.current = [];
    };

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

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setCanvasSize();
        resetTrail();
      }
    };

    setCanvasSize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setCanvasSize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw trail segments with sharper taper
      for (let i = 1; i < trail.current.length; i++) {
        const p1 = trail.current[i - 1];
        const p2 = trail.current[i];
        const alpha = Math.max(0, p2.alpha);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = pointerSize * 1.2 * alpha; // bigger initial trail
        ctx.lineCap = "round";
        ctx.shadowBlur = 15 * alpha;
        ctx.shadowColor = color1;
        ctx.stroke();

        // Fade alpha for shooting effect
        p2.alpha -= 0.03; // slower fade to retain long trail
      }

      // Draw glowing head
      if (trail.current.length) {
        const head = trail.current[trail.current.length - 1];
        ctx.beginPath();
        ctx.arc(head.x, head.y, pointerSize * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = color2;
        ctx.shadowBlur = 30;
        ctx.shadowColor = color2;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [color1, color2]);

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
