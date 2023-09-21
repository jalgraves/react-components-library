import React from 'react'
import { StyledTopNav } from './styles'
import { TopNavProps } from './types'

export function linkProps(pages: any, menuType: string) {
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
  imgPath?: string
  imgStyles?: object
  staticUrl?: string
}

export const NavBarLogo = (props: NavBarLogoProps) => {
  // var imgStyles = {position: 'absolute', padding: '.25em'}
  return (
    <a href="/">
      <img style={props.imgStyles} src={`${props.staticUrl}${props.imgPath}`}  alt="" />
    </a>
  )
}

function TopNavBar(props: TopNavProps) {
  const navBar = props.topNavLinks.map((prop: any) =>
    <a id={`${prop.text}-link`} key={prop.id} href={prop.name}>{prop.text}</a>
  )
  return (
    <StyledTopNav 
      linkColor={props.linkColor}
      linkHoverColor={props.linkHoverColor}
    >
      <nav className="top_nav">{navBar}</nav>
    </StyledTopNav>
  )
}

interface NavBarLinkProps {
  pages: any
  linkColor?: string
  linkHoverColor?: string
}

export const NavBarLinks = (props: NavBarLinkProps) => {
  return (
    <TopNavBar
      linkColor={props.linkColor}
      linkHoverColor={props.linkHoverColor}
      topNavLinks={linkProps(props.pages, 'topMenu')}
    />
  )
}
