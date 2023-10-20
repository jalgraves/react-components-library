import React from 'react'
import { StyledNavBar } from './styles'

interface NavBarLinksProps {
  pages?: any
  text?: string
  href?: string
  menuType?: any
}

function NavBarLinks(props: NavBarLinksProps) {
  const navBarLinks = []
  let id = 0
  for (const page of Object.keys(props.pages)) {
    if (props.pages[page][props.menuType] === true) {
      navBarLinks.push(
        <a id={`${props.pages[page].text}-mobile-link`} href={props.pages[page].text} key={id}>{props.pages[page].text}</a>
      )
    }
    ++id
  }
  return (
    <nav aria-details="NavBarLinks" className="topNav">{navBarLinks}</nav>
  )
}

interface NavBarProps {
  ariaDetails?: string
  fontColor?: string
  fontFamily?: string
  hoverColor?: string
  imgAlt?: string
  imgSource?: string
  imgStyles?: any
  pages?: any
}


function NavBar(props: NavBarProps) {
  return (
    <StyledNavBar
      aria-details={props.ariaDetails || "NavBar"} 
      $fontFamily={props.fontFamily}
      $fontColor={props.fontColor}
      $hoverColor={props.hoverColor}
    >
      <NavBarLinks pages={props.pages} menuType="topMenu" />
    </StyledNavBar>
  )
}

export default NavBar
