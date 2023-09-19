import styled from 'styled-components'
import ContentBlockProps from './types'

export const StyledContentBlock = styled.div<ContentBlockProps>`
  background-color: ${props => props.backgroundColor || "unset"};
  border-radius: ${props => props.borderRadius || "unset"};
  border-top: ${props => props.borderTop || "unset"};
  border-bottom: ${props => props.borderBottom || "unset"};
  color: ${props => props.fontColor || "unset"};
  display: ${props => props.display || "unset"};
  flex-flow: ${props => props.flexFlow || "unset"};
  font-family: ${props => props.fontFamily || "unset"};
  line-height: ${props => props.lineHeight || "unset"};
  margin: ${props => props.margin || "0"};
  outline: ${props => props.outline || "uset"};
  max-width: ${props => props.maxWidth || "unset"};
  padding: ${props => props.padding || "0"};
  width: ${props => props.width || "100vw"};
  text-align: ${props => props.textAlign || "unset"};
  header {
    img {
      max-width: ${props => props.headerImgMaxWidth || "unset"};
      padding: ${props => props.headerImgPadding || "unset"};
    }
  }
  footer {
    img {
      max-width: ${props => props.footerImgMaxWidth || "20rem"};
    }
  }
  section {
    all: inherit;
    border: ${props => props.border || "unset"};
    width: ${props => props.sectionWidth || "unset"};
    margin: ${props => props.sectionMargin || "auto"};
    padding: ${props => props.sectionPadding || "unset"};
  }
  h1 {
    color: ${props => props.h1Color || "inherit"};
    display: ${props => props.h1Display || "inherit"};
    font-family: ${props => props.h1FontFamily || "inherit"};
    font-size: ${props => props.h1FontSize || "unset"};
    font-weight: ${props => props.h1FontWeight || "unset"};
    justify-content: ${props => props.h1JustifyContent || "unset"};
    letter-spacing: ${props => props.h1LetterSpacing || "unset"};
    line-height: ${props => props.h1LineHeight || "inherit"};
    margin: ${props => props.h1Margin || "0"};
    max-width: ${props => props.h1MaxWidth || "unset"};
    padding: ${props => props.h1Padding || "0"};
    text-align: ${props => props.h1TextAlign || "unset"};
    text-shadow: ${props => props.h1TextShadow || "unset"};
    text-transform: ${props => props.h1TextTransform || "none"};
  }
  h2 {
    color: ${props => props.h2Color || "inherit"};
    display: ${props => props.h2Display || "inherit"};
    font-family: ${props => props.h2FontFamily || "inherit"};
    font-size: ${props => props.h2FontSize || "unset"};
    font-weight: ${props => props.h2FontWeight || "unset"};
    justify-content: ${props => props.h3JustifyContent || "unset"};
    letter-spacing: ${props => props.h2LetterSpacing || "unset"};
    line-height: ${props => props.h2LineHeight || "inherit"};
    margin: ${props => props.h2Margin || "0"};
    max-width: ${props => props.h2MaxWidth || "unset"};
    padding: ${props => props.h2Padding || "0"};
    text-align: ${props => props.h2TextAlign || "unset"};
    text-shadow: ${props => props.h2TextShadow || "unset"};
    text-transform: ${props => props.h2TextTransform || "none"};
  }
  h3 {
    color: ${props => props.h3Color || "inherit"};
    font-family: ${props => props.h3FontFamily || "inherit"};
    font-size: ${props => props.h3FontSize || "unset"};
    font-weight: ${props => props.h3FontWeight || "unset"};
    justify-content: ${props => props.h3JustifyContent || "unset"};
    letter-spacing: ${props => props.h3LetterSpacing || "unset"};
    line-height: ${props => props.h3LineHeight || "inherit"};
    margin: ${props => props.h3Margin || "0"};
    max-width: ${props => props.h3MaxWidth || "unset"};
    padding: ${props => props.h3Padding || "0"};
    text-align: ${props => props.h3TextAlign || "unset"};
    text-shadow: ${props => props.h3TextShadow || "unset"};
    text-transform: ${props => props.h3TextTransform || "none"};
  }
  h4 {
    color: ${props => props.h4Color|| "inherit"};
    font-family: ${props => props.h4FontFamily || "inherit"};
    font-size: ${props => props.h4FontSize || "unset"};
    font-weight: ${props => props.h4FontWeight || "unset"};
    justify-content: ${props => props.h4JustifyContent || "unset"};
    letter-spacing: ${props => props.h4LetterSpacing || "unset"};
    line-height: ${props => props.h4LineHeight || "inherit"};
    margin: ${props => props.h4Margin || "0"};
    max-width: ${props => props.h4MaxWidth || "unset"};
    padding: ${props => props.h4Padding || "0"};
    text-align: ${props => props.h4TextAlign || "unset"};
    text-shadow: ${props => props.h4TextShadow || "unset"};
    text-transform: ${props => props.h4TextTransform || "none"};
  }
  h5 {
    color: ${props => props.h5Color || "inherit"};
    font-family: ${props => props.h5FontFamily || "inherit"};
    font-size: ${props => props.h5FontSize || "unset"};
    font-weight: ${props => props.h5FontWeight || "unset"};
    justify-content: ${props => props.h5JustifyContent || "unset"};
    letter-spacing: ${props => props.h5LetterSpacing || "unset"};
    line-height: ${props => props.h5LineHeight || "inherit"};
    margin: ${props => props.h5Margin || "0"};
    max-width: ${props => props.h5MaxWidth || "unset"};
    padding: ${props => props.h5Padding || "0"};
    text-align: ${props => props.h5TextAlign || "unset"};
    text-shadow: ${props => props.h5TextShadow || "unset"};
    text-transform: ${props => props.h5TextTransform || "none"};
  }
  h6 {
    color: ${props => props.h6Color || "inherit"};
    font-family: ${props => props.h6FontFamily || "inherit"};
    font-size: ${props => props.h6FontSize || "unset"};
    font-weight: ${props => props.h6FontWeight || "unset"};
    justify-content: ${props => props.h6JustifyContent || "unset"};
    letter-spacing: ${props => props.h6LetterSpacing || "unset"};
    line-height: ${props => props.h6LineHeight || "inherit"};
    margin: ${props => props.h6Margin || "0"};
    max-width: ${props => props.h6MaxWidth || "unset"};
    padding: ${props => props.h6Padding || "0"};
    text-align: ${props => props.h6TextAlign || "unset"};
    text-shadow: ${props => props.h6TextShadow || "unset"};
    text-transform: ${props => props.h6TextTransform || "unset"};
  }
  a {
    color: ${props => props.aFontColor || "inherit"};
    font-family: ${props => props.aFontFamily || "inherit"};
    font-size: ${props => props.aFontSize || "unset"};
    font-weight: ${props => props.aFontWeight || "unset"};
    justify-content: ${props => props.aJustifyContent || "unset"};
    letter-spacing: ${props => props.aLetterSpacing || "unset"};
    line-height: ${props => props.aLineHeight || "inherit"};
    margin: ${props => props.aMargin || "0"};
    max-width: ${props => props.aMaxWidth || "unset"};
    padding: ${props => props.aPadding || "0"};
    text-align: ${props => props.aTextAlign || "unset"};
    text-shadow: ${props => props.aTextShadow || "unset"};
    text-transform: ${props => props.aTextTransform || "none"};
  }
  a:hover {
    color: ${props => props.aHoverColor || "unset"};
  }
  article {
    color: ${props => props.articleColor || "inherit"};
    font-family: ${props => props.articleFontFamily || "inherit"};
    font-size: ${props => props.articleFontSize || "inherit"};
    font-weight: ${props => props.articleFontWeight || "unset"};
    justify-content: ${props => props.articleJustifyContent || "unset"};
    letter-spacing: ${props => props.articleLetterSpacing || "unset"};
    line-height: ${props => props.articleLineHeight || "inherit"};
    margin: ${props => props.articleMargin || "0"};
    max-width: ${props => props.articleMaxWidth || "unset"};
    padding: ${props => props.articlePadding || "0"};
    text-align: ${props => props.articleTextAlign || "unset"};
    text-shadow: ${props => props.articleTextShadow || "unset"};
    text-transform: ${props => props.articleTextTransform || "none"};
    width: ${props => props.articleWidth || "unset"};
  }
  p {
    color: ${props => props.pColor || "inherit"};
    font-family: ${props => props.pFontFamily || "inherit"};
    font-size: ${props => props.pFontSize || "unset"};
    font-weight: ${props => props.pFontWeight || "unset"};
    justify-content: ${props => props.pJustifyContent || "unset"};
    letter-spacing: ${props => props.pLetterSpacing || "unset"};
    line-height: ${props => props.pLineHeight || "inherit"};
    margin: ${props => props.pMargin || "0"};
    max-width: ${props => props.pMaxWidth || "unset"};
    padding: ${props => props.pPadding || "0"};
    text-align: ${props => props.pTextAlign || "unset"};
    text-shadow: ${props => props.pTextShadow || "unset"};
    text-transform: ${props => props.pTextTransform || "none"};
  }
`
