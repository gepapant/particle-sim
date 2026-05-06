from pydantic import BaseModel
from typing import List

class ParticleInput(BaseModel):
    x: float
    y: float
    vx: float
    vy: float
    mass: float

class SimulationRequest(BaseModel):
    particles: List[ParticleInput]
    steps: int
    dt: float
