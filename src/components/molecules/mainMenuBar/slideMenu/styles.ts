import styled from "styled-components"
import {HamburgerProps, SlideMenuProps, StyledSlideMenuProps, StyledSlideMenuLinkProps} from "./types"

export const StyledHamburger = styled.div<HamburgerProps>`
.hamburger {
  position: ${props => props.$hamburgerPosition || "fixed"};
  z-index: ${props => props.$hamburgerZIndex || "1000"};
  margin: ${props => props.$hamburgerMargin || ".25em"};
  padding: ${props => props.$hamburgerPadding || "0"};
  width: ${props => props.$hamburgerWidth || "3em"};
  height: ${props => props.$hamburgerHeight || "2.75em"};
  border: ${props => props.$hamburgerBorder || "none"};
  text-indent: ${props => props.$hamburgerTextIndent || "2.5em"};
  font-size: ${props => props.$hamburgerFontSize || "1.5em"};
  color: ${props => props.$hamburgerColor || "transparent"};
  background: ${props => props.$hamburgerBackground || "white"};
  border-radius: ${props => props.$hamburgerBorderRadius || ".35em"};
  opacity: ${props => props.$hamburgerOpacity || ".8"};
  left: ${props => props.$hamburgerLeft || ".5rem"};
  top: ${props => props.$hamburgerTop || "1em"};
}
.hamburger::before {
  position: ${props => props.$hamburgerBeforePosition || "absolute"};
  top: ${props => props.$hamburgerBeforeTop || "0.5em"};
  right: ${props => props.$hamburgerBeforeRight || "0.5em"};
  bottom: ${props => props.$hamburgerBeforeBottom || "0.5em"};
  left: ${props => props.$hamburgerBeforeLeft || "0.5em"};
  background: ${props => props.$hamburgerBeforeBackground || "linear-gradient(#373a47 20%, transparent 20%, transparent 40%, #373a47 40%, #373a47 60%, transparent 60%, transparent 80%, #373a47 80%)"};
  content: '';
  font-family: ${props => props.$hamburgerBeforeFontFamily || "'Raleway', Arial, sans-serif"};
  color: ${props => props.$hamburgerBeforeColor || "#fbfb0e"};
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

export const StyledSlideMenu = styled.div<StyledSlideMenuProps>`
  background-color: ${props => props.$backgroundColor || "red"};
  border-radius: ${props => props.$borderRadius || ".5em"};
  border: ${props => props.$border || "1px solid #ccc"};
  display: ${props => props.$display || "flex"};
  flex-direction: ${props => props.$flexDirection || "column"};
  left: ${props => props.$left || "-25rem"};
  margin: ${props => props.$margin || "auto"};
  padding: ${props => props.$padding || "1em 2em"};
  position: ${props => props.$position || "absolute"};
  width: ${props => props.$width || "25rem"};
  z-index: 1001;
  img {
    display: ${props => props.$imgStyles.display ?? "flex"};
    margin: ${props => props.$imgStyles.margin ?? ".5em auto"};
    padding: ${props => props.$imgStyles.padding ?? "1em 0"};
    max-width: ${props => props.$imgStyles.maxWidth ?? "85%"};
    max-height: ${props => props.$imgStyles.maxHeight ?? "unset"};
    width: ${props => props.$imgStyles.width ?? "unset"};
  }
  h1 {
    color: ${props => props.$h1Color || "inherit"};
    display: ${props => props.$h1Display || "inherit"};
    font-family: ${props => props.$h1FontFamily || "inherit"};
    font-size: ${props => props.$h1FontSize || "inherit"};
    font-weight: ${props => props.$h1FontWeight || "inherit"};
    justify-content: ${props => props.$h1JustifyContent || "unset"};
    letter-spacing: ${props => props.$h1LetterSpacing || "unset"};
    line-height: ${props => props.$h1LineHeight || "inherit"};
    margin: ${props => props.$h1Margin || "0"};
    max-width: ${props => props.$h1MaxWidth || "unset"};
    padding: ${props => props.$h1Padding || "0"};
    text-align: ${props => props.$h1TextAlign || "unset"};
    text-shadow: ${props => props.$h1TextShadow || "unset"};
    text-transform: ${props => props.$h1TextTransform || "none"};
  }
  h2 {
    color: ${props => props.$h2Color || "inherit"};
    display: ${props => props.$h2Display || "inherit"};
    font-family: ${props => props.$h2FontFamily || "inherit"};
    font-size: ${props => props.$h2FontSize || "1.75rem"};
    font-weight: ${props => props.$h2FontWeight || "700"};
    justify-content: ${props => props.$h2JustifyContent || "unset"};
    letter-spacing: ${props => props.$h2LetterSpacing || ".15em"};
    line-height: ${props => props.$h2LineHeight || "initial"};
    margin: ${props => props.$h2Margin || "auto"};
    max-width: ${props => props.$h2MaxWidth || "unset"};
    padding: ${props => props.$h2Padding || "0"};
    text-align: ${props => props.$h2TextAlign || "unset"};
    text-shadow: ${props => props.$h2TextShadow || "unset"};
    text-transform: ${props => props.$h2TextTransform || "none"};
  }

.menuHead & {
  width: min-content;
  display: block;
  position: relative;
}
`

interface StyledSlideMenuLinkListProps {
  $border?: string
  $borderRadius?: string
  $display?: string
  $flexFlow?: string
  $margin?: string
  $outline?: string
  $padding?: string
  $position?: string
  $width?: string
}

export const StyledSlideMenuLinkList = styled.div<StyledSlideMenuLinkListProps>`
  border: ${props => props.$border || "initial"};
  border-radius: ${props => props.$borderRadius || "initial"};
  display: ${props => props.$display || "flex"};
  flex-flow: ${props => props.$flexFlow || "column wrap"};
  margin: ${props => props.$margin || "auto"};
  outline: ${props => props.$outline || "initial"};
  padding: ${props => props.$padding || "0"};
  position: ${props => props.$position || "relative"};
  width: ${props => props.$width || "initial"};
`

export const StyledSlideMenuLink = styled.div<StyledSlideMenuLinkProps>`
  a {
    color: ${props => props.$fontColor || "green"};
    display: ${props => props.$display || "block"};
    font-family: ${props => props.$fontFamily || "unset"};
    font-size: ${props => props.$fontSize || "1.5rem"};
    font-weight: ${props => props.$fontWeight || "initial"};
    left: ${props => props.$left || "-17em"};
    letter-spacing: ${props => props.$letterSpacing || ".15rem"};
    margin: ${props => props.$margin || "auto"};;
    padding: ${props => props.$padding || ".5em 0"};
    position: ${props => props.$position || "relative"};
    text-decoration: ${props => props.$textDecoration || "none"};
    text-transform: ${props => props.$textTransform || "uppercase"};
  }
  a:hover {
    color: ${props => props.$hoverColor || "red"};
  }
`
