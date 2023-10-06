import styled from "styled-components"
import {HamburgerProps, SlideMenuProps} from "./types"

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

export const StyledMenuClose = styled.div<SlideMenuProps>`
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
interface StyledSlideMenu {
  $backgroundColor?: string
  $border?: string
  $borderRadius?: string
  $footerFontSize?: string
  $footerFontColor?: string
  $footerFontFamily?: string
  $linkListBorder?: string
  $linkListBorderRadius?: string
  $imgStyles?: any
}

export const StyledSlideMenu = styled.div<StyledSlideMenu>`
.slideMenu {
  background-color: ${props => props.$backgroundColor || "red"};
  border-radius: ${props => props.$borderRadius || ".5em"};
  border: ${props => props.$border || "1px solid #ccc"};
  display: flex;
  flex-direction: column;
  left: -25rem;
  margin: auto;
  padding: 1em 2em;
  position: absolute;
  width: 25rem;
  z-index: 1001;
  img {
    display: ${props => props.$imgStyles.display ?? "flex"};
    margin: ${props => props.$imgStyles.margin ?? ".5em auto"};
    padding: ${props => props.$imgStyles.padding ?? "1em 0"};
    max-width: ${props => props.$imgStyles.maxWidth ?? "85%"};
    max-height: ${props => props.$imgStyles.maxHeight ?? "unset"};
    width: ${props => props.$imgStyles.width ?? "unset"};
  }
  h2 {
    color: ${props => props.$footerFontColor};
    font-family: ${props => props.$footerFontFamily};
    font-size: ${props => props.$footerFontSize || "1.75rem"};
    font-weight: 700;
    letter-spacing: .15em;
    margin: auto;
    padding: 1rem;
    text-decoration: none;
  }
}
.slideMenuLinkList {
  font-size: 1rem;
  border: ${props => props.$linkListBorder || ""};
  border-radius: ${props => props.$linkListBorderRadius || ""};
}
.menuHead & {
  width: min-content;
  display: block;
  position: relative;
}
`

export const StyledLink = styled.div<SlideMenuProps>`
  a {
    color: ${props => props.$fontColor || "green"};
    display: block;
    font-family: ${props => props.$fontFamily || "unset"};
    font-size: 1.5em;
    font-weight: 700;
    left: -17em;
    letter-spacing: .15em;
    margin: auto;
    padding: .5em 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  }
  a:hover {
    color: ${props => props.$hoverColor || "#000000"};
  }
`
