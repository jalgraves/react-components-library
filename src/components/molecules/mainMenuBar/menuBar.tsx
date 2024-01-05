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
  // slideMenuBackgroundColor: string
  slideMenuBorder?: string
  slideMenuBorderRadius?: string
  slideMenuFontColor?: string
  slideMenuFontFamily?: string
  // slideMenuFooterFontColor?: string
  // slideMenuFooterFontFamily?: string
  // slideMenuFooterFontSize?: string
  // slideMenuFooterText?: string
  // slideMenuFooterFontWeight?: string
  // slideMenuHoverColor?: string
  // slideMenuLinkListBorder?: string
  // slideMenuLinkListBorderRadius?: string
  // slideMenuLinkListFontSize?: string
  // slideMenuLinkListFontWeight?: string
  // slideMenuLinkListLetterSpacing?: string
  // slideMenuHeaderFontColor?: string
  // slideMenuHeaderFontFamily?: string
  // slideMenuHeaderFontSize?: string
  // slideMenuHeaderText?: string
  // slideMenuHeaderFontWeight?: string
  // slideMenuLogoImgSource?: string
  slideMenu?: any
  hamburgerBackground?: string
  hamburgerBorder?: string
  hamburgerBorderRadius?: string
  hamburgerColor?: string
  hamburgerFontSize?:string
  hamburgerHeight?:string
  hamburgerLeft?: string
  hamburgerMargin?: string
  hamburgerOpacity?: string
  hamburgerPadding?: string
  hamburgerPosition?: string
  hamburgerTextIndent?:string
  hamburgerTop?: string
  hamburgerWidth?: string
  hamburgerZIndex?: string
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
  const hamburgerStyles = {
    width: props.hamburgerWidth || "3rem" ,
    background: props.hamburgerBackground || "red",
    position: props.hamburgerPosition || "fixed",
    zIndex: props.hamburgerZIndex || "1000",
    margin: props.hamburgerMargin || ".25em",
    padding: props.hamburgerPadding || "0",
    height: props.hamburgerHeight || "2.75em",
    border: props.hamburgerBorder || "none",
    textIndent: props.hamburgerTextIndent || "2.5em",
    fontSize: props.hamburgerFontSize || "1.5em",
    color: props.hamburgerColor || "transparent",
    borderRadius: props.hamburgerBorderRadius || ".35em",
    opacity: props.hamburgerOpacity || ".8",
    left: props.hamburgerLeft || ".5rem",
    top: props.hamburgerTop || "1em",
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
        ariaDetails={props.slideMenu.ariaDetails || "top bar slide menu"}
        border={props.slideMenu.border}
        borderRadius={props.slideMenu.borderRadius}
        backgroundColor={props.slideMenu.backgroundColor}
        fontColor={props.slideMenu.fontColor || props.fontColor}
        fontFamily={props.slideMenu.fontFamily || props.fontFamily}
        footer={props.slideMenu.footer}
        header={props.slideMenu.header}
        linkList={props.slideMenu.linkList}
        hamburgerStyles={hamburgerStyles}
      />
      {toggleMenu(hamburgerStyles, "open")}
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
