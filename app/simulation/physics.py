G = 1.0

def compute_gravitational_force(p1, p2):
    dx = p2.x - p1.x
    dy = p2.y - p1.y

    distance_sq = dx**2 + dy**2 + 1e-5
    force = G * p1.mass * p2.mass / distance_sq

    distance = distance_sq ** 0.5

    fx = force * dx / distance
    fy = force * dy / distance

    return fx , fy