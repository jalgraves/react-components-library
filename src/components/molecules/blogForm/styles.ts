import styled from 'styled-components'
import { StyledBlogFormProps } from "./types"


export const StyledBlogForm = styled.div<StyledBlogFormProps>`
display: ${props => props.$display || "block"};
flex-flow: ${props => props.$flexFlow || "unset"};
font-family: ${props => props.$fontFamily || "unset"};
margin: ${props => props.$margin || "auto"};
width: ${props => props.$width || "100%"};
padding: ${props => props.$padding || "1rem"};
text-transform: ${props => props.$textTransform || "uppercase"};
form {
  max-width: ${props => props.$maxWidth || "500px"};
  margin: ${props => props.$formMargin || "0 auto"};
  width: ${props => props.$formWidth || "inherit"};
}

p {
  color: ${props => props.$pFontColor || "#bf1650"};
  font-family: ${props => props.$pFontFamily || "inherit"};
  font-size: ${props => props.$pFontSize || "14px"};
  font-weight: ${props => props.$pFontWeight || "600"};
  letter-spacing: ${props => props.$pLetterSpacing || "unset"};
  margin: ${props => props.$pMargin || "0 auto"};
  padding: ${props => props.$pPadding || "0"};
  text-transform: ${props => props.$pTextTransform || "unset"};
}

p::before {
  display: inline;
  content: "⚠ ";
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: ${props => props.$inputFontSize || "14px"};
}

textarea {
  width: 100%;
  display:  block;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: ${props => props.$textareaFontSize || "14px"};
}

label {
  color: ${props => props.$labelFontColor || "white"};
  display: ${props => props.$labelDisplay || "block"};;
  font-family: ${props => props.$labelFontFamily || "inherit"};
  font-size:  ${props => props.$labelFontSize || "14px"};
  font-weight: ${props =>  props.$labelFontWeight || "200"};
  letter-spacing: ${props => props.$labelLetterSpacing || "inherit"};
  line-height: ${props => props.$labelLineHeight || "2"};
  margin: ${props => props.$labelMargin || "20px auto 12px auto"};
  text-align: ${props => props.$labelTextAlign || "left"};
}

button[type="submit"],
input[type="submit"] {
  background: ${props => props.$buttonColor || "#ec5990"};
  border: none;
  color: ${props => props.$buttonFontColor || "white"};
  font-family: ${props => props.$buttonFontFamily || "inherit"};
  font-size: ${props => props.$buttonFontSize || "16px"};
  font-weight: ${props => props.$buttonFontWeight || "inherit"};
  letter-spacing:  ${props => props.$buttonLetterSpacing || "inherit"};
  margin-top: ${props => props.$buttonMarginTop || "40px"};
  padding:  ${props => props.$buttonPadding || "20px"};
  text-transform: ${props => props.$buttonTextTransform || "uppercase"};
}

button[type="submit"]:hover,
input[type="submit"]:hover {
  background: #bf1650;
}

button[type="submit"]:active,
input[type="button"]:active,
input[type="submit"]:active {
  transition: 0.3s all;
  transform: translateY(3px);
  border: 1px solid transparent;
  opacity: 0.8;
}

input:disabled {
  opacity: 0.4;
}

input[type="button"]:hover {
  transition: 0.3s all;
}

button[type="submit"],
input[type="button"],
input[type="submit"] {
  appearance: none;
  -webkit-appearance: none;
}

.App {
  max-width: 600px;
  margin: 0 auto;
}

button[type="button"] {
  display: block;
  appearance: none;
  background: #333;
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
}

hr {
  margin-top: 30px;
}

button {
  display: block;
  appearance: none;
  margin-top: 40px;
  border: 1px solid #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
}
.tagCheckBox {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
`
