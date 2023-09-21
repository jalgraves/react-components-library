import styled from 'styled-components'
import {HamburgerProps, MenuLinkProps, MenuCloseProps, NavBarProps, SlideMenuProps, TopNavProps} from './types'

export const StyledHamburger = styled.div<HamburgerProps>`
.hamburger {
  position: ${props => props.hamburgerPosition || "fixed"};
  z-index: ${props => props.hamburgerZIndex || "1000"};
  margin: ${props => props.hamburgerMargin || ".25em"};
  padding: ${props => props.hamburgerPadding || "0"};
  width: ${props => props.hamburgerWidth || "3em"};
  height: ${props => props.hamburgerHeight || "2.75em"};
  border: ${props => props.hamburgerBorder || "none"};
  text-indent: ${props => props.hamburgerTextIndent || "2.5em"};
  font-size: ${props => props.hamburgerFontSize || "1.5em"};
  color: ${props => props.hamburgerColor || "transparent"};
  background: ${props => props.hamburgerBackground || "white"};
  border-radius: ${props => props.hamburgerBorderRadius || ".35em"};
  opacity: ${props => props.hamburgerOpacity || ".8"};
  left: ${props => props.hamburgerLeft || ".5rem"};
  top: ${props => props.hamburgerTop || "1em"};
}
.hamburger::before {
  position: ${props => props.hamburgerBeforePostion || "absolute"};
  top: ${props => props.hamburgerBeforeTop || "0.5em"};
  right: ${props => props.hamburgerBeforeRight || "0.5em"};
  bottom: ${props => props.hamburgerBeforeBottom || "0.5em"};
  left: ${props => props.hamburgerBeforeLeft || "0.5em"};
  background: ${props => props.hamburgerBeforeBackground || "linear-gradient(#373a47 20%, transparent 20%, transparent 40%, #373a47 40%, #373a47 60%, transparent 60%, transparent 80%, #373a47 80%)"};
  content: '';
  font-family: ${props => props.hamburgerBeforeFontFamily || "'Raleway', Arial, sans-serif"};
  color: ${props => props.hamburgerBeforeColor || "#fbfb0e"};
}
@media (min-width: 1000px)
and (-webkit-min-device-pixel-ratio: 2) {
  .hamburger {
    display: none;
  }
}
`

export const StyledMenuClose = styled.div<MenuCloseProps>`
.menuClose {
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 1em;
  top: 1em;
  overflow: hidden;
  text-indent: 1em;
  font-size: 0.75em;
  border: none;
  background: transparent;
  color: transparent;
}
.menuClose::before,
.menuClose::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 100%;
  top: 0;
  left: 50%;
  background: #bdc3c7;
}
.menuClose::before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.menuClose::after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
`

export const StyledTopNav = styled.div<TopNavProps>`
.top_nav {
  display: flex;
  flex-direction: row;
  margin: auto;
  position: fixed;
  top: 1em;
  right: 1vw;
  a {
    padding: ${props => props.linkPadding || "1em 1.25em"};
    font-size: ${props => props.linkFontSize || "1.75em"};
    font-weight: ${props => props.linkFontWeight || "900"};
    letter-spacing: ${props => props.linkLetterSpacing || ".15em"};
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.linkColor || "white"};
    font-family: ${props => props.linkFontFamily || "unset"};
  }
  a:hover {
    color: ${props => props.topNavAhoverColor || "red"};
  }
}
@media (max-width: 374px)
and (orientation: portrait)
and (-webkit-min-device-pixel-ratio: 2) {
  .top_nav {
    display: none;
  }
}
@media (max-width: 700px)
and (orientation: portrait)
and (-webkit-min-device-pixel-ratio: 2) {
  .top_nav {
    display: none;
  }
}
@media (min-width:320px)
and (max-width: 768px)
and (orientation: portrait)
and (-webkit-min-device-pixel-ratio: 2) {
  .top_nav {
    display: none;
  }
}
@media (min-width: 600px)
and (max-width: 768px)
and (orientation: landscape)
and (-webkit-min-device-pixel-ratio: 2) {
  .top_nav {
    display: none;
  }
}
`

export const StyledSlideMenu = styled.div<SlideMenuProps>`
.slideMenu {
  margin: auto;
  padding: 1em 2em;
  display: flex;
  width: 25rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor || "red"};
  border: ${props => props.slideMenuBorder || "1px solid #ccc"};
  border-radius: .5rem;
  position: absolute;
  left: -25rem;
  img {
    margin: .5em auto;
    padding: 1em 0;
    display: flex;
    width: 10rem;
    max-height: unset;
    left: 4rem;
    top: 1rem;
  }
  h2 {
    margin: auto;
    padding: 1rem;
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: .15em;
    text-decoration: none;
    color: ${props => props.slideMenuH2color || "1px solid #ccc"};
    font-family: ${props => props.slideMenuH2fontFamily || "1px solid #ccc"};
  }
}
.menu_list {
  font-size: 1rem;
  border: ${props => props.slideMenuListBorder || ""};
  border-radius: ${props => props.slideMenuListBorderRadius || ""};
}
.menuHead & {
  width: min-content;
  display: block;
  position: relative;
}
`

export const StyledNavBar = styled.div<NavBarProps>`
z-index: 999;
margin: 0;
padding: 0;
height: 5rem;
width: 100%;
font-size: 66.6%;
line-height: 1.15;
background-color: ${props => props.backgroundColor || "red"};
position: fixed;
border-bottom: ${props => props.navBarBorderBottom || "1px solid #ccc"}};
box-shadow: ${props => props.navBarBoxShadow || "1px 1px 3px"};
img {
  margin: .5em auto;
  padding: 1em 0;
  max-width: 60vw;
  max-height: 4em;
  left: 4rem;
  top: 1rem;
}
`

export const StyledLink = styled.div<MenuLinkProps>`
a {
  margin: auto;
  padding: .5em 0;
  display: block;
  position: relative;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
  left: -17em;
  font-family: ${props => props.menuLinkFontFamily || "unset"};
  color: ${props => props.linkColor || "green"};
  text-decoration: none;
}
a:hover {
  color: ${props => props.menuLinkHoverColor || "#000000"};
}
`
