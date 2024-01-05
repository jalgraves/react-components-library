import React from "react"
import { StyledSlideMenuLink, StyledSlideMenu, StyledSlideMenuLinkList } from "./styles"
import { SlideMenuProps, SlideMenuLinkProps, SlideMenuLinkListProps } from "./types"
import { Icon } from "../../"
import { toggleMenu } from "./animate"

const iconStyle = {
  color: '#fcba03',
  fontSize: '1em'
}

export const SlideMenuLink = (props: SlideMenuLinkProps) => {
  return (
    <StyledSlideMenuLink
      aria-details="slide menu link"
      $fontColor={props.fontColor} 
      $fontFamily={props.fontFamily}
      $fontWeight={props.fontWeight}
      $fontSize={props.fontSize}
      $letterSpacing={props.letterSpacing}
      $left={props.left}
      $position={props.position}
      $padding={props.padding}
      $display={props.display}
      $textDecoration={props.textDecoration}
      $hoverColor={props.hoverColor}
      key={props.id}
    >
      <a id={`${props.text}-mobile-link`} href={props.href} className="animate">
      <Icon iconName={props.icon} style={props.iconStyle || iconStyle} /> {props.text}</a>
    </StyledSlideMenuLink>
  )
}

function SlideMenuLinkList(props: SlideMenuLinkListProps) {
  const sliderMenuItems = []
  let id = 0
  for (const page of Object.keys(props.pages)) {
    if (props.pages[page][props.menuType] === true) {
      sliderMenuItems.push(
        <SlideMenuLink
          iconStyle={props.iconStyle}
          fontColor={props.fontColor}
          fontFamily={props.fontFamily}
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
          hoverColor={props.hoverColor}
          left={props.left}
          position={props.aPosition}
          padding={props.aPadding}
          display={props.display}
          textDecoration={props.textDecoration}
          letterSpacing={props.letterSpacing}
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
    <StyledSlideMenuLinkList
      aria-details="slide menu link container"
      $borderRadius={props.borderRadius}
      $display={props.display}
      $margin={props.margin}
      $outline={props.outline}
      $padding={props.padding}
      $position={props.position}
      $width={props.width}
    >{sliderMenuItems}</StyledSlideMenuLinkList>
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
  const defaultImgStyles = {
    margin: ".5em auto",
    padding: "1em 0",
    maxWidth: "85%",
    maxHeight: "unset",
    position: "absolute",
  }

  const menuHeaderImgStyles = props.header.imgStyles ? {...defaultImgStyles, ...props.header.imgStyles} : defaultImgStyles
  return(
    <StyledSlideMenu 
      className="slideMenu"
      aria-details={props.ariaDetails || "slide menu container"}
      $backgroundColor={props.backgroundColor}
      $border={props.border}
      $borderRadius={props.borderRadius}
      $h1Color={props.header.fontColor}
      $h1Display={props.header.display}
      $h1FontFamily={props.header.fontFamily || props.fontFamily}
      $h1FontSize={props.header.fontSize}
      $h1FontWeight={props.header.fontWeight}
      $h1JustifyContent={props.header.justifyContent}
      $h1LetterSpacing={props.header.letterSpacing}
      $h1LineHeight={props.header.lineHeight}
      $h1Margin={props.header.margin}
      $h1MaxWidth={props.header.maxWidth}
      $h1Padding={props.header.padding}
      $h1TextAlign={props.header.textAlign}
      $h1TextShadow={props.header.textShadow}
      $h1TextTransform={props.header.textTransform}
      $h2FontFamily={props.footer.fontFamily || props.fontFamily}
      $h2LineHeight={props.footer.lineHeight}
      $h2Color={props.footer.fontColor}
      $h2FontSize={props.footer.fontSize}
      $h2FontWeight={props.footer.fontWeight}
      $h2TextTransform={props.footer.textTransform}
      $imgStyles={menuHeaderImgStyles}
    >
      {props.header.text ?
        <h1>{props.header.text}</h1> :
        <SlideMenuLogo imgSource={props.header.imgSource} />
      }
      <SlideMenuLinkList
        aPadding={props.linkList.aPadding}
        aPosition={props.linkList.aPosition}
        border={props.linkList.border}
        borderRadius={props.linkList.borderRadius}
        display={props.linkList.display}
        fontColor={props.linkList.fontColor} 
        fontFamily={props.linkList.fontFamily} 
        fontSize={props.linkList.fontSize}
        fontWeight={props.linkList.fontWeight}
        hoverColor={props.linkList.hoverColor}
        iconStyle={props.linkList.iconStyle}
        left={props.linkList.left}
        letterSpacing={props.linkList.letterSpacing}
        menuType="menuList" 
        outline={props.linkList.outline}
        margin={props.linkList.margin} 
        padding={props.linkList.padding}
        pages={props.linkList.pages} 
        position={props.linkList.position}
        textDecoration={props.linkList.textDecoration}
        width={props.linkList.width}
      />
      {toggleMenu(props.hamburgerStyles, "close")}
      {props.footer.text &&
        <h2>{props.footer.text}</h2>
      }
    </StyledSlideMenu>
  )
}

export default SlideMenu
