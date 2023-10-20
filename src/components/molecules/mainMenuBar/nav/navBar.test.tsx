import React from "react"
import renderer from "react-test-renderer"
import NavBar from "./navBar"
import { config } from "../../../../utils/index"

it('nav bar snapshot', () => {
  const component = renderer.create(
    <NavBar
      ariaDetails="TestNavBar" 
      fontColor="cyan"
      fontFamily="Arial"
      hoverColor="yellow"
      imgAlt="Dr. Davis Ice Cream Logo"
      imgSource={`${config.static_url}/img/logos/drdavisicecream_navbar_logo.gif`}
      pages={config.pages}
    />
  )
  let tree = component.toJSON() as any
  console.log("NavBar")
  console.log(tree.props)
  console.log(tree.children)
  expect(tree).toMatchSnapshot()
})
