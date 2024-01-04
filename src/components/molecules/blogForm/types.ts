export interface StyledBlogFormProps {
  $buttonColor?: string
  $buttonFontColor?: string
  $buttonFontFamily?: string
  $buttonFontSize?: string
  $buttonFontWeight?: string
  $buttonLetterSpacing?: string
  $buttonMarginTop?: string
  $buttonPadding?: string
  $buttonTextTransform?: string
  $display?: string
  $flexFlow?: string
  $fontFamily?: string
  $formMargin?: string
  $formWidth?: string
  $inputFontSize?: string
  $labelDisplay?: string
  $labelFontColor?: string
  $labelFontFamily?: string
  $labelFontSize?: string
  $labelFontWeight?: string
  $labelLetterSpacing?: string
  $labelLineHeight?: string
  $labelMargin?: string
  $labelTextAlign?: string
  $margin?: string
  $maxWidth?: string
  $padding?: string
  $pFontColor?: string
  $pFontFamily?: string
  $pFontSize?: string
  $pFontWeight?: string
  $pLetterSpacing?: string
  $pMargin?: string
  $pPadding?: string
  $pTextTransform?: string
  $textareaFontSize?: string
  $textTransform?: string
  $width?: string
}

export interface FormProps {
  ariaDetails?: string
  buttonColor?: string
  buttonFontColor?: string
  buttonFontFamily?: string
  buttonFontSize?: string
  buttonFontWeight?: string
  buttonHoverColor?: string
  buttonLetterSpacing?: string
  buttonMarginTop?: string
  buttonPadding?: string
  buttonTextTransform?: string
  createPostReply: string
  display?: string
  flexFlow?: string
  fontFamily?: string
  formMargin?: string
  formWidth?: string
  inputFontSize?: string
  invalidAuthorError?: string
  invalidPhoneError?: string
  labelDisplay?: string
  labelFontColor?: string
  labelFontFamily?: string
  labelFontSize?: string
  labelFontWeight?: string
  labelLetterSpacing?: string
  labelLineHeight?: string
  labelMargin?: string
  labelTextAlign?: string
  margin?: string
  maxWidth?: string
  padding?: string
  pFontColor?: string
  pFontFamily?: string
  pFontSize?: string
  pFontWeight?: string
  pLetterSpacing?: string
  pMargin?: string
  pPadding?: string
  postPath?: string
  pTextTransform?: string
  requiredFieldError?: string
  submitButtonStyles?: any
  tags?: any
  textareaColumns?: number
  textareaFontSize?: string
  textareaRows?: number
  textTransform?: string
  width?: string
}

export interface IFormInput {
  author: string;
  title: string;
  summary: string;
  body: string;
  tags: string;
}

export interface TagProps {
  tags?: any
  register?: any
}
