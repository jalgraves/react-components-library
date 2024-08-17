import styled from 'styled-components'
import { StyledMenuCategoryProps, StyledMenuItemProps } from './types'

export const StyledMenuSection = styled.div<StyledMenuCategoryProps>`
  display: flex;
  flex-flow: row wrap;
  margin: 1rem auto;
  order: ${props => props.$orderNumber || "0"};
  width: 95vw;
  .sectionTitle {
    display: flex;
    flex-flow: column nowrap;
    margin: auto;
    padding: .5rem 0;
    text-align: center;
    width: 100%;
  }
  .sectionText {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: auto;
    padding: .5rem 0;
    text-align: center;
    width: 100%;
    p {
      font-size: 1.5rem;
    }
  }
  .sectionItems {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: auto;
  }
  .sides {
    order: 7;
  }
  h2 {
    letter-spacing: .2rem;
    text-transform: uppercase;
    font-family: ${props => props.$h2FontFamily};
    font-size: 1.95rem;
    color: ${props => props.$h2Color};
  }
  h3 {
    font-family: ${props => props.$h3FontFamily};
    font-size: 1.25rem;
    line-height: 125%;
    margin: auto;
    padding: .5rem 0;
    text-align: center;
    width: 100%;
  }
  p {
    font-family: ${props => props.$pFontFamily};
    font-size: 1.25rem;
    line-height: 125%;
    margin: auto;
  }
`

export const StyledMenuItem = styled.div<StyledMenuItemProps>`
  background-color: ${props => props.$background || "whitesmoke"};
  border: ${props => props.$border || ".1rem solid #dbd9d9"};
  box-shadow: ${props => props.$boxShadow || "0px 5px 20px 0px rgb(126 137 140 / 20%)"};
  border-radius: ${props => props.$borderRadius || ".4rem"};
  display: ${props => props.$display || "flex"};
  flex-basis: ${props => props.$flexBasis || "30rem"};
  flex-flow: ${props => props.$flexFlow || "column wrap"};
  margin: ${props => props.$margin || ".5rem"};
  max-width: ${props => props.$maxWidth || "90vw"};
  table {
    font-family: ${props => props.$tableFontFamily || "'Poppins', sans-sefif" };
    padding: ${props => props.$tablePadding || ".25rem"};
    width: ${props => props.$tableWidth || "100%"};
    td {
      line-height: ${props => props.$tableDataLineHeight || "125%"};
      padding: ${props => props.$tableDataPadding || ".25rem"};
    }
  }
  .itemName {
    color: ${props => props.$menuItemNameColor || "#fcba03" };
    font-family: ${props => props.$menuItemNameFontFamily || "'Poppins', sans-sefif" };
    font-size: ${props => props.$menuItemNameFontSize || "1.5rem"};
    font-weight: ${props => props.$menuItemNameFontWeight || "700"};
    letter-spacing: ${props => props.$menuItemNameLetterSpacing || ".15rem"};
    text-align: ${props => props.$menuItemNameTextAlign || "left"};
    text-transform: ${props => props.$menuItemNameTextTransform || "uppercase"};
    line-height: ${props => props.$menuItemNameLineHeight || "unset"};
    padding: ${props => props.$menuItemNamePadding || "unset"};
    max-width: ${props => props.$menuItemNameMaxWidth || "unset"};
  }
  .itemPrice {
    color: ${props => props.$menuItemPriceColor || "#000000" };
    font-family: ${props => props.$menuItemPriceFontFamily || "'Lato', sans-serif"};
    font-size: ${props => props.$menuItemPriceFontSize || "1.5rem"};
    font-weight: ${props => props.$menuItemPriceFontWeight || "600"};
    letter-spacing: ${props => props.$menuItemPriceLetterSpacing || ".15rem"};
    text-align: ${props => props.$menuItemPriceTextAlign || "right"};
    text-transform: ${props => props.$menuItemPriceTextTransform || "uppercase"};
    line-height: ${props => props.$menuItemPriceLineHeight || "unset"};
    padding: ${props => props.$menuItemPricePadding || "unset"};
    max-width: ${props => props.$menuItemPriceMaxWidth || "unset"};
  }
  p {
    color: ${props => props.$pColor || "#000000" };
    font-family: ${props => props.$pFontFamily || "'Lato', sans-serif"};
    font-size: ${props => props.$pFontSize || "1.25rem"};
    line-height: ${props => props.$pLineHeight || "125%"};
    padding: ${props => props.$pPadding || "1rem"};
    max-width: ${props => props.$pMaxWidth || "30rem"};
  }
`
