class Particle {
  constructor() {
    this.position = createVector(width / 2, height / 2)
    this.rays = []
    for (let i = 0; i < 360; i += 5) {
      this.rays.push(new Ray(this.position, radians(i)))
    }
  }

  show() {
    fill(255)
    ellipse(this.position.x, this.position.y, 4)
    for (let ray of this.rays) {
      ray.show()
    }
  }

  castRays(walls) {
    for (let ray of this.rays) {
      let closest = null
      let record = Infinity
      for (let wall of walls) {
        let intersectionPoint = ray.cast(wall)
        
        if (intersectionPoint) {
          let distance = p5.Vector.dist(this.position, intersectionPoint)
          if (distance < record) {
            record = distance
            closest = intersectionPoint
          }
        }
      }

      if (closest) {
        fill(255, 100)
        line(this.position.x, this.position.y, closest.x, closest.y)
      }
    }
  }

  updatePosition(x, y) {
    this.position.set(x, y)
  }
}