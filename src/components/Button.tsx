/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import 'twin.macro'
import tw from 'twin.macro'

import { ICSSProps } from '../types'
import { MouseEventHandler } from 'react'
import { Txt } from './Txt'

interface IButtonProps extends ICSSProps {
  type?: any
  primary?: boolean | undefined
  action?: boolean | undefined
  full?: boolean | undefined
  leftIcon?: any
  rightIcon?: any
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string | undefined
  bold?: boolean | undefined
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const primary = !props.action
  const LeftIcon = props.leftIcon
  const RightIcon = props.rightIcon
  return (
    <button
      type={props.type ?? 'button'}
      className={props.className}
      css={[
        tw`border-0 rounded-md cursor-pointer flex flex-row items-center justify-center h-12 tablet:h-11 desktop:h-12 px-2  px-5 tablet:px-6 desktop:px-7`,
        primary && tw`bg-action`,
        props.action && tw`border border-primary`,
        props.full && tw`w-full`,
      ]}
      onClick={props.onClick}
    >
      {LeftIcon && (
        <LeftIcon
          css={[
            primary && tw`text-secondary`,
            props.action && tw`text-primary-100`,
          ]}
          tw='mr-2'
          size={16}
        />
      )}

      <Txt.Body2Regular
        css={[
          tw`flex-grow`,
          primary && tw`text-primary-100`,
          props.action && tw`text-primary-100`,
          props.bold && tw`font-bold`,
        ]}
      >
        {props.text}
      </Txt.Body2Regular>

      {RightIcon && (
        <RightIcon
          css={[
            primary && tw`text-secondary`,
            props.action && tw`text-primary-100`,
          ]}
          tw='ml-2'
          size={16}
        />
      )}
    </button>
  )
}
