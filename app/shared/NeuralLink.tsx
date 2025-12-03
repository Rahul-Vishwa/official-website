"use client";

import { useEffect, useRef } from "react";

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // --- Neural Network Canvas Animation ---
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas!.getContext("2d");
    if (!ctx) return;

    let width: number, height: number;
    let particles: Particle[] = [];

    // Configuration
    const particleCount = 60;
    const connectionDistance = 150;
    const moveSpeed = 0.5;

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * moveSpeed;
        this.vy = (Math.random() - 0.5) * moveSpeed;
        this.size = Math.random() * 6 + 3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(168, 85, 247)";
        ctx!.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      // Update + draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(168, 85, 247, ${
              0.4 - (distance / connectionDistance) * 0.15
            })`;

            ctx!.lineWidth = 3;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    // Init
    window.addEventListener("resize", resize);
    resize();
    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        id="networkCanvas"
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />
    </>
  );
}
