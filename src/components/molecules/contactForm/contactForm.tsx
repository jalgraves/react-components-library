import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { StyledContactForm } from "./styles"
import { FormProps } from "./types"

interface IFormInput {
  name: string;
  email: string;
  details: string;
  phone: string;
}

function ContactForm(props: FormProps) {
  const [reply, setReply] = useState("")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput, e: any) => {
    // console.log(JSON.stringify(data))
    const requestHeaders: any = {
      "Content-Type": "application/json"
    }
    const requestPath = props.requestPath || "contact/send-message"
    fetch(requestPath, {method: "POST", credentials: "include", body: JSON.stringify(data), headers: requestHeaders})
      .then(response => response.json())
      .then(data => setReply(data.msg))
      .catch(error => setReply(error))
    e.target.reset()
  } // your form submit function which will invoke after successful validation

  // console.log(watch("name"))

  return (
    <StyledContactForm
      aria-details={props.ariaDetails || "undefined"}
      $buttonColor={props.buttonColor}
      $buttonFontColor={props.buttonFontColor}
      $buttonFontFamily={props.buttonFontFamily}
      $buttonFontSize={props.buttonFontSize}
      $buttonFontWeight={props.buttonFontWeight}
      $buttonLetterSpacing={props.buttonLetterSpacing}
      $buttonMarginTop={props.buttonMarginTop}
      $buttonPadding={props.buttonPadding}
      $display={props.display}
      $flexFlow={props.flexFlow}
      $fontFamily={props.fontFamily}
      $formMargin={props.formMargin}
      $formWidth={props.formWidth}
      $inputFontSize={props.inputFontSize}
      $labelDisplay={props.labelDisplay}
      $labelFontColor={props.labelFontColor}
      $labelFontFamily={props.labelFontFamily}
      $labelFontSize={props.labelFontSize}
      $labelFontWeight={props.labelFontWeight}
      $labelLetterSpacing={props.labelLetterSpacing}
      $labelLineHeight={props.labelLineHeight}
      $labelMargin={props.labelMargin}
      $labelTextAlign={props.labelTextAlign}
      $margin={props.margin}
      $maxWidth={props.maxWidth}
      $padding={props.padding}
      $pFontColor={props.pFontColor}
      $pFontFamily={props.pFontFamily}
      $pFontSize={props.pFontSize}
      $pFontWeight={props.pFontWeight}
      $pLetterSpacing={props.pLetterSpacing}
      $pMargin={props.pMargin}
      $pPadding={props.pPadding}
      $pTextTransform={props.pTextTransform}
      $textareaFontSize={props.textareaFontSize}
      $textTransform={props.textTransform}
      $width={props.width}
    >
      {reply &&
        <p>{reply}</p>
      }
      {reply != props.contactReply &&
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("name", {
            required: true,
            maxLength: 100,
            pattern: /^[A-Z a-z]+$/i
          })}
        />
        {errors?.name?.type === "required" && <p>{props.requiredFieldError || "This field is required"}</p>}
        {errors?.name?.type === "maxLength" && (
          <p>Name cannot exceed 190 characters</p>
        )}
        {errors?.name?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            })}
        />
        {errors?.email?.type === "required" && <p>{props.requiredFieldError || "This field is required"}</p>}
        {errors?.email?.type === "pattern" && (
          <p>{props.invalidEmailError || "Invalid email address"}</p>
        )}
        <label>Phone</label>
        <input {...register("phone", { pattern: /^[0-9-]+$/i })} />
        {errors.phone && (
          <p>{props.invalidPhoneError || "Invalid phone number"}</p>
        )}
        <label>Details</label>
        <textarea rows={10} {...register("details", { required: true })}/>
        {errors?.details?.type === "required" && <p>{props.requiredFieldError || "This field is required"}</p>}
        <input type="submit" />
      </form>
      }
    </StyledContactForm>
  )
}

export default ContactForm
