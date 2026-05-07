import { useRef, useState } from "react";

function App() {
  const canvasRef = useRef(null);

  const [gravity, setGravity] = useState(1.0);
  const [steps, setSteps] = useState(100);
  const [particleCount, setParticleCount] = useState(2);

  let animationFrameId;

  const runSimulation = async () => {

    
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        mass: Math.random() * 5 + 1,
      });
    }

    const response = await fetch(
      "https://particle-sim-api.onrender.com/simulate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          particles,
          steps,
          dt: 0.1,
          config: {
            G: gravity,
            bounds: [-20, 20, -20, 20],
          },
        }),
      }
    );

    const result = await response.json();

    animate(result.results);
  };

  const animate = (stepsData) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    cancelAnimationFrame(animationFrameId);

    let step = 0;

    const draw = () => {
      if (step >= stepsData.length) return;

     
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stepsData[step].forEach((p) => {
        const x = p.x * 20 + canvas.width / 2;
        const y = p.y * 20 + canvas.height / 2;

        ctx.beginPath();

       
        ctx.fillStyle = "cyan";

        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
      });

      step++;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div style={{ textAlign: "center", color: "white", background: "#111", minHeight: "100vh", paddingTop: "20px" }}>
      
      <h1>Particle Simulation</h1>

      <div style={{ marginBottom: "20px" }}>

        <div style={{ margin: "10px" }}>
          <label>Gravity: </label>

          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={gravity}
            onChange={(e) => setGravity(Number(e.target.value))}
          />

          <span> {gravity}</span>
        </div>

        <div style={{ margin: "10px" }}>
          <label>Steps: </label>

          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
          />
        </div>

        <div style={{ margin: "10px" }}>
          <label>Particles: </label>

          <input
            type="number"
            min="1"
            max="20"
            value={particleCount}
            onChange={(e) => setParticleCount(Number(e.target.value))}
          />
        </div>

      </div>

      <button
        onClick={runSimulation}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Run Simulation
      </button>

      <div>
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          style={{
            border: "1px solid white",
            background: "black",
          }}
        />
      </div>
    </div>
  );
}

export default App;