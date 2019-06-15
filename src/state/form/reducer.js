// @flow
import type { Redux } from 'types'
// FIXME: Refactor we can use flow properly.
export default {
  ANSWER_FORM: (
    state: Redux,
    { name, answer }: { name: string, answer: any }
  ): Redux => ({
    ...state,
    form: {
      ...state.form,
      answers: {
        ...state.form.answers,
        [name]: answer,
      },
    },
  }),
  FORM_LOADING: (state: Redux, action: any): Redux => ({
    ...state,
    form: {
      ...state.form,
      loading: action.loading,
    },
  }),
  FORM_LOADED: (state: Redux, action: any): Redux => ({
    ...state,
    form: {
      ...state.form,
      loading: false,
      answers: action.answers,
      complete: action.complete,
    },
  }),
}
