import React from "react"
import renderer from "react-test-renderer"
import BlogForm from "./blogForm"

it('blog form snapshot', () => {
  const component = renderer.create(
    <BlogForm 
      ariaDetails="TestBlogForm"
      buttonColor="red"
      buttonFontColor="white"
      buttonFontWeight="bold"
      buttonLetterSpacing=".3rem"
      createPostReply="This is a reply"
      display="flex"
      flexFlow="column wrap"
      fontFamily="Arial, Helvetica, sans-serif"
      invalidAuthorError="This is an invalid email error message"
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
  console.log("BlogForm")
  console.log(tree.props)
  console.log(tree.children)
  expect(tree).toMatchSnapshot()
})
