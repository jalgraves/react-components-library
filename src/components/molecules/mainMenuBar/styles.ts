import styled from 'styled-components'
import { StyledNavBarProps } from './types'


export const StyledMainMenuBar = styled.div<StyledNavBarProps>`
z-index: 999;
display: flex;
margin: 0;
padding: 0;
height: 5rem;
width: 100%;
font-family: ${props => props.$fontFamily};
font-size: 66.6%;
line-height: 1.15;
background-color: ${props => props.$backgroundColor || "red"};
position: fixed;
border-bottom: ${props => props.$borderBottom || "1px solid #ccc"};
box-shadow: ${props => props.$boxShadow || "1px 1px #ccc"};
.navBarLogo {
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  left: 5rem;
  position: absolute;
  img {
    max-width: ${props => props.$imgStyles.maxWidth ?? "80vw"};
    max-height: ${props => props.$imgStyles.maxHeight ?? "3rem"};
  }
}
`

