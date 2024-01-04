/** @jest-environment jsdom */
import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import MainMenuBar from "./menuBar"
import { config } from "../../../utils/index"

const slideMenu = {
  footer: {
    text: "this is the bottom of the menu",
    fontFamily: "Gotham",
    fontColor: "green",
    fontSize: "1rem"
  },
  
  linkList: {
    borderRadius: "4px",
    fontFamily: "Gotham",
    fontColor: "yellow",
    fontSize: "1rem",
    fontWeight: "900",
    outline: "1px solid red",
    pages: config.pages,
    iconStyle: {
      color: "blue",
      fontSize: "1em"
    }
  },
  header: {
    imgSource: "https://static.prod.beantownpub.com/img/slider/jalgraves.jpg"
  }
}

describe(MainMenuBar, () => {
  it('renders main menu without crashing', () => {
    render(
      <MainMenuBar 
        barColor="green"
        fontColor="yellow"
        fontFamily="'Raleway', Arial, sans-serif"
        mainMenuBarImgSource={`${config.static_url}/img/logos/jalgraves.gif`}
        mainMenuBarImgStyles={{}}
        pages={config.pages}
        slideMenu={slideMenu}
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
      slideMenu={slideMenu}
    />
  )
  let tree = component.toJSON() as any
  console.log("MainMenuBar")
  console.log(tree.props)
  console.log(tree.children)
  expect(tree).toMatchSnapshot()
})
