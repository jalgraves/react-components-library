/** @jest-environment jsdom */
import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import MainMenuBar from "./menuBar"
import { config } from "../../../utils/index"

describe(MainMenuBar, () => {
  it('renders main menu without crashing', () => {
    render(
      <MainMenuBar 
        barColor="green"
        fontColor="yellow"
        fontFamily="'Raleway', Arial, sans-serif"
        hoverColor="purple"
        mainMenuBarImgSource={`${config.static_url}/img/logos/drdavisicecream_navbar_logo.gif`}
        mainMenuBarImgStyles={{}}
        pages={config.pages}
        slideMenuBackgroundColor={config.colors.navBarMenuBackgroundGray}
        slideMenuFontColor="red"
        slideMenuFooterText="this is the bottom of the menu"
        slideMenuLinkListBorder={`.1rem solid ${config.colors.navBarBlue}`}
        slideMenuLinkListBorderRadius="4px"
        slideMenuLogoImgSource={`${config.static_url}/img/logos/drdavisicecream_logo.png`}
      />
    )
    expect(true)
  })
})


it('creates snapshot', () => {
  const component = renderer.create(
    <MainMenuBar
      ariaDetails="TestMainMenuBar" 
      barColor="green"
      fontColor="yellow"
      fontFamily="'Raleway', Arial, sans-serif"
      hoverColor="purple"
      mainMenuBarBorderBottom="1px solid red"
      mainMenuBarBoxShadow="1px 1px 1px 1px red"
      mainMenuBarImgSource="/foo/bar"
      mainMenuBarImgStyles={{}}
      navBarAriaDetails="TestMainMenuBarNav"
      pages={config.pages}
      slideMenuAriaDetails="TestMainMenuBarSlideMenu"
      slideMenuBackgroundColor="blue"
      slideMenuFontColor="red"
      slideMenuFooterText="this is the bottom of the menu"
      slideMenuLogoImgSource="/bizz/buzz"
    />
  )
  let tree = component.toJSON() as any
  console.log("MainMenuBar")
  console.log(tree.props)
  console.log(tree.children)
  expect(tree).toMatchSnapshot()
})
