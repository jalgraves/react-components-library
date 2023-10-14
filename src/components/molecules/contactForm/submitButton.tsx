import React from "react"
import { StyledButton } from "./styles"
import Icon from "../icons/index"

interface ButtonProps {
  buttonStyles: any
  icon?: string
  iconColor?: string
  iconSize?: string
  ariaLabel?: string
  slug?: string
  clickHandler?: any
  buttonText?: string
  runFunction?: any
}

export const Button = (props: ButtonProps) => {
  const iconStyle = {
    margin: "auto .5rem",
    color: props.iconColor,
    fontSize: props.iconSize || "1rem"
  }
  return (
    <StyledButton
      aria-labelledby={props.ariaLabel || "Button component"}
      $backgroundColor={props.buttonStyles.bgColor}
      $border={props.buttonStyles.border}
      $borderRadius={props.buttonStyles.borderRadius}
      $fontFamily={props.buttonStyles.fontFamily}
      $fontSize={props.buttonStyles.fontSize}
      $hoverBackgroundColor={props.buttonStyles.hoverBackgroundColor}
      $hoverBorder={props.buttonStyles.hoverBorder}
      $hoverTextColor={props.buttonStyles.hoverTextColor}
      $letterSpacing={props.buttonStyles.letterSpacing}
      $margin={props.buttonStyles.margin}
      $maxWidth={props.buttonStyles.maxWidth}
      $outerMargin={props.buttonStyles.outerMargin}
      $outerPadding={props.buttonStyles.outerPadding}
      $padding={props.buttonStyles.padding}
      $position={props.buttonStyles.position}
      $textColor={props.buttonStyles.textColor}
      $textAlign={props.buttonStyles.textAlign}
      $textDecoration={props.buttonStyles.textDecoration}
      $textTransform={props.buttonStyles.textTransform}
      $width={props.buttonStyles.width}
    >
    <button id={`${props.slug}-button`} onClick={props.clickHandler}>
      {props.icon &&
        <Icon style={iconStyle} iconName={props.icon} />}{props.buttonText}
    </button>
    </StyledButton>
  )
}

export const SubmitButton = (props: ButtonProps) => {
  const handleClick = () => {
    if (props.runFunction) {
      props.runFunction()
    }
  }
  return (
    <Button
      clickHandler={handleClick}
      buttonStyles={props}
      buttonText={props.buttonText}
      slug={props.slug || "submit"}
    />
  )
}
