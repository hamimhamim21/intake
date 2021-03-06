// @flow
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { NumberInput } from './number'

type Props = {
  value: string | void,
  onChange: string => void,
  disabled?: boolean,
  onFocus?: Function,
  onBlur?: Function,
}

export const DateInput = ({
  onChange,
  value,
  disabled,
  onFocus,
  onBlur,
}: Props) => {
  const date = value ? new Date(value) : null
  const [isValid, setValid] = useState(Boolean(date))
  const [day, setDay] = useState<number | null>(date ? date.getDay() : null)
  const [month, setMonth] = useState<number | null>(
    date ? date.getMonth() + 1 : null
  )
  const [year, setYear] = useState<number | null>(
    date ? date.getFullYear() : null
  )
  const onDayChange = val => {
    const newDay = Number(val)
    const newDate = getDate(year, month, newDay)
    setDay(newDay)
    if (newDate) {
      onChange(getDateString(newDate))
      setValid(true)
    } else {
      setValid(false)
      onChange('')
    }
  }
  const onMonthChange = val => {
    const newMonth = Number(val)
    const newDate = getDate(year, newMonth, day)
    setMonth(newMonth)
    if (newDate) {
      onChange(getDateString(newDate))
      setValid(true)
    } else {
      setValid(false)
      onChange('')
    }
  }
  const onYearChange = val => {
    const newYear = Number(val)
    const newDate = getDate(newYear, month, day)
    setYear(newYear)
    if (newDate) {
      onChange(getDateString(newDate))
      setValid(true)
    } else {
      setValid(false)
      onChange('')
    }
  }
  const isInvalid = !isValid && Boolean(day || month || year)
  return (
    <DateFieldEl>
      <NumberInput
        placeholder="Day"
        disabled={disabled}
        onChange={onDayChange}
        value={day || ''}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Separator invalid={isInvalid}>/</Separator>
      <NumberInput
        placeholder="Month"
        disabled={disabled}
        onChange={onMonthChange}
        value={month || ''}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Separator invalid={isInvalid}>/</Separator>
      <NumberInput
        placeholder="Year"
        disabled={disabled}
        onChange={onYearChange}
        value={year || ''}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </DateFieldEl>
  )
}

const getDateString = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

const getDate = (y: number | null, m: number | null, d: number | null) => {
  if (!d || !m || !y) return null
  const date = new Date(y, m - 1, d, 0, 0, 0, 0)
  const isValid =
    y === date.getFullYear() &&
    m === date.getMonth() + 1 &&
    d === date.getDate()
  return isValid ? date : null
}

const DateFieldEl = styled.div`
  input {
    width: 70px;
    display: inline-block;
  }
`
const Separator = styled.div`
  margin: 0 10px;
  display: inline-block;
  ${({ invalid }) =>
    invalid &&
    css`
      font-weight: bold;
      color: red;
    `})}
`
