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
        navBarLogoImgSource={`${config.static_url}/img/logos/drdavisicecream_navbar_logo.gif`}
        navBarLogoImgStyles={{}}
        pages={config.pages}
        slideMenuBackgroundColor={config.colors.navBarMenuBackgroundGray}
        slideMenuFontColor="red"
        slideMenuLinkListBorder={`.1rem solid ${config.colors.navBarBlue}`}
        slideMenuLinkListBorderRadius="4px"
        slideMenuFooterText="this is the bottom of the menu"
        slideMenuLogoImgSource={`${config.static_url}/img/logos/drdavisicecream_logo.png`}
      />
    )
    expect(true)
  })
})


it('creates snapshot', () => {
  const component = renderer.create(
    <MainMenuBar 
        barColor="green"
        slideMenuBackgroundColor="blue"
        slideMenuFontColor="red"
        fontColor="yellow"
        hoverColor="purple"
        navBarLogoImgSource="/foo/bar"
        navBarLogoImgStyles={{}}
        slideMenuLogoImgSource="/bizz/buzz"
        pages={config.pages}
        slideMenuFooterText="this is the bottom of the menu"
        fontFamily="'Raleway', Arial, sans-serif"
      />
  )
  let tree = component.toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})
