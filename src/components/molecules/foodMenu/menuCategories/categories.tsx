import React from 'react'
import Category from './category'
import ContentSection from '../../contentBlock'
import Sides  from './sides'
import { CategoriesProps } from './types'

interface Category {
  name: string
  description: string
  is_active: string
  items: any
  id: string
  location: string
  sku: string
  slug: string
  order_number: any
}
const Categories = (props: CategoriesProps) => {
  const categories: Category[] = props.categories
  const categoryList = []
  if (categories) {
    let cnt = 1
    for (const category of Object.values(categories)) {
      categoryList.push(
        <Category
          categoryName={category['name']}
          description={category['description']}
          isActive={category['is_active']}
          items={category['items']}
          key={category['id']}
          location={category['location']}
          menuCategoryContainerBorder={props.menuCategoryContainerBorder}
          menuCategoryContainerBorderRadius={props.menuCategoryContainerBorderRadius}
          menuCategoryContainerBoxShadow={props.menuCategoryContainerBoxShadow}
          menuCategoryContainerDisplay={props.menuCategoryContainerDisplay}
          menuCategoryContainerFlexFlow={props.menuCategoryContainerFlexFlow}
          menuCategoryContainerMaxWidth={props.menuCategoryContainerMaxWidth}
          menuCategoryContainerOrderNumber={props.menuCategoryContainerOrderNumber}
          menuCategoryContainerWidth={props.menuCategoryContainerWidth}
          menuCategoryDescriptionColor={props.menuCategoryDescriptionColor}
          menuCategoryDescriptionDisplay={props.menuCategoryDescriptionDisplay}
          menuCategoryDescriptionFontFamily={props.menuCategoryDescriptionFontFamily}
          menuCategoryDescriptionFontSize={props.menuCategoryDescriptionFontSize}
          menuCategoryDescriptionFontWeight={props.menuCategoryDescriptionFontWeight}
          menuCategoryDescriptionLetterSpacing={props.menuCategoryDescriptionLetterSpacing}
          menuCategoryDescriptionLineHeight={props.menuCategoryDescriptionLineHeight}
          menuCategoryDescriptionMargin={props.menuCategoryDescriptionMargin}
          menuCategoryDescriptionMaxWidth={props.menuCategoryDescriptionMaxWidth}
          menuCategoryDescriptionPadding={props.menuCategoryDescriptionPadding}
          menuCategoryDescriptionTextAlign={props.menuCategoryDescriptionTextAlign}
          menuCategoryDescriptionTextTransform={props.menuCategoryDescriptionTextTransform}
          menuCategoryItemsContainerDisplay={props.menuCategoryItemsContainerDisplay}
          menuCategoryItemsContainerFlexFlow={props.menuCategoryItemsContainerFlexFlow}
          menuCategoryItemsContainerJustifyContent={props.menuCategoryItemsContainerJustifyContent}
          menuCategoryItemsContainerMargin={props.menuCategoryItemsContainerMargin}
          menuCategoryItemsContainerWidth={props.menuCategoryItemsContainerWidth}
          menuCategoryTitleColor={props.menuCategoryTitleColor}
          menuCategoryTitleDisplay={props.menuCategoryTitleDisplay}
          menuCategoryTitleFontFamily={props.menuCategoryTitleFontFamily}
          menuCategoryTitleFontSize={props.menuCategoryTitleFontSize}
          menuCategoryTitleFontWeight={props.menuCategoryTitleFontWeight}
          menuCategoryTitleLetterSpacing={props.menuCategoryTitleLetterSpacing}
          menuCategoryTitleMargin={props.menuCategoryTitleMargin}
          menuCategoryTitlePadding={props.menuCategoryTitlePadding}
          menuCategoryTitleTextAlign={props.menuCategoryTitleTextAlign}
          menuCategoryTitleTextTransform={props.menuCategoryTitleTextTransform}
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
          orderNumber={category['order_number'] || cnt}
          sku={category['id']}
          slug={category['slug']}
        />
      )
      cnt++
    }
  }
  return (
    <ContentSection 
      ariaDetails="CategoriesContainer"
      backgroundColor={props.menuBackground} 
      display={props.menuDisplay}
      margin={props.menuMargin || "5rem auto 1rem auto"}
      flexFlow={props.menuFlexFlow}
    >
      {categoryList}
      <Sides 
        sides={props.sides}
        sidesContainerDisplay={props.sidesContainerDisplay}
        sidesContainerFlexFlow={props.sidesContainerFlexFlow}
        sidesContainerJustifyContent={props.sidesContainerJustifyContent}
        sidesContainerMaxWidth={props.sidesContainerMaxWidth}
        sidesContainerOrderNumber={props.sidesContainerOrderNumber}
        sidesContainerTitleText={props.sidesContainerTitleText}
        sidesContainerTitleColor={props.menuCategoryTitleColor}
        sidesContainerTitleDisplay={props.menuCategoryTitleDisplay}
        sidesContainerTitleFontFamily={props.menuCategoryTitleFontFamily}
        sidesContainerTitleFontSize={props.menuCategoryTitleFontSize}
        sidesContainerTitleFontWeight={props.menuCategoryTitleFontWeight}
        sidesContainerTitleLetterSpacing={props.menuCategoryTitleLetterSpacing}
        sidesContainerTitleMargin={props.menuCategoryTitleMargin}
        sidesContainerTitlePadding={props.menuCategoryTitlePadding}
        sidesContainerTitleTextAlign={props.menuCategoryTitleTextAlign}
        sidesContainerTitleTextTransform={props.menuCategoryTitleTextTransform}
        sideItemBackground={props.sideItemBackground}
        sideItemBorder={props.sideItemBorder}
        sideItemBorderRadius={props.sideItemBorderRadius}
        sideItemBoxShadow={props.sideItemBoxShadow}
        sideItemDisplay={props.sideItemDisplay}
        sideItemFlexFlow={props.sideItemFlexFlow}
        sideItemMargin={props.sideItemMargin}
        sideItemMaxWidth={props.sideItemMaxWidth}
        sideItemPadding={props.sideItemPadding}
        sideItemColor={props.sideItemColor}
        sideItemFontFamily={props.sideItemFontFamily}
        sideItemFontSize={props.sideItemFontSize}
        sideItemFontWeight={props.sideItemFontWeight}
        sideItemJustifyContent={props.sideItemJustifyContent}
        sideItemLetterSpacing={props.sideItemLetterSpacing}
        sideItemLineHeight={props.sideItemLineHeight}
        sideItemTextAlign={props.sideItemTextAlign}
        sideItemTextShadow={props.sideItemTextShadow}
        sideItemTextTransform={props.sideItemTextTransform}
        sideItemWidth={props.sideItemWidth}
      />
    </ContentSection>
  )
}

export default Categories
