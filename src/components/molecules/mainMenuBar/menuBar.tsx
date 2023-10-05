import React from "react"
import { StyledNavBar} from "./styles"
import { toggleMenu, SlideMenu } from "./slideMenu"
import { NavBarLogo, NavBarLinks } from "./topNav"

interface MainMenuBarProps {
  ariaDetails?: string
  barColor?: string
  fontColor?: string
  fontFamily?: string
  hoverColor?: string
  linkcolor?: string
  linkhovercolor?: string
  menuFooterText?: string
  navBarFontColor?: string
  navBarFontFamily?: string
  navBarHoverColor?: string
  navBarLogoImgSource?: string
  navBarLogoImgStyles?: any
  pages: any
  slideMenuBackgroundColor?: string
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

const MainMenuBar = (props: MainMenuBarProps) => {
  //console.log("MainMenuBar")
  //console.log(props)
  return(
    <StyledNavBar $backgroundColor={props.barColor} $fontFamily={props.fontFamily} $imgStyles={props.navBarLogoImgStyles} aria-details="NavBar">
      <SlideMenu 
        aria-details="NavBarSlideMenu"
        $backgroundColor={props.slideMenuBackgroundColor}
        $fontColor={props.slideMenuFontColor || props.fontColor}
        $fontFamily={props.slideMenuFontFamily || props.fontFamily}
        $footerFontColor={props.slideMenuFooterFontColor || props.fontColor}
        $footerFontFamily={props.slideMenuFooterFontFamily || props.fontFamily}
        $footerFontSize={props.slideMenuFooterFontSize}
        $hoverColor={props.slideMenuHoverColor || props.hoverColor}
        $linkListBorder={props.slideMenuLinkListBorder}
        $linkListBorderRadius={props.slideMenuLinkListBorderRadius}
        footerText={props.slideMenuFooterText}
        headerImgSource={props.slideMenuLogoImgSource}
        pages={props.pages}
      />
      {toggleMenu("open")}
      <NavBarLogo imgSource={props.navBarLogoImgSource} imgStyles={props.navBarLogoImgStyles} />
      <NavBarLinks
        fontFamily={props.navBarFontFamily || props.fontFamily}
        linkcolor={props.navBarFontColor || props.fontColor}
        linkhovercolor={props.navBarHoverColor || props.hoverColor}
        pages={props.pages}
      />
    </StyledNavBar>
  )
}

export default MainMenuBar
