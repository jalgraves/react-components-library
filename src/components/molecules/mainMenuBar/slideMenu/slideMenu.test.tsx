/** @jest-environment jsdom */
import React from "react"
import renderer from "react-test-renderer"
import SlideMenu from "./slideMenu"
import { config } from "../../../../utils/index"

const hamburgerStyles = {
  width: "3rem" ,
  background: "red",
  position: "fixed",
  zIndex: "1000",
  margin: ".25em",
  padding: "0",
  height: "2.75em",
  border: "none",
  textIndent: "2.5em",
  fontSize: "1.5em",
  color: "transparent",
  borderRadius: ".35em",
  opacity: ".8",
  left: ".5rem",
  top: "1em",
}

const footer = {
  text: "this is the bottom of the menu",
  fontFamily: "Gotham",
  fontColor: "green",
  fontSize: "1rem"
}

const linkList = {
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
}

const header = {
  imgSource: "https://static.prod.beantownpub.com/img/slider/docs_special.jpg"
}

it('slide menu snapshot', () => {
  const component = renderer.create(
    <SlideMenu 
      ariaDetails="TestSlideMenu"
      backgroundColor="blue"
      fontColor="cyan"
      footer={""}
      fontFamily="Arial"
      hamburgerStyles={hamburgerStyles}
      linkList={linkList}
      header={header}
    />
  )
  let tree = component.toJSON() as any
  console.log("SlideMenu")
  console.log(tree.props)
  console.log(tree.children)
  expect(tree).toMatchSnapshot()
})
