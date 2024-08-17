import styled from 'styled-components'
import { StyledSideItemProps } from './types'

export const StyledSideItem = styled.div<StyledSideItemProps>`
  background: ${props => props.$background};
  border-radius: ${props => props.$borderRadius};
  border: ${props => props.$border};
  box-shadow: ${props => props.$boxShadow};
  display: ${props => props.$display};
  flex-flow: ${props => props.$flexFlow || "row wrap"};
  margin: ${props => props.$margin};
  max-width: ${props => props.$maxWidth || "unset" };
  padding: ${props => props.$padding};
  width: ${props => props.$width};
  p {
    color: ${props => props.$pColor};
    font-family: ${props => props.$pFontFamily};
    font-size: ${props => props.$pFontSize};
    font-weight: ${props => props.$pFontWeight};
    line-height: ${props => props.$pLineHeight};
    text-shadow: ${props => props.$pTextShadow};
    text-transform: ${props => props.$pTextTransform};
  }

`
