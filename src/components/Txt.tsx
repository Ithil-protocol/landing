import React from 'react'
import 'twin.macro'
import tw from 'twin.macro'

export interface IBaseProps {
  className?: string | undefined
}


export interface ITxtProps extends IBaseProps {
  children: any
}

const InnerText: React.FC<IBaseProps> = (props) => {
  return <div className={props.className}>{props.children}</div>
}

// TODO: use twin macro for all components

export const Txt = {
  MobileMedium: (props: ITxtProps) => (
    <InnerText
      {...props}
        className="font-sans text-font-200 font-medium text-mobile-medium"
    />
  ),
  CaptionMedium: (props: ITxtProps) => (
    <InnerText
      {...props}
        className="font-sans text-font-100 font-medium text-caption-medium"
    />
  ),
  Body2Regular: (props: ITxtProps) => (
    <InnerText
      {...props}

        className="font-sans text-font font-normal text-body2-regular"


    />
  ),
  Body2Bold: (props: ITxtProps) => (
    <InnerText
      {...props}
  
        className="font-sans text-font-100 font-bold text-body2-bold"

  
    />
  ),
  Body1Regular: (props: ITxtProps) => (
    <InnerText
      {...props}

        className="font-sans text-font-100 font-normal text-body1-regular"


    />
  ),
  ButtonMedium: (props: ITxtProps) => (
    <InnerText

  
        className="font-sans text-font font-normal text-button-medium"


    />
  ),
  Body1Bold: (props: ITxtProps) => (
    <InnerText
      {...props}
   
        className="font-sans text-font font-bold text-body1-bold"

     
    />
  ),
  InputText: (props: ITxtProps) => (
    <InnerText
      {...props}
     
        className="font-sans text-font font-normal text-input-text"

     
    />
  ),
  Heading2: (props: ITxtProps) => (
    <InnerText
      {...props}
    // TODO
    css={[tw`font-sans text-font font-semibold text-heading2`]}


    />
  ),
  Heading1: (props: ITxtProps) => (
    <InnerText
      {...props}

        className="font-sans text-font font-normal text-heading1"

     
    />
  ),
}
