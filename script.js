
gsap.from("#p1",{
      scrollTrigger : {
        scrub: true
      },
      scale:2,
      y:250,
    }) 


const frame = document.getElementById('frame')
const card = document.getElementById('card')
const light = document.getElementById('light')
const card_two=document.getElementById('card_two')

let { x, y, width, height } = frame.getBoundingClientRect()

function mouseMove(e) {
  const left = e.clientX - x
  const top = e.clientY - y
  const centerX = left - width / 2
  const centerY = top - height / 2
  const d = Math.sqrt(centerX**2 + centerY**2)

  card.style.boxShadow = `
    ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
  `

  card.style.transform = `
    rotate3d(${-centerY / 5}, ${centerX / 100}, 0, ${d / 20}deg)
  `

  light.style.backgroundImage = `
    radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #000)
    `
}

frame.addEventListener('mouseenter', () => {
  frame.addEventListener('mousemove', mouseMove)
})

frame.addEventListener('mouseleave', () => {
  frame.removeEventListener('mousemove', mouseMove)
  card.style.boxShadow = ''
  card_two.style.boxShadow = ''
  light.style.backgroundImage = ''
})

window.addEventListener('resize', () => {
  rect = frame.getBoundingClientRect()
  x = rect.x
  y = rect.y
  width = rect.width
  height = rect.height
})


