class Particle:
    def __init__(self, x: float, y: float, vx: float, vy: float,mass: float):
        self.x = x
        self.y = y
        self.vx= vx
        self.vy = vy
        self.mass = mass

        self.ax = 0
        self.ay = 0

    
    def apply_force(self, fx:float, fy:float):
        self.ax += fx / self.mass
        self.y += fy / self.mass
    
    def update(self, dt: float, bounds = None):
        self.vx += self.ax * dt
        self.vy += self.ax * dt

        damping = 0.999
        self.vx *= damping
        self.vy *= damping

        self.x += self.vx * dt
        self.y += self.vy * dt

        if bounds:
            min_x, max_x, min_y, max_y = bounds

            if self.x < min_x or self.x > max_x:
                self.vx *= -1
            if self.y < min_y or self.y > max_y:
                self.vy *= -1 

        self.ax = 0
        self.ay = 0

    