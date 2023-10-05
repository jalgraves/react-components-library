import React from "react"
import anime from "animejs"
import { StyledMenuClose, StyledHamburger } from "./styles"

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

export function toggleMenu(action: string) {
  return (
    <StyledHamburger aria-details="hamburgerMenu">
      {action === "open" &&
        <button className="hamburger" id="open_menu" onClick={() => menuOpen()}>Open Menu</button>
      }
      {action === "close" &&
        <StyledMenuClose>
          <button className="menuClose" id="close_menu" onClick={() => menuClose()}>Close Menu</button>
        </StyledMenuClose>
      }
    </StyledHamburger>
  )
}
