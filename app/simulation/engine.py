from app.models.particle import Particle
from app.simulation.physics import compute_gravitational_force

def run_simulation(particles: list[Particle], steps: int, dt: float, config):
    results = []

    bounds = config.bounds
    G = config.G

    for _ in range(steps):

        for i in range(len(particles)):
            for j in range(i + 1, len(particles)):
                p1 = particles[i]
                p2 = particles[j]

                fx, fy = compute_gravitational_force(p1, p2, G)

                p1.apply_force(fx, fy)
                p2.apply_force(-fx,-fy)

        step_data = []

        for p in particles:
            p.update(dt, bounds)
            step_data.append({
                "x": p.x,
                "y": p.y
            })
        
        results.append(step_data)
    return results