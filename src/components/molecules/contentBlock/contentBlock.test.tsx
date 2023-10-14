/** @jest-environment jsdom */
import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import ContentSection from "./contentBlock"

it('conteent block snapshot', () => {
  const component = renderer.create(
    <ContentSection 
    fontFamily="Gotham"
    articleFontSize="150%"
    articleLineHeight="150%"
    articleMargin="auto"
    articleMaxWidth="85vw"
    articlePadding="1rem"
    backgroundColor="rgba(248, 248, 248, 0.5)"
    borderRadius="4px"
    display="flex"
    flexFlow="column wrap"
    fontColor="black"
    h1Color="yellow"
    h1FontFamily="Arial"
    h1FontSize="3rem"
    h1FontWeight="900"
    h1LetterSpacing=".3rem"
    h1Padding="1.5rem"
    h1TextShadow="rgb(0, 0, 0) 2px 2px 6px"
    h1TextTransform="uppercase"
  />
  )
  var tree = component.toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})

describe(ContentSection, () => {
  it('renders content section without crashing', () => {
    render(
      <ContentSection 
        fontFamily="Gotham"
      />
    )
    expect(true)
  })
})
