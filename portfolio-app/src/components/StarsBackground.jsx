import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2,
    }));

    const shootingStars = [];

    function drawStars() {
      ctx.clearRect(0, 0, width, height);

      // Regular stars
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Shooting stars
      shootingStars.forEach((shooting, i) => {
        const gradient = ctx.createLinearGradient(
          shooting.x,
          shooting.y,
          shooting.x - shooting.length,
          shooting.y - shooting.length
        );
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shooting.x, shooting.y);
        ctx.lineTo(shooting.x - shooting.length, shooting.y - shooting.length);
        ctx.stroke();

        shooting.x += shooting.speedX;
        shooting.y += shooting.speedY;
        shooting.life--;

        if (shooting.life <= 0) shootingStars.splice(i, 1);
      });
    }

    function animateStars() {
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.5,
          length: Math.random() * 80 + 50,
          speedX: -(Math.random() * 4 + 2),
          speedY: Math.random() * 2 + 1,
          life: 50,
        });
      }

      drawStars();
      requestAnimationFrame(animateStars);
    }

    animateStars();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
