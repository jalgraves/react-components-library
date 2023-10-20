import React from "react"
import renderer from "react-test-renderer"
import ContactForm from "./contactForm"

it('contact form snapshot', () => {
  const component = renderer.create(
    <ContactForm 
      ariaDetails="TestContactForm"
      buttonColor="red"
      buttonFontColor="white"
      buttonFontWeight="bold"
      buttonLetterSpacing=".3rem"
      contactReply="This is a reply"
      display="flex"
      flexFlow="column wrap"
      fontFamily="Arial, Helvetica, sans-serif"
      invalidEmailError="This is an invalid email error message"
      invalidPhoneError="This is an invalid phone number error message"
      labelFontWeight="bold"
      labelLetterSpacing=".3rem"
      pFontColor="yellow"
      pFontFamily="Arial, Helvetica, sans-serif"
      pFontWeight="900"
      pLetterSpacing=".2rem"
      pTextTransform="uppercase"
      requiredFieldError="This is an error message"
      width="100%"
    />
  )
  let tree = component.toJSON()! as any
  console.log("ContactForm")
  console.log(tree.props)
  console.log(tree.children)
  expect(tree).toMatchSnapshot()
})
