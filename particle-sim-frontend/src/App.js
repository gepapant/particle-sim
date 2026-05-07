import { useRef } from "react";

function App() {
  const canvasRef = useRef(null);
  const runSimulation = async () => {
    const response = await fetch("https://particle-sim-api.onrender.com/simulate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        particles: [
          { x: -2, y: 0, vx: 0, vy: 1, mass: 5 },
          { x: 2, y: 0, vx: 0, vy: -1, mass: 5},
        ],
        steps: 100,
        dt: 0.1,
      }),
    });

    const result = await response.json();
    
    animate(result.results);
  };

  const animate = (steps) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let step = 0;

    const draw = () => {
      if (step >= steps.length) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      steps[step].forEach((p) => {
        const x = p.x * 20 + canvas.width / 2;
        const y = p.y * 20 + canvas.height / 2;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();

      });

      step++;
      requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div style = {{ textAlign: "center" }}>
      <h1>Particle Simulation</h1>
      <button onClick={runSimulation}>Run Simulation</button>

      <canvas ref ={canvasRef} width = {600} height = {600} style ={{ border: "1px solid black"}}/>
    </div>
  );
}

export default App;