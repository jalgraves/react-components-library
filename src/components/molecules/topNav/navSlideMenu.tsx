import React from 'react'
import { StyledMenuClose, StyledHamburger } from './styles'
import * as Slide from './menuSlide'


export function toggleMenu(action: string) {
  return (
    <StyledHamburger>
      {action === "open" &&
        <button className="hamburger" id="open_menu" onClick={() => Slide.menuOpen()}>Open Menu</button>
      }
      {action === "close" &&
        <StyledMenuClose>
          <button className="menuClose" id="close_menu" onClick={() => Slide.menuClose()}>Close Menu</button>
        </StyledMenuClose>
      }
    </StyledHamburger>
  )
}

interface SlideMenuLogoProps {
  imgSource?: string
  imgAltDescription?: string
}

export const SlideMenuLogo = (props: SlideMenuLogoProps) => {
  return (
    <div id="slideMenuLogo">
      <img src={`${props.imgSource}`}  alt={props.imgAltDescription} />
    </div>
  )
}
