import React from 'react'
import {
  StyledSlideMenu,
  StyledNavBar,
  StyledLink } from "./styles"
import { Icon } from "../"
import {toggleMenu, SlideMenuLogo } from "./navSlideMenu"
import { NavBarLogo, NavBarLinks, linkProps } from "./topNav"

const iconStyle = {
  color: '#fcba03',
  fontSize: '1em'
}

interface SlideMenuItemsProps {
  menuFontColor?: string
  pages: any
}

function SlideMenuItems(props: SlideMenuItemsProps) {
  const sliderItems = props.pages.map((page: any) =>
    <StyledLink linkColor={props.menuFontColor} key={page.id}>
    {page.iconName &&
      <a id={`${page.text}-mobile-link`} href={page.name} className="animate">
      <Icon iconName={page.iconName} style={iconStyle} /> {page.text}</a>
    }
    </StyledLink>
  )
  return (
    <div>{sliderItems}</div>
  )
}

interface MainMenuBarProps {
  barColor?: string
  menuColor?: string
  menuFontColor?: string
  linkColor?: string
  linkHoverColor?: string
  navBarLogoImgPath?: string
  slideMenuLogoImgPath?: string
  pages: any
  footer?: string
}

export const MainMenuBar = (props: MainMenuBarProps) => {
  const menuList = <SlideMenuItems menuFontColor={props.menuFontColor} pages={linkProps(props.pages, 'menuList')} />
  return(
    <StyledNavBar backgroundColor={props.barColor} aria-labelledby="Navigation bar">
      <StyledSlideMenu backgroundColor={props.menuColor} aria-labelledby="Slide menu">
        <div className="slide_menu">
        <SlideMenuLogo imgSource={props.slideMenuLogoImgPath} />
          <div className="menu_list">{menuList}</div>
          {toggleMenu("close")}
          <h2>{props.footer}</h2>
        </div>
      </StyledSlideMenu>
      {toggleMenu("open")}
      <NavBarLogo imgPath={props.navBarLogoImgPath} />
      <NavBarLinks
        pages={props.pages}
        linkColor={props.linkColor}
        linkHoverColor={props.linkHoverColor}
      />
    </StyledNavBar>
  )
}
