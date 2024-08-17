import React from 'react'
import { StyledMenuItem } from './styles'
import { MenuItemProps, CategoryProps } from './types'
import ContentSection from '../../../contentBlock'


const MenuItem = (props: MenuItemProps) => {
  return (
    <StyledMenuItem
      $background={props.menuItemBackground}
      $border={props.menuItemBorder}
      $borderRadius={props.menuItemBorderRadius}
      $boxShadow={props.menuItemBoxShadow}
      $display={props.menuItemDisplay}
      $flexBasis={props.menuItemFlexBasis}
      $flexFlow={props.menuItemFlexFlow}
      $margin={props.menuItemMargin}
      $maxWidth={props.menuItemMaxWidth}
      $menuItemNameColor={props.menuItemNameColor}
      $menuItemNameFontFamily={props.menuItemNameFontFamily}
      $menuItemNameFontSize={props.menuItemNameFontSize}
      $menuItemNameFontWeight={props.menuItemNameFontWeight}
      $menuItemNameLetterSpacing={props.menuItemNameLetterSpacing}
      $menuItemNameLineHeight={props.menuItemNameLineHeight}
      $menuItemNameMaxWidth={props.menuItemNameMaxWidth}
      $menuItemNamePadding={props.menuItemNamePadding}
      $menuItemNameTextAlign={props.menuItemNameTextAlign}
      $menuItemNameTextTransform={props.menuItemNameTextTransform}
      $menuItemPriceColor={props.menuItemPriceColor}
      $menuItemPriceFontFamily={props.menuItemPriceFontFamily}
      $menuItemPriceFontSize={props.menuItemPriceFontSize}
      $menuItemPriceFontWeight={props.menuItemPriceFontWeight}
      $menuItemPriceLetterSpacing={props.menuItemPriceLetterSpacing}
      $menuItemPriceLineHeight={props.menuItemPriceLineHeight}
      $menuItemPriceMaxWidth={props.menuItemPriceMaxWidth}
      $menuItemPricePadding={props.menuItemPricePadding}
      $menuItemPriceTextAlign={props.menuItemPriceTextAlign}
      $menuItemPriceTextTransform={props.menuItemPriceTextTransform}
      $padding={props.menuItemPadding}
      $pColor={props.menuItemDescriptionColor}
      $pFontFamily={props.menuItemDescriptionFontFamily}
      $pFontSize={props.menuItemDescriptionFontSize}
      $pFontWeight={props.menuItemDescriptionFontWeight}
      $pLineHeight={props.menuItemDescriptionLineHeight}
      $pMaxWidth={props.menuItemDescriptionMaxWidth}
      $pPadding={props.menuItemDescriptionPadding}
      $tableDataLineHeight={props.menuItemTableDataLineHeight}
      $tableDataPadding={props.menuItemTableDataPadding}
      $tableFontFamily={props.menuItemTableFontFamily}
      $tablePadding={props.menuItemTablePadding}
      $tableWidth={props.menuItemTableWidth}
      $width={props.menuItemWidth}
    >
        <table>
            <tbody>
                <tr>
                  <td className="itemName">{props.name}</td>
                  <td className="itemPrice">{props.price}</td>
                </tr>
            </tbody>
        </table>
        <p>{props.description}</p>
    </StyledMenuItem>
  )
}

const Category = (props: CategoryProps) => {
  const renderItems = () => {
    let items = ''
    if (props.items) {
      items = props.items.map((item: any) =>
        <MenuItem
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
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
        />
      )
    }
    return (
      <ContentSection
        ariaDetails="CategoryItemsContainer"
        display={props.menuCategoryItemsContainerDisplay}
        flexFlow={props.menuCategoryItemsContainerFlexFlow}
        justifyContent={props.menuCategoryItemsContainerJustifyContent}
        width={props.menuCategoryItemsContainerWidth}
        margin={props.menuCategoryItemsContainerMargin}
        orderNumber={props.orderNumber}
      >
        {items}
      </ContentSection>
    )
  }

    return (
      <ContentSection
        ariaDetails="MenuCategoryContainer"
        display={props.menuCategoryContainerDisplay}
        border={props.menuCategoryContainerBorder}
        borderRadius={props.menuCategoryContainerBorderRadius}
        flexFlow={props.menuCategoryContainerFlexFlow}
        width={props.menuCategoryContainerWidth}
        orderNumber={props.orderNumber}
        h2FontFamily={props.menuCategoryTitleFontFamily}
        h2FontSize={props.menuCategoryTitleFontSize}
        h2FontWeight={props.menuCategoryTitleFontWeight}
        h2Color={props.menuCategoryTitleColor}
        h2TextTransform={props.menuCategoryTitleTextTransform}
        h2LetterSpacing={props.menuCategoryTitleLetterSpacing}
        h2TextAlign={props.menuCategoryTitleTextAlign}
        h2Display={props.menuCategoryTitleDisplay}
        h2Margin={props.menuCategoryTitleMargin}
        h2Padding={props.menuCategoryTitlePadding}
        h3Color={props.menuCategoryDescriptionColor}
        h3FontFamily={props.menuCategoryDescriptionFontFamily}
        h3FontSize={props.menuCategoryDescriptionFontSize}
        h3FontWeight={props.menuCategoryDescriptionFontWeight}
        h3TextTransform={props.menuCategoryDescriptionTextTransform}
        h3LetterSpacing={props.menuCategoryDescriptionLetterSpacing}
        h3TextAlign={props.menuCategoryDescriptionTextAlign}
        h3Display={props.menuCategoryDescriptionDisplay}
        h3Margin={props.menuCategoryDescriptionMargin}
        h3Padding={props.menuCategoryDescriptionPadding}
        h3MaxWidth={props.menuCategoryDescriptionMaxWidth}
        h3LineHeight={props.menuCategoryDescriptionLineHeight}
      >
        {props.items &&
          <h2 className="sectionTitle">{props.categoryName}</h2>
        }
        {props.description &&
          <h3>{props.description}</h3>
        }
          {renderItems()}
      </ContentSection>
    )
}

export default Category
