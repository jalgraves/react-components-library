import React from "react"
import renderer from "react-test-renderer"
import ContactForm from "./contactForm"
// import { config } from "../../../../utils/index"

it('contact form snapshot', () => {
  const component = renderer.create(
    <ContactForm contactReply="This is a reply"/>
  )
  var tree = component.toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})
