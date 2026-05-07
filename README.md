# Particle Simulation Platform

A full-stack interactive physics simulation platform that models particle motion under gravitational interaction and visualizes results in real time.

Live Demo:
https://particle-sim-psi.vercel.app/

Backend API:
Hosted on Render (FastAPI) (https://particle-sim-api.onrender.com)

---

## 🚀 Features

- Real-time particle simulation
- Newtonian gravitational interactions
- Dynamic control of simulation parameters
- Interactive frontend visualization using HTML Canvas
- Configurable physics environment (gravity, steps, particles)
- Full-stack architecture (React + FastAPI)
- Deployed frontend and backend

---

## 🧠 Physics & Simulation Model

The system simulates particles under simplified Newtonian gravity:

- Pairwise gravitational force approximation
- Numerical integration using discrete time steps
- Euler-based motion update:
  - position update from velocity
  - velocity update from force accumulation

This allows real-time approximation of emergent particle behavior.

---

## 🏗️ Architecture

Frontend:
- React
- Canvas API for rendering
- State-driven simulation controls

Backend:
- FastAPI (Python)
- REST API for simulation execution
- Modular physics engine

Flow:
1. User sets parameters in frontend
2. Frontend sends request to API
3. Backend runs physics simulation
4. Returns time-step data
5. Frontend animates results on canvas

---

## 🧪 Tech Stack

- React
- FastAPI
- Python
- JavaScript (ES6)
- HTML Canvas
- Vercel (frontend deployment)
- Render (backend deployment)

---


## 🔮 Future Improvements

- Collision detection between particles
- Performance optimization (spatial partitioning / Barnes-Hut)
- GPU acceleration for large-scale simulations
- Custom particle creation UI
- Real-time parameter adjustment (live simulation)

---

## 🎯 Why this project matters

This project demonstrates:

- Full-stack engineering capability
- Physics-informed computational modeling
- API design and system architecture
- Deployment of production-ready applications
- Interactive UI/UX development

---

## 🌐 Live Links

Frontend:
https://particle-sim-psi.vercel.app/

Backend:
Hosted on Render ( https://particle-sim-api.onrender.com)

---

## 👨‍💻 Author

Physics graduate transitioning into applied software engineering and computational systems.