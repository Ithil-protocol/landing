/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import "twin.macro"
import tw from "twin.macro"
export interface IBaseProps {
  className?: string | undefined
}

export interface ITxtProps extends IBaseProps {
  h1: boolean
  h2: boolean
  children: any
}

const InnerText: React.FC<IBaseProps> = props => {
  if (props.h1) return <h1 className={props.className}>{props.children}</h1>
  else if (props.h2)
    return <h2 className={props.className}>{props.children}</h2>
  return <div className={props.className}>{props.children}</div>
}

export const Txt = {
  MobileMedium: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font-200 font-medium text-mobile-medium`]}
    />
  ),
  CaptionMedium: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font-100 font-medium text-caption-medium`]}
    />
  ),
  Body2Regular: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font-100 font-normal text-body2-regular`]}
    />
  ),
  Body2Bold: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font-100 font-bold text-body2-bold`]}
    />
  ),
  Body1Regular: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font-100 font-normal text-body1-regular`]}
    />
  ),
  ButtonMedium: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font font-normal text-button-medium`]}
    />
  ),
  Body1Bold: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font font-bold text-body1-bold`]}
    />
  ),
  InputText: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font font-normal text-input-text`]}
    />
  ),
  Heading2: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font font-semibold text-heading2`]}
    />
  ),
  Heading1: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-sans text-font font-normal text-heading1`]}
    />
  ),
  // TODO:
  Section: (props: ITxtProps) => (
    <InnerText
      {...props}
      css={[tw`font-serif text-primary font-normal text-section`]}
    />
  ),
}
