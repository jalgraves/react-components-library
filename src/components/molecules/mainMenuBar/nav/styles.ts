import styled from 'styled-components'
import { StyledNavBarProps } from './types'

export const StyledNavBar = styled.div<StyledNavBarProps>`
.topNav {
  display: flex;
  flex-direction: row;
  font-family: ${props => props.$fontFamily};
  margin: auto;
  position: fixed;
  top: 1em;
  right: 1vw;
  a {
    color: ${props => props.$fontColor ?? "white"};
    padding: ${props => props.$aPadding ?? "1em 1.25em"};
    font-size: ${props => props.$fontSize ?? "1.75em"};
    font-weight: ${props => props.$fontWeight ?? "900"};
    letter-spacing: ${props => props.$letterSpacing ?? ".15em"};
    text-transform: ${props => props.$textTransform ?? "uppercase"};
    text-decoration: none;
  }
  a:hover {
    color: ${props => props.$hoverColor ?? "red"};
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

