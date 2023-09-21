import anime from 'animejs'

export function menuOpen() {
  anime({
    targets: ".slideMenu",
    easing: "easeInOutQuad",
    translateX: "25rem"
  })
  anime({
    targets: ".animate",
    easing: "linear",
    translateX: "27rem",
    delay: 300
  })
}

export function menuClose() {
  anime({
    targets: ".slideMenu",
    easing: "easeInOutQuad",
    translateX: "-25rem"
  })
  anime({
    targets: ".animate",
    easing: "linear",
    translateX: "-27rem",
  })
}
