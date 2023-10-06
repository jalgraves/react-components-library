import React from "react"
import renderer from "react-test-renderer"
import NavBar from "./navBar"
import { config } from "../../../../utils/index"

it('nav bar snapshot', () => {
  const component = renderer.create(
    <NavBar 
      fontColor="cyan"
      fontFamily="Arial"
      hoverColor="yellow"
      pages={config.pages}
      imgSource={`${config.static_url}/img/logos/drdavisicecream_navbar_logo.gif`}
      imgAlt="Dr. Davis Ice Cream Logo"
    />
  );
  var tree = component.toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})
