import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { StyledBlogForm } from "./styles"
import { FormProps } from "./types"

interface IFormInput {
  author: string;
  title: string;
  summary: string;
  body: string;
  tags: string;
}

function BlogForm(props: FormProps) {
  const [reply, setReply] = useState("")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput, e: any) => {
    // console.log(JSON.stringify(data))
    const heads: any = {
      "Content-Type": "application/json"
    }
    fetch(`${props.postPath || "blog/create-post"}`, {method: "POST", credentials: "include", body: JSON.stringify(data), headers: heads})
      .then(response => response.json())
      .then(data => setReply(props.createPostReply))
      .catch(error => setReply(error))
    e.target.reset()
  } // your form submit function which will invoke after successful validation

  // console.log(watch("name"))

  return (
    <StyledBlogForm
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
      {reply != props.createPostReply &&
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input
          {...register("title", {
            required: true,
            maxLength: 100,
            pattern: /^[A-Z a-z]+$/i
          })}
        />
        {errors?.title?.type === "required" && <p>{props.requiredFieldError || "This field is required"}</p>}
        <label>Author</label>
        <input {...register("author", { pattern: /^[A-Z a-z]+$/i })} />
        {errors.author && (
          <p>{props.invalidAuthorError || "Invalid phone number"}</p>
        )}
        <label>Summary</label>
        <textarea rows={20} {...register("summary", { required: true })}/>
        {errors?.summary?.type === "required" && <p>{props.requiredFieldError || "This field is required"}</p>}
        <label>Post</label>
        <textarea rows={20} {...register("body", { required: true })}/>
        {errors?.body?.type === "required" && <p>{props.requiredFieldError || "This field is required"}</p>}
        <input type="submit" />
      </form>
      }
    </StyledBlogForm>
  )
}

export default BlogForm
