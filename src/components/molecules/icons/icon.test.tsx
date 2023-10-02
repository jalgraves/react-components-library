/** @jest-environment jsdom */
import React from "react"
import { render } from "@testing-library/react"
import Icon from "./icon"

describe(Icon, () => {
  it('renders button without crashing', () => {
    render(<Icon  iconName="faBeer" />)
    expect(true)
  })
})
