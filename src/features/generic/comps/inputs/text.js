// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  value: string | number | void,
  onChange: string => void,
  disabled?: boolean,
  placeholder?: string,
  onFocus?: Function,
  onBlur?: Function,
}

export const TextInput = ({
  value,
  onChange,
  disabled,
  placeholder,
  onFocus,
  onBlur,
}: Props) => (
  <TextEl
    type="text"
    value={value || ''}
    onChange={e => onChange(e.target.value)}
    disabled={disabled}
    placeholder={placeholder}
    onFocus={onFocus}
    onBlur={onBlur}
  />
)

export const TextEl = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  box-sizing: border-box;
  padding: 0 10px;
  border: 1px solid #babec5;
  border-radius: 4px;
  outline: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  &:disabled {
    background: #eee;
    color: #666;
  }
  &:hover:not(:disabled) {
    border-color: #8d9096;
    box-shadow: 0 0 0 2px #d4d7dc;
  }
  &:focus {
    border-color: #6bc4c9;
  }
`
