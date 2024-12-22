let maxWidth = 800
let maxHeight = 1200

let walls = []
let ray
let particle

function setup() {
  let canvasWidth = floor(windowWidth * 0.8)
  let canvasHeight = floor(windowHeight * 0.9)

  if (canvasWidth > maxWidth) {
    canvasWidth = maxWidth
  }

  if (canvasHeight > maxHeight) {
    canvasHeight = maxHeight
  }

  createCanvas(canvasWidth, canvasHeight)

  for (let i = 0; i < 5; i++) {
    let x1 = random(width)
    let x2 = random(width)
    let y1 = random(height)
    let y2 = random(height)
    walls.push(new Boundary(x1, y1, x2, y2))
  }

  walls.push(new Boundary(0, 0, width, 0))
  walls.push(new Boundary(width, 0, width, height))
  walls.push(new Boundary(width, height, 0, height))
  walls.push(new Boundary(0, height, 0, 0))

  particle = new Particle()
}

function draw() {
  background(0)

  for (let wall of walls) {
    wall.show()
  }
  
  particle.show()

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    particle.updatePosition(mouseX, mouseY)
  }
  
  particle.castRays(walls)

}
