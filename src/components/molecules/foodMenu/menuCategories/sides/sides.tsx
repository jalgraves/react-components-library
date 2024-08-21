import React from 'react'
import { StyledSideItem} from './styles'
import { SideProps } from './types'
import ContentSection from '../../../contentBlock'


const Sides = (props: SideProps) => {
  const renderSides = (sides: string[]) => {
    const sideList = []
    let cnt = 1
    for (const side of Object.values(sides)) {
      sideList.push(
        <StyledSideItem 
          aria-labelledby="Side item"
          key={cnt}
          $background={props.sideItemBackground || "white"}
          $border={props.sideItemBorder}
          $borderRadius={props.sideItemBorderRadius || "3px"}
          $boxShadow={props.sideItemBoxShadow}
          $display={props.sideItemDisplay}
          $flexFlow={props.sideItemFlexFlow}
          $margin={props.sideItemMargin}
          $maxWidth={props.sideItemMaxWidth}
          $padding={props.sideItemPadding || "2rem"}
          $pColor={props.sideItemColor || "black"}
          $pFontFamily={props.sideItemFontFamily}
          $pFontSize={props.sideItemFontSize}
          $pFontWeight={props.sideItemFontWeight || "900"}
          $pJustifyContent={props.sideItemJustifyContent}
          $pLetterSpacing={props.sideItemLetterSpacing}
          $pLineHeight={props.sideItemLineHeight}
          $pTextAlign={props.sideItemTextAlign}
          $pTextShadow={props.sideItemTextShadow}
          $pTextTransform={props.sideItemTextTransform}
          $width={props.sideItemWidth || "100%"}
        >
          <p>{side}</p>
        </StyledSideItem>
      )
      cnt++
    }
    return (
      <ContentSection
        display={props.sidesContainerDisplay}
        flexFlow={props.sidesContainerFlexFlow}
        orderNumber={props.sidesContainerOrderNumber}
        justifyContent={props.sidesContainerJustifyContent}
      >
        {sideList}
      </ContentSection>
    )
  }
  return (
    <ContentSection
      ariaDetails="SidesContainerContainer"
      border={props.sidesContainerBorder}
      borderRadius={props.sidesContainerBorderRadius}
      display={props.sidesContainerDisplay}
      flexFlow={props.sidesContainerFlexFlow}
      h2Color={props.sidesContainerTitleColor}
      h2Display={props.sidesContainerTitleDisplay}
      h2FontFamily={props.sidesContainerTitleFontFamily}
      h2FontSize={props.sidesContainerTitleFontSize}
      h2FontWeight={props.sidesContainerTitleFontWeight}
      h2LetterSpacing={props.sidesContainerTitleLetterSpacing}
      h2Margin={props.sidesContainerTitleMargin}
      h2Padding={props.sidesContainerTitlePadding}
      h2TextAlign={props.sidesContainerTitleTextAlign}
      h2TextTransform={props.sidesContainerTitleTextTransform}
      margin={props.sidesContainerMargin}
      maxWidth={props.sidesContainerMaxWidth}
      orderNumber={props.sidesContainerOrderNumber}
      padding={props.sidesContainerPadding}
      width={props.sidesContainerWidth}
    >
      <h2>{props.sidesContainerTitleText}</h2>
      {renderSides(props.sides)}
    </ContentSection>
  )
}

export default Sides
