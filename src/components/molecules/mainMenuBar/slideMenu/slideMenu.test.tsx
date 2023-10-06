/** @jest-environment jsdom */
import React from "react"
import renderer from "react-test-renderer"
import SlideMenu from "./slideMenu"
import { config } from "../../../../utils/index"

it('slide menu snapshot', () => {
  const component = renderer.create(
    <SlideMenu 
      $backgroundColor="blue"
      footerText="this is the bottom of the menu"
      $footerFontFamily="Gotham"
      $footerFontColor="green"
      $footerFontSize=""
      $fontColor="cyan"
      $fontFamily="Arial"
      $linkListBorder="1px solid red"
      $linkListBorderRadius="4px"
      $hoverColor="yellow"
      headerImgSource="https://static.prod.beantownpub.com/img/slider/docs_special.jpg"
      pages={config.pages}
    />
  );
  var tree = component.toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})
