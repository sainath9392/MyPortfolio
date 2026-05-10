import React, { useEffect, useRef } from "react";

const CircularCursor = ({ color1 = "#ffffff", color2 = "#00ffff" }) => {
  const canvasRef = useRef(null);
  const trail = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const requestRef = useRef();
  const pointerSize = 10; // Increased pointer head size
  const maxTrailLength = 40; // Longer tail

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const resetTrail = () => {
      trail.current = [];
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
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

      // Dynamically fetch theme accent for cursor glow
      const themeAccent = getComputedStyle(document.body).getPropertyValue('--theme-accent').trim() || color2;

      // Update alpha for ALL points and filter out invisible ones
      trail.current.forEach(p => p.alpha -= 0.04);
      trail.current = trail.current.filter(p => p.alpha > 0);

      // Draw trail segments
      for (let i = 1; i < trail.current.length; i++) {
        const p1 = trail.current[i - 1];
        const p2 = trail.current[i];
        const alpha = Math.max(0, p2.alpha);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = pointerSize * 1.2 * alpha;
        ctx.lineCap = "round";
        ctx.shadowBlur = 15 * alpha;
        ctx.shadowColor = themeAccent;
        ctx.stroke();
      }

      // Draw glowing head at actual mouse position
      ctx.beginPath();
      ctx.arc(mousePos.current.x, mousePos.current.y, pointerSize * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = themeAccent;
      ctx.shadowBlur = 30;
      ctx.shadowColor = themeAccent;
      ctx.fill();

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
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


