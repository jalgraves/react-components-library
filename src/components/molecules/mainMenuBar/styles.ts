import styled from 'styled-components'
import {StyledNavBarProps, TopNavProps} from './types'

export const StyledTopNav = styled.div<TopNavProps>`
.topNav {
  display: flex;
  flex-direction: row;
  font-family: ${props => props.$fontFamily};
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
    color: ${props => props.$linkcolor || "white"};
    font-family: ${props => props.linkFontFamily || props.$fontFamily};
  }
  a:hover {
    color: ${props => props.topNavAhoverColor || "red"};
  }
}
@media (max-width: 374px)
and (orientation: portrait)
and (-webkit-min-device-pixel-ratio: 2) {
  .topNav {
    display: none;
  }
}
@media (max-width: 700px)
and (orientation: portrait)
and (-webkit-min-device-pixel-ratio: 2) {
  .topNav {
    display: none;
  }
}
@media (min-width:320px)
and (max-width: 768px)
and (orientation: portrait)
and (-webkit-min-device-pixel-ratio: 2) {
  .topNav {
    display: none;
  }
}
@media (min-width: 600px)
and (max-width: 768px)
and (orientation: landscape)
and (-webkit-min-device-pixel-ratio: 2) {
  .topNav {
    display: none;
  }
}
`

export const StyledNavBar = styled.div<StyledNavBarProps>`
z-index: 999;
margin: 0;
padding: 0;
height: 5rem;
width: 100%;
font-family: ${props => props.$fontFamily};
font-size: 66.6%;
line-height: 1.15;
background-color: ${props => props.$backgroundColor || "red"};
position: fixed;
border-bottom: ${props => props.navBarBorderBottom || "1px solid #ccc"}};
box-shadow: ${props => props.navBarBoxShadow || "1px 1px 3px"};
.navBarLogo {
  img {
    margin: ${props => props.$imgStyles.margin || ".5em auto"};
    padding: ${props => props.$imgStyles.padding || "1em 0"};
    max-width: ${props => props.$imgStyles.maxWidth || "60vw"};
    max-height: ${props => props.$imgStyles.maxHeight || "4rem"};
    left: ${props => props.$imgStyles.left || "4rem"};
    top: ${props => props.$imgStyles.top || "1rem"};
  }
}
`
