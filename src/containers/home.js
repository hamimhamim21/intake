// @flow
import React, { useState } from 'react'
import { connect } from 'react-redux'

import { actions } from 'state'
import { FIELD_TYPES } from 'consts'
import { Form } from 'components'
import { validate, flattenArray } from 'utils'
import { NamedRedirect, VIEWS } from 'routes'

type Props = {
  onCreate: Function,
}

export const _HomeContainer = ({ onCreate }: Props) => {
  const [redirect, setRedirect] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)
  if (redirect) {
    return <NamedRedirect to={VIEWS[redirect]} />
  }

  const forms: Array<FormType> = sections.map(s => s.forms).reduce(flattenArray)
  const form = forms[idx]

  const validation = getValidation(form, answers)
  const nextPage = getNextPage(idx, forms, answers)
  const backPage = getBackPage(idx, forms, answers)
  const isFinalForm = idx + 1 === forms.length

  const onNext = (e: SyntheticEvent<any>) => {
    const maybeRedirect = form.getRedirect ? form.getRedirect(answers) : null
    if (maybeRedirect) {
      setRedirect(maybeRedirect)
      return
    }
    setSubmitted(true)
    if (!validation.valid) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      setSubmitted(false)
      window.scrollTo(0, 0)
    }
  }

  return (
    <Form
      idx={idx}
      form={form}
      validation={validation}
      data={answers}
      nextPage={nextPage}
      backPage={backPage}
      onNext={onNext}
      onChange={k => v => setAnswer(k, v)}
      isFinalForm={isFinalForm}
      isSubmitted={isSubmitted}
    />
  )
}

const mapState = (state: Redux) => ({
  answers: state.form.answers,
})
const mapActions = dispatch => ({
  setAnswer: (...args) => dispatch(actions.form.answer(...args)),
})
export const HomeContainer = connect(
  mapState,
  mapActions
)(_HomeContainer)
