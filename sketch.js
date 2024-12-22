let maxWidth = 800
let maxHeight = 1200

let wall = false

let userWallStart = [0, 0]
let userWallEnd = [0, 0]

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

function mousePressed() {
  if (wall == true) {
    userWallEnd = [mouseX, mouseY]
    walls.push(new Boundary(userWallStart[0], userWallStart[1], userWallEnd[0], userWallEnd[1]))

    wall = false
    return
  }

  if (wall == false) {
    userWallStart = [mouseX, mouseY]

    wall = true
    return
  }
}
