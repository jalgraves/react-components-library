import React from 'react'
import Categories from './menuCategories'
import ContentSection from '../contentBlock'
import { FoodMenuProps } from './types'

const FoodMenu = (props: FoodMenuProps) => {
  const black: string = "#000000"
  const red: string = "#ed1c24"
  const titleFont: string = "'gotham-narrow-ultra', Poppins, sans-serif"
  return (
    <ContentSection
      ariaDetails="MenuContainer"
      backgroundColor={props.menuBackground}
      display="flex"
      flexFlow="column wrap"
      margin="auto"
      padding={props.menuPadding}
    >
      <Categories 
        categories={props.categories}
        menuBackground={props.menuBackground}
        menuCategoryContainerBorder={props.menuCategoryContainerBorder}
        menuCategoryContainerBorderRadius={props.menuCategoryContainerBorderRadius}
        menuCategoryContainerBoxShadow={props.menuCategoryContainerBoxShadow}
        menuCategoryContainerDisplay={props.menuCategoryContainerDisplay || "flex"}
        menuCategoryContainerFlexFlow={props.menuCategoryContainerFlexFlow || "row wrap"}
        menuCategoryContainerMaxWidth={props.menuCategoryContainerMaxWidth}
        menuCategoryContainerOrderNumber={props.menuCategoryContainerOrderNumber}
        menuCategoryContainerWidth={props.menuCategoryContainerWidth || "100%"}
        menuCategoryDescriptionColor={props.menuCategoryDescriptionColor}
        menuCategoryDescriptionDisplay={props.menuCategoryDescriptionDisplay}
        menuCategoryDescriptionFontFamily={props.menuCategoryDescriptionFontFamily}
        menuCategoryDescriptionFontSize={props.menuCategoryDescriptionFontSize}
        menuCategoryDescriptionFontWeight={props.menuCategoryDescriptionFontWeight}
        menuCategoryDescriptionLetterSpacing={props.menuCategoryDescriptionLetterSpacing}
        menuCategoryDescriptionLineHeight={props.menuCategoryDescriptionLineHeight || "100%"}
        menuCategoryDescriptionMargin={props.menuCategoryDescriptionMargin}
        menuCategoryDescriptionMaxWidth={props.menuCategoryDescriptionMaxWidth}
        menuCategoryDescriptionPadding={props.menuCategoryDescriptionPadding}
        menuCategoryDescriptionTextAlign={props.menuCategoryDescriptionTextAlign}
        menuCategoryDescriptionTextTransform={props.menuCategoryDescriptionTextTransform}
        menuCategoryItemsContainerDisplay={props.menuCategoryItemsContainerDisplay || "flex"}
        menuCategoryItemsContainerFlexFlow={props.menuCategoryItemsContainerFlexFlow || "row wrap"}
        menuCategoryItemsContainerJustifyContent={props.menuCategoryItemsContainerJustifyContent || "space-around"}
        menuCategoryItemsContainerMargin={props.menuCategoryItemsContainerMargin || "auto"}
        menuCategoryItemsContainerWidth={props.menuCategoryItemsContainerWidth || "unset"}
        menuCategoryTitleColor={props.menuCategoryTitleColor || red}
        menuCategoryTitleDisplay={props.menuCategoryTitleDisplay}
        menuCategoryTitleFontFamily={props.menuCategoryTitleFontFamily || titleFont}
        menuCategoryTitleFontSize={props.menuCategoryTitleFontSize || "2.5rem"}
        menuCategoryTitleFontWeight={props.menuCategoryTitleFontWeight || "900"}
        menuCategoryTitleLetterSpacing={props.menuCategoryTitleLetterSpacing || ".25rem"}
        menuCategoryTitleMargin={props.menuCategoryTitleMargin}
        menuCategoryTitlePadding={props.menuCategoryTitlePadding}
        menuCategoryTitleTextAlign={props.menuCategoryTitleTextAlign || "center"}
        menuCategoryTitleTextTransform={props.menuCategoryTitleTextTransform || "uppercase"}
        menuDisplay={props.menuDisplay || "flex"}
        menuFlexFlow={props.menuFlexFlow || "column wrap"}
        menuItemBackground={props.menuItemBackground}
        menuItemBorder={props.menuItemBorder}
        menuItemBorderRadius={props.menuItemBorderRadius}
        menuItemBoxShadow={props.menuItemBoxShadow}
        menuItemDescriptionColor={props.menuItemDescriptionColor}
        menuItemDescriptionFontFamily={props.menuItemDescriptionFontFamily}
        menuItemDescriptionFontSize={props.menuItemDescriptionFontSize}
        menuItemDescriptionFontWeight={props.menuItemDescriptionFontWeight}
        menuItemDescriptionLetterSpacing={props.menuItemDescriptionLetterSpacing}
        menuItemDescriptionLineHeight={props.menuItemDescriptionLineHeight}
        menuItemDescriptionMaxWidth={props.menuItemDescriptionMaxWidth}
        menuItemDescriptionPadding={props.menuItemDescriptionPadding}
        menuItemDescriptionTextAlign={props.menuItemDescriptionTextAlign}
        menuItemDescriptionTextTransform={props.menuItemDescriptionTextTransform}
        menuItemDisplay={props.menuItemDisplay}
        menuItemFlexBasis={props.menuItemFlexBasis}
        menuItemFlexFlow={props.menuItemFlexFlow}
        menuItemMargin={props.menuItemMargin}
        menuItemMaxWidth={props.menuItemMaxWidth}
        menuItemNameColor={props.menuItemNameColor}
        menuItemNameFontFamily={props.menuItemNameFontFamily}
        menuItemNameFontSize={props.menuItemNameFontSize}
        menuItemNameFontWeight={props.menuItemNameFontWeight}
        menuItemNameLetterSpacing={props.menuItemNameLetterSpacing}
        menuItemNameLineHeight={props.menuItemNameLineHeight}
        menuItemNameMaxWidth={props.menuItemNameMaxWidth}
        menuItemNamePadding={props.menuItemNamePadding}
        menuItemNameTextAlign={props.menuItemNameTextAlign}
        menuItemNameTextTransform={props.menuItemNameTextTransform}
        menuItemPadding={props.menuItemPadding}
        menuItemPriceColor={props.menuItemPriceColor}
        menuItemPriceFontFamily={props.menuItemPriceFontFamily}
        menuItemPriceFontSize={props.menuItemPriceFontSize}
        menuItemPriceFontWeight={props.menuItemPriceFontWeight}
        menuItemPriceLetterSpacing={props.menuItemPriceLetterSpacing}
        menuItemPriceLineHeight={props.menuItemPriceLineHeight}
        menuItemPriceMaxWidth={props.menuItemPriceMaxWidth}
        menuItemPricePadding={props.menuItemPricePadding}
        menuItemPriceTextAlign={props.menuItemPriceTextAlign}
        menuItemPriceTextTransform={props.menuItemPriceTextTransform}
        menuItemTableDataLineHeight={props.menuItemTableDataLineHeight}
        menuItemTableDataPadding={props.menuItemTableDataPadding}
        menuItemTableFontFamily={props.menuItemTableFontFamily}
        menuItemTablePadding={props.menuItemTablePadding}
        menuItemTableWidth={props.menuItemTableWidth}
        menuItemWidth={props.menuItemWidth}
        menuMargin={props.menuMargin || "auto"}
        sideItemBackground={props.sideItemBackground}
        sideItemBorder={props.sideItemBorder}
        sideItemBorderRadius={props.sideItemBorderRadius}
        sideItemBoxShadow={props.sideItemBoxShadow}
        sideItemColor={props.sideItemColor}
        sideItemDisplay={props.sideItemDisplay}
        sideItemFlexFlow={props.sideItemFlexFlow}
        sideItemFontFamily={props.sideItemFontFamily}
        sideItemFontSize={props.sideItemFontSize}
        sideItemFontWeight={props.sideItemFontWeight}
        sideItemJustifyContent={props.sideItemJustifyContent}
        sideItemLetterSpacing={props.sideItemLetterSpacing}
        sideItemLineHeight={props.sideItemLineHeight}
        sideItemMargin={props.sideItemMargin}
        sideItemMaxWidth={props.sideItemMaxWidth}
        sideItemPadding={props.sideItemPadding}
        sideItemTextAlign={props.sideItemTextAlign}
        sideItemTextShadow={props.sideItemTextShadow}
        sideItemTextTransform={props.sideItemTextTransform}
        sideItemWidth={props.sideItemWidth}
        sides={props.sides}
        sidesContainerDisplay={props.sidesContainerDisplay || "flex"}
        sidesContainerFlexFlow={props.sidesContainerFlexFlow || "row wrap"}
        sidesContainerJustifyContent={props.sidesContainerJustifyContent || "unset"}
        sidesContainerMaxWidth={props.sidesContainerMaxWidth}
        sidesContainerOrderNumber={props.sidesContainerOrderNumber || "6"}
        sidesContainerTitleText={props.sidesContainerTitleText || "sides"}
      /> 
      <ContentSection
        ariaDetails="WarningsContainer"
        display="flex"
        flexFlow="column wrap"
        margin="auto"
        h3Color={props.menuWarningColor || black}
        h3FontFamily={props.menuWarningFontFamily}
        h3FontSize={props.menuWarningFontSize || "1.5rem"}
        h3FontWeight={props.menuWarningFontWeight}
        h3Margin={props.menuWarningMargin || "auto"}
        h3Padding={props.menuWarningPadding}
        h3MaxWidth={props.menuWarningMaxWidth}
        h3LineHeight={props.menuWarningLineHeight || "100%"}
        h3TextTransform={props.menuWarningTextTransform}
      >
        <h3><span>*</span>These items are cooked to order. There is a risk associated with consuming undercooked meat products</h3>
        <h3>Prices subject to change without notice</h3>
      </ContentSection>
    </ContentSection>
    
  )
}

export default FoodMenu
