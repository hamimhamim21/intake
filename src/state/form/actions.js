// @flow
import { api } from 'api'
import { flattenArray, entries } from 'utils'
import type { Action, Dispatch, Section, Submission, Field, Data } from 'types'

export default {
  answer: (name: string, answer: any): Action => ({
    type: 'ANSWER_FORM',
    name,
    answer,
  }),
  create: (sections: Array<Section>) => (
    dispatch: Dispatch
  ): Promise<Submission> => {
    dispatch({ type: 'FORM_LOADING' })
    const questions = getQuestions(sections)
    return api.questions.submission.create(questions).then(submission => {
      const answers = getFrontendAnswers(submission)
      dispatch({
        type: 'FORM_LOADED',
        answers,
        complete: submission.complete,
      })
      return submission
    })
  },
  get: (id: string) => (dispatch: Dispatch): Promise<Submission> => {
    dispatch({ type: 'FORM_LOADING' })
    return api.questions.submission.get(id).then(submission => {
      const answers = getFrontendAnswers(submission)
      dispatch({
        type: 'FORM_LOADED',
        answers,
        complete: submission.complete,
      })
      return submission
    })
  },
  update: (id: string, answerData: Data) => (
    dispatch: Dispatch
  ): Promise<Submission> => {
    dispatch({ type: 'FORM_LOADING' })
    const answers = getBackendAnswers(answerData)
    return api.questions.submission.update(id, answers).then(submission => {
      const frontendAnswers = getFrontendAnswers(submission)
      dispatch({
        type: 'FORM_LOADED',
        answers: frontendAnswers,
        complete: submission.complete,
      })
      return submission
    })
  },
  submit: (id: string) => (dispatch: Dispatch): Promise<Submission> => {
    dispatch({ type: 'FORM_LOADING' })
    return api.questions.submission.submit(id).then(submission => {
      const answers = getFrontendAnswers(submission)
      dispatch({
        type: 'FORM_LOADED',
        answers,
        complete: submission.complete,
      })
      return submission
    })
  },
}

// A gross way to "ensure" ordering.
const getBackendAnswers = (
  answers: Data
): Array<{
  name: string,
  answer: mixed,
}> => entries(answers).map(([name, answer]) => ({ name, answer }))

const getFrontendAnswers = (submission: Submission): Data =>
  submission.answers.reduce((obj, { name, answer }) => ({
    ...obj,
    [name]: answer,
  }))

// This is a bit messy because we have fields with fields inside
// ... maybe that was a stupid choice.
const getQuestions = (sections: Array<Section>): { [string]: Field } =>
  sections
    // Get all the fields out of the section forms
    .map(s => s.forms.map(form => form.fields).reduce(flattenArray, []))
    .reduce(flattenArray, [])
    // Get all the fields out of the nested fields
    .map(field => (field.fields ? field.fields : field))
    .reduce((arr, f) => (Array.isArray(f) ? [...arr, ...f] : [...arr, f]), [])
    // Put everything in an object map
    .reduce((obj, field) => ({ ...obj, [field.name]: field }), {})
