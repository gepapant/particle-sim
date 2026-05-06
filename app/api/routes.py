from fastapi import APIRouter
from app.schemas.particle_schema import SimulationRequest
from app.models.particle import Particle
from app.simulation.engine import run_simulation

router = APIRouter()

@router.post("/simulate")
def simulate(request: SimulationRequest):
    particles = [
        Particle(p.x, p.y, p.vx, p.vy, p.mass)
        for p in request.particles
    ]

    results = run_simulation(particles, request.steps, request.dt)

    return {"results": results}

