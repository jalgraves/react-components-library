/** @jest-environment jsdom */
import React from "react"
import { render } from "@testing-library/react"
import ContentSection from "./contentBlock"

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
