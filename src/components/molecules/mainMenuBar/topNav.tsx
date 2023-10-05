import React from 'react'
import { StyledTopNav } from './styles'
import { TopNavProps } from './types'

function linkProps(pages: any, menuType: string) {
  const pageProps = []
  let id = 0
  for (const page of Object.keys(pages)) {
    if (pages[page][menuType] === true) {
      pageProps.push({id: id, name: pages[page].name, iconName: pages[page].icon, text: pages[page].text})
    }
    ++id
  }
  return pageProps
}

interface NavBarLogoProps {
  imgSource?: string
  imgStyles?: object
  staticUrl?: string
}

export const NavBarLogo = (props: NavBarLogoProps) => {
  return (
    <a href="/" className="navBarLogo">
      <img style={props.imgStyles} src={props.imgSource}  alt="" />
    </a>
  )
}

function TopNavBar(props: TopNavProps) {
  const navBar = props.topNavLinks.map((prop: any) =>
    <a id={`${prop.text}-link`} key={prop.id} href={prop.name}>{prop.text}</a>
  )
  return (
    <StyledTopNav 
      $fontFamily={props.$fontFamily}
      $linkcolor={props.$linkcolor}
      $linkhovercolor={props.$linkhovercolor}
    >
      <nav className="topNav">{navBar}</nav>
    </StyledTopNav>
  )
}

interface NavBarLinkProps {
  ariaDetails?: string
  fontFamily?: string
  pages: any
  linkcolor?: string
  linkhovercolor?: string
  imgStyle?: any
}

export const NavBarLinks = (props: NavBarLinkProps) => {
  return (
    <TopNavBar
      $fontFamily={props.fontFamily}
      $linkcolor={props.linkcolor}
      $linkhovercolor={props.linkhovercolor}
      topNavLinks={linkProps(props.pages, 'topMenu')}
    />
  )
}
