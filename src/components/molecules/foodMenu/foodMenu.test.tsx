/** @jest-environment jsdom */
import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import FoodMenu from "./foodMenu"
import { categories } from "./testData/categories"

let SIDES: string[] = [
  "mashed potatoes",
  "potato salad",
  "cole slaw",
  "veggie of the day",
  "jasmine rice",
  "baked beans",
  "homemade chips",
  "french fries"
]

it('content block snapshot', () => {
  const component = renderer.create(
    <FoodMenu
      categories={categories}
      sides={SIDES}
      menuCategoryContainerDisplay="flex"
      menuCategoryContainerBorder="none"
      menuCategoryContainerBorderRadius="none"
      menuCategoryContainerBoxShadow="none"
      menuCategoryContainerWidth="100%"
      menuCategoryContainerMaxWidth="unset"
      menuCategoryContainerFlexFlow="column wrap"
      menuCategoryContainerOrderNumber=""
      menuItemBackground="blue"
      menuItemBorder="none"
      menuItemBorderRadius="4px"
      menuItemBoxShadow="none"
      menuItemDescriptionColor="black"
      menuItemDescriptionFontFamily="'Lato', sans-serif"
      menuItemDescriptionFontSize="1rem"
      menuItemDescriptionFontWeight="900"
      menuItemDescriptionLetterSpacing=".25rem"
      menuItemDescriptionLineHeight="125%"
      menuItemDescriptionMaxWidth="unset"
      menuItemDescriptionPadding="0"
      menuItemDescriptionTextAlign="none"
      menuItemDescriptionTextTransform="uppercase"
      menuItemDisplay="flex"
      menuItemFlexBasis="30rem"
      menuItemFlexFlow="row wrap"
      menuItemMargin="auto"
      menuItemMaxWidth="15rem"
      menuItemNameColor="red"
      menuItemNameFontFamily="'Lato', sans-serif"
      menuItemNameFontSize="1rem"
      menuItemNameFontWeight="900"
      menuItemNameLetterSpacing=".25rem"
      menuItemNameLineHeight="125%"
      menuItemNameMaxWidth="unset"
      menuItemNamePadding="0"
      menuItemNameTextAlign="none"
      menuItemNameTextTransform="uppercase"
      menuItemPadding="0"
      menuItemPriceColor="red"
      menuItemPriceFontFamily="'Lato', sans-serif"
      menuItemPriceFontSize="1rem"
      menuItemPriceFontWeight="900"
      menuItemPriceLetterSpacing=".25rem"
      menuItemPriceLineHeight="125%"
      menuItemPriceMaxWidth="unset"
      menuItemPricePadding="0"
      menuItemPriceTextAlign="none"
      menuItemPriceTextTransform="uppercase"
      menuItemTableDataLineHeight="150%"
      menuItemTableDataPadding="1rem"
      menuItemTableFontFamily="'Lato', sans-serif"
      menuItemTablePadding="0"
      menuItemTableWidth="fit-content"
      menuItemWidth="99%"
    />
  )
  let tree = component.toJSON() as any
  console.log("ContentSection")
  console.log(tree.props)
  expect(tree).toMatchSnapshot()
})

describe(FoodMenu, () => {
  it('renders content section without crashing', () => {
    render(
      <FoodMenu
        categories={categories}
        sides={SIDES} 
        menuFlexFlow="column wrap"
        menuDisplay="flex"
        menuMargin="auto"
        menuBackground="beige"
        menuCategoryContainerDisplay="flex"
        menuCategoryContainerBorder="none"
        menuCategoryContainerBorderRadius="none"
        menuCategoryContainerBoxShadow="none"
        menuCategoryContainerWidth="100%"
        menuCategoryContainerMaxWidth="unset"
        menuCategoryContainerFlexFlow="column wrap"
        menuCategoryContainerOrderNumber=""
        menuItemBackground="blue"
        menuItemBorder="none"
        menuItemBorderRadius="4px"
        menuItemBoxShadow="none"
        menuItemDescriptionColor="black"
        menuItemDescriptionFontFamily="'Lato', sans-serif"
        menuItemDescriptionFontSize="1rem"
        menuItemDescriptionFontWeight="900"
        menuItemDescriptionLetterSpacing=".25rem"
        menuItemDescriptionLineHeight="125%"
        menuItemDescriptionMaxWidth="unset"
        menuItemDescriptionPadding="0"
        menuItemDescriptionTextAlign="none"
        menuItemDescriptionTextTransform="uppercase"
        menuItemDisplay="flex"
        menuItemFlexBasis="30rem"
        menuItemFlexFlow="row wrap"
        menuItemMargin="auto"
        menuItemMaxWidth="15rem"
        menuItemNameColor="red"
        menuItemNameFontFamily="'Lato', sans-serif"
        menuItemNameFontSize="1rem"
        menuItemNameFontWeight="900"
        menuItemNameLetterSpacing=".25rem"
        menuItemNameLineHeight="125%"
        menuItemNameMaxWidth="unset"
        menuItemNamePadding="0"
        menuItemNameTextAlign="none"
        menuItemNameTextTransform="uppercase"
        menuItemPadding="0"
        menuItemPriceColor="red"
        menuItemPriceFontFamily="'Lato', sans-serif"
        menuItemPriceFontSize="1rem"
        menuItemPriceFontWeight="900"
        menuItemPriceLetterSpacing=".25rem"
        menuItemPriceLineHeight="125%"
        menuItemPriceMaxWidth="unset"
        menuItemPricePadding="0"
        menuItemPriceTextAlign="none"
        menuItemPriceTextTransform="uppercase"
        menuItemTableDataLineHeight="150%"
        menuItemTableDataPadding="1rem"
        menuItemTableFontFamily="'Lato', sans-serif"
        menuItemTablePadding="0"
        menuItemTableWidth="fit-content"
        menuItemWidth="99%"
      />
    )
    expect(true)
  })
})
