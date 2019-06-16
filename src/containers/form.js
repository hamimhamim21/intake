// @flow
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { actions } from 'state'
import { FIELD_TYPES } from 'consts'
import { Form, Header, Page, Layout } from 'components'
import { validate, flattenArray } from 'utils'
import { NamedRedirect, VIEWS } from 'routes'
import { Sidebar } from 'containers'
import { SECTIONS } from 'questions'
import type { View, Form as FormType, Redux, FormState } from 'types'

type Props = {
  submissionId: string,
}

export const FormContainer = ({ submissionId }: Props) => {
  // Setup redirect to out-of-form pages.
  const [redirect, setRedirect] = useState<View | null>(null)
  // Hook up to Redux store.
  const dispatch = useDispatch()
  const setAnswer = k => v => dispatch(actions.form.answer(k, v))
  const loadSubmission = () => dispatch(actions.form.load(submissionId))
  const onPrev = () => dispatch(actions.form.prev())
  const formState: FormState = useSelector(
    ({ form }: Redux) => form,
    shallowEqual
  )
  // Load submission if it is not already loaded.
  useEffect(() => {
    if (!formState.id) loadSubmission()
  }, [])
  // Redirect users to out-of-form message pages.
  if (redirect) {
    return <NamedRedirect to={VIEWS[redirect]} />
  }
  if (formState.isLoading) {
    return <div>Loading...</div>
  }
  const forms: Array<FormType> = SECTIONS.map(s => s.forms).reduce(flattenArray)
  const form = forms[formState.page]
  // Redirect if necessary, otherwise request next page.
  const onNext = (e: SyntheticEvent<any>) => {
    const maybeRedirect = form.getRedirect
      ? form.getRedirect(formState.answers)
      : null
    if (maybeRedirect) {
      setRedirect(maybeRedirect)
    } else {
      if (!formState.validation.valid) {
        e.preventDefault()
        e.stopPropagation()
      } else {
        dispatch(actions.form.next())
        window.scrollTo(0, 0)
      }
    }
  }
  return (
    <Layout vertical>
      <Header />
      <Layout>
        <Sidebar current={formState.page} sections={SECTIONS} />
        <Page>
          <Form
            form={form}
            validation={formState.validation}
            hasNext={formState.hasNext}
            hasPrev={formState.hasPrev}
            isSubmitted={formState.isSubmitted}
            onNext={onNext}
            onPrev={onPrev}
            onChange={setAnswer}
            data={formState.answers}
          />
        </Page>
      </Layout>
    </Layout>
  )
}
