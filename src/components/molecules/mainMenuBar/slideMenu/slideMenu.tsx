import React from "react"
import { StyledLink, StyledSlideMenu } from "./styles"
import { SlideMenuProps } from "./types"
import { Icon } from "../../"
import { toggleMenu } from "./animate"

const iconStyle = {
  color: '#fcba03',
  fontSize: '1em'
}

export const SliderMenuLink = (props: SlideMenuProps) => {
  return (
    <StyledLink $fontColor={props.$fontColor} $fontFamily={props.$fontFamily} $hoverColor={props.$hoverColor} key={props.id}>
      <a id={`${props.text}-mobile-link`} href={props.href} className="animate">
      <Icon iconName={props.icon} style={iconStyle} /> {props.text}</a>
    </StyledLink>
  )
}

function SliderLinks(props: SlideMenuProps) {
  const sliderMenuItems = []
  let id = 0
  for (const page of Object.keys(props.pages)) {
    if (props.pages[page][props.menuType] === true) {
      sliderMenuItems.push(
        <SliderMenuLink
          $fontColor={props.$fontColor}
          $fontFamily={props.$fontFamily}
          href={props.pages[page].name}
          id={id}
          icon={props.pages[page].icon}
          text={props.pages[page].text}
          key={id}
        />
      )
    }
    ++id
  }
  return (
    <div aria-details="SliderLinks" className="menuList slideMenuLinkList">{sliderMenuItems}</div>
  )
}

const SlideMenuLogo = (props: SlideMenuProps) => {
  return (
    <div id="slideMenuLogo" aria-details="SlideMenuLogoImg">
      <img src={props.imgSource}  alt={props.imgAltDescription} />
    </div>
  )
}

const SlideMenu = (props: SlideMenuProps) => {
  console.log(props)
  return(
    <StyledSlideMenu 
      aria-details="StyledSlideMenu"
      $backgroundColor={props.$backgroundColor}
      border={props.border}
      borderRadius={props.borderRadius}
      $linkListBorder={props.$linkListBorder}
      $linkListBorderRadius={props.$linkListBorderRadius}
      $footerFontFamily={props.$footerFontFamily}
      $footerFontColor={props.$footerFontColor}
      $footerFontSize={props.$footerFontSize}
    >
      <div aria-details="slideMenuLinkList" className="slideMenu slideMenuLinkList">
        <SlideMenuLogo imgSource={props.headerImgSource} />
        <SliderLinks $fontColor={props.$fontColor} $fontFamily={props.$fontFamily} pages={props.pages} menuType="menuList" />
        {toggleMenu("close")}
        <h2>{props.footerText}</h2>
      </div>
    </StyledSlideMenu>
  )
}

export default SlideMenu
