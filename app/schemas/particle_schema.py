from pydantic import BaseModel
from typing import List, Optional

class ParticleInput(BaseModel):
    x: float
    y: float
    vx: float
    vy: float
    mass: float

class SimulationConfig(BaseModel):
    bounds: Optional[list[float]] = [-10, 10, -10, 10]
    G: Optional[float] = 1.0

class SimulationRequest(BaseModel):
    particles: List[ParticleInput]
    steps: int
    dt: float
    config: Optional[SimulationConfig] = SimulationConfig()
