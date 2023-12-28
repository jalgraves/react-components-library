import styled from 'styled-components'
import { StyledButtonProps } from "./types"

export const StyledButton = styled.div<StyledButtonProps>`
  display: ${props => props.$display || "flex"};
  margin: ${props => props.$outerMargin || "unset"};
  padding: ${props => props.$outerPadding || ".5rem"};
  position: ${props => props.$position || "unset"};
  button {
    background-color: ${props => props.$backgroundColor};
    border: ${props => props.$border || "unset"};
    border-radius: ${props => props.$borderRadius || ".5rem"};
    color: ${props => props.$textColor};
    font-family: ${props => props.$fontFamily};
    font-size: ${props => props.$fontSize || "1rem"};
    font-weight: ${props => props.$fontWeight || "900"};
    letter-spacing: ${props => props.$letterSpacing || ".2rem"};
    margin: ${props => props.$margin || ".25rem auto"};
    max-width: ${props => props.$maxWidth || "unset"};
    padding: ${props => props.$padding || "1rem"};
    text-align: ${props => props.$textAlign || "center"};
    text-decoration: ${props => props.$textDecoration || "none"};
    text-transform: ${props => props.$textTransform || "uppercase"};
    width: ${props => props.$width || "12rem"};
  }
  button:hover {
    background-color: ${props => props.$hoverBackgroundColor};
    border: ${props => props.$hoverBorder || "unset"};
    color: ${props => props.$hoverTextColor};
  }
`
