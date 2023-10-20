import React from "react"
import { StyledMainMenuBar } from "./styles"
import { toggleMenu, SlideMenu } from "./slideMenu"
import { NavBar } from "./nav"

interface MainMenuBarProps {
  ariaDetails?: string
  barColor?: string
  fontColor?: string
  fontFamily?: string
  hoverColor?: string
  navBarAriaDetails?: string
  navBarFontColor?: string
  navBarFontFamily?: string
  navBarHoverColor?: string
  mainMenuBarImgSource?: string
  mainMenuBarImgAlt?: string
  mainMenuBarImgStyles?: any
  mainMenuBarBorderBottom?: string
  mainMenuBarBoxShadow?: string
  pages: any
  slideMenuAriaDetails?: string
  slideMenuBackgroundColor: string
  slideMenuFontColor?: string
  slideMenuFontFamily?: string
  slideMenuFooterFontColor?: string
  slideMenuFooterFontFamily?: string
  slideMenuFooterFontSize?: string
  slideMenuFooterText?: string
  slideMenuHoverColor?: string
  slideMenuLinkListBorder?: string
  slideMenuLinkListBorderRadius?: string
  slideMenuLogoImgSource?: string
}

export interface NavBarLogoProps {
  imgAlt?: string
  imgSource?: string
}

const NavBarLogo = (props: NavBarLogoProps) => {
  return (
    <div className="navBarLogo">
      <a href="/">
        <img src={props.imgSource}  alt={props.imgAlt} />
      </a>
    </div>
  )
}


const MainMenuBar = (props: MainMenuBarProps) => {
  const defaultImgStyles = {
    maxWidth: "75vw",
    maxHeight: "3.5rem"
  }
  const navBarImgStyles = props.mainMenuBarImgStyles ? {...defaultImgStyles, ...props.mainMenuBarImgStyles} : defaultImgStyles
  return(
    <StyledMainMenuBar 
      aria-details={props.ariaDetails || "MainMenuBar"}
      $backgroundColor={props.barColor} 
      $borderBottom={props.mainMenuBarBorderBottom}
      $boxShadow={props.mainMenuBarBoxShadow}
      $fontFamily={props.fontFamily}
      $imgStyles={navBarImgStyles}
    >
      <SlideMenu 
        ariaDetails={props.slideMenuAriaDetails || "MainMenuBarSlideMenu"}
        backgroundColor={props.slideMenuBackgroundColor}
        fontColor={props.slideMenuFontColor || props.fontColor}
        fontFamily={props.slideMenuFontFamily || props.fontFamily}
        footerFontColor={props.slideMenuFooterFontColor || props.fontColor}
        footerFontFamily={props.slideMenuFooterFontFamily || props.fontFamily}
        footerFontSize={props.slideMenuFooterFontSize}
        footerText={props.slideMenuFooterText}
        headerImgSource={props.slideMenuLogoImgSource}
        hoverColor={props.slideMenuHoverColor || props.hoverColor}
        linkListBorder={props.slideMenuLinkListBorder}
        linkListBorderRadius={props.slideMenuLinkListBorderRadius}
        pages={props.pages}
      />
      {toggleMenu("open")}
      <NavBarLogo imgSource={props.mainMenuBarImgSource} imgAlt={props.mainMenuBarImgAlt} />
      <NavBar
        ariaDetails={props.navBarAriaDetails || "MainMenuBarNavBar"}
        fontFamily={props.navBarFontFamily || props.fontFamily}
        fontColor={props.navBarFontColor || props.fontColor}
        hoverColor={props.navBarHoverColor || props.hoverColor}
        pages={props.pages}
      />
    </StyledMainMenuBar>
  )
}

export default MainMenuBar
