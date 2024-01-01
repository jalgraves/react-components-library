import React from 'react'
import { StyledContentBlock } from './styles'
import ContentBlockProps from './types'

const ContentSection = (props: ContentBlockProps) => {
  return (
    <StyledContentBlock
      aria-details={props.ariaDetails || "StyledContentBlock"}
      $aColor={props.aColor}
      $aFontFamily={props.aFontFamily}
      $aFontSize={props.aFontSize}
      $aFontWeight={props.aFontWeight}
      $aHoverColor={props.aHoverColor}
      $aJustifyContent={props.h2JustifyContent}
      $aLineHeight={props.aLineHeight}
      $articleColor={props.articleColor}
      $articleDisplay={props.articleDisplay}
      $articleFontFamily={props.articleFontFamily}
      $articleFontSize={props.articleFontSize}
      $articleFontWeight={props.articleFontWeight}
      $articleJustifyContent={props.h2JustifyContent}
      $articleLineHeight={props.articleLineHeight}
      $articleMargin={props.articleMargin}
      $articleMaxWidth={props.articleMaxWidth}
      $articleWidth={props.articleWidth}
      $aTextDecoration={props.aTextDecoration}
      $backgroundColor={props.backgroundColor}
      $border={props.border}
      $borderBottom={props.borderBottom}
      $borderRadius={props.borderRadius}
      $borderTop={props.borderTop}
      $display={props.display}
      $flexFlow={props.flexFlow}
      $fontColor={props.fontColor}
      $fontFamily={props.fontFamily}
      $h1Color={props.h1Color}
      $h1Display={props.h1Display}
      $h1FontFamily={props.h1FontFamily}
      $h1FontSize={props.h1FontSize}
      $h1FontWeight={props.h1FontWeight}
      $h1JustifyContent={props.h2JustifyContent}
      $h1LetterSpacing={props.h1LetterSpacing}
      $h1LineHeight={props.h1LineHeight}
      $h1Margin={props.h1Margin}
      $h1Padding={props.h1Padding}
      $h1TextAlign={props.h1TextAlign}
      $h1TextShadow={props.h1TextShadow}
      $h1TextTransform={props.h1TextTransform}
      $h2Color={props.h2Color}
      $h2Display={props.h2Display}
      $h2FontFamily={props.h2FontFamily}
      $h2FontSize={props.h2FontSize}
      $h2FontWeight={props.h2FontWeight}
      $h2JustifyContent={props.h2JustifyContent}
      $h2LetterSpacing={props.h2LetterSpacing}
      $h2LineHeight={props.h2LineHeight}
      $h2Margin={props.h2Margin}
      $h2Padding={props.h2Padding}
      $h2TextAlign={props.h2TextAlign}
      $h2TextShadow={props.h2TextShadow}
      $h2TextTransform={props.h2TextTransform}
      $h3Color={props.h3Color}
      $h3FontFamily={props.h3FontFamily}
      $h3FontSize={props.h3FontSize}
      $h3FontWeight={props.h3FontWeight}
      $h3JustifyContent={props.h2JustifyContent}
      $h3LetterSpacing={props.h3LetterSpacing}
      $h3LineHeight={props.h3LineHeight}
      $h3Margin={props.h3Margin}
      $h3Padding={props.h3Padding}
      $h3TextAlign={props.h3TextAlign}
      $h3TextShadow={props.h3TextShadow}
      $h3TextTransform={props.h3TextTransform}
      $h4Color={props.h4Color}
      $h4FontFamily={props.h4FontFamily}
      $h4FontSize={props.h4FontSize}
      $h4FontWeight={props.h4FontWeight}
      $h4JustifyContent={props.h2JustifyContent}
      $h4LetterSpacing={props.h4LetterSpacing}
      $h4LineHeight={props.h4LineHeight}
      $h4Margin={props.h4Margin}
      $h4Padding={props.h4Padding}
      $h4TextAlign={props.h4TextAlign}
      $h4TextTransform={props.h4TextTransform}
      $h5Color={props.h5Color}
      $h5FontFamily={props.h5FontFamily}
      $h5FontSize={props.h5FontSize}
      $h5FontWeight={props.h5FontWeight}
      $h5JustifyContent={props.h2JustifyContent}
      $h5LetterSpacing={props.h5LetterSpacing}
      $h5LineHeight={props.h5LineHeight}
      $h5Margin={props.h5Margin}
      $h5Padding={props.h5Padding}
      $h5TextAlign={props.h5TextAlign}
      $h5TextTransform={props.h5TextTransform}
      $h6Color={props.h6Color}
      $h6FontFamily={props.h6FontFamily}
      $h6FontSize={props.h6FontSize}
      $h6FontWeight={props.h6FontWeight}
      $h6JustifyContent={props.h2JustifyContent}
      $h6LetterSpacing={props.h6LetterSpacing}
      $h6LineHeight={props.h6LineHeight}
      $h6Margin={props.h6Margin}
      $h6Padding={props.h6Padding}
      $h6TextAlign={props.h6TextAlign}
      $h6TextTransform={props.h6TextTransform}
      $headerImgMaxWidth={props.headerImgMaxWidth}
      $headerImgPadding={props.headerImgPadding}
      $lineHeight={props.lineHeight}
      $margin={props.margin}
      $maxWidth={props.maxWidth}
      $outline={props.outline}
      $padding={props.padding}
      $pColor={props.pColor}
      $pFontFamily={props.pFontFamily}
      $pFontSize={props.pFontSize}
      $pFontWeight={props.pFontWeight}
      $pJustifyContent={props.h2JustifyContent}
      $pLetterSpacing={props.pLetterSpacing}
      $pLineHeight={props.pLineHeight}
      $pMargin={props.pMargin}
      $pMaxWidth={props.pMaxWidth}
      $pPadding={props.pPadding}
      $pTextAlign={props.pTextAlign}
      $pTextShadow={props.pTextShadow}
      $pTextTransform={props.pTextTransform}
      $pWidth={props.pWidth}
      $preBackground={props.preBackground}
      $preBorderRadius={props.preBorderRadius}
      $preDisplay={props.preDisplay}
      $preFontSize={props.preFontSize}
      $preFontFamily={props.preFontFamily}
      $preLineHeight={props.preLineHeight}
      $preMargin={props.preMargin}
      $preMaxWidth={props.preMaxWidth}
      $preOverflow={props.preOverflow}
      $preOutline={props.preOutline}
      $prePadding={props.prePadding}
      $preWidth={props.preWidth}
      $sectionMargin={props.sectionMargin}
      $sectionPadding={props.sectionPadding}
      $sectionWidth={props.sectionWidth}
      $textAlign={props.textAlign}
      $width={props.width}
    >
      {props.children}
    </StyledContentBlock>
  )
}

export default ContentSection
