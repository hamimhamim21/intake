// @flow
import type { Reducer, Action, Redux } from 'types'
import { init } from 'state/init'

import * as utils from './utils'

// Form operation
export const reducer: Reducer = (state, action) => {
  let page, answers, forms, form
  if (!state) return init
  switch (action.type) {
    // User answers a question
    case 'ANSWER_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          answers: {
            ...state.form.answers,
            [action.name]: action.answer,
          },
        },
      }
    // Form starts loading from backend.
    case 'FORM_LOADING':
      return {
        ...state,
        form: {
          ...state.form,
          iaLoading: true,
        },
      }
    // Form finished loading from backend.
    case 'FORM_LOADED':
      page = 0
      answers = utils.getFrontendAnswers(action.submission)
      forms = utils.getForms(action.submission)
      form = utils.getForm(0, action.submission)
      return {
        ...state,
        form: {
          id: action.submission.id,
          answers,
          questions: action.submission.questions,
          page,
          hasNext: utils.getHasNext(page, answers, forms),
          hasPrev: utils.getHasPrev(page, answers, forms),
          validation: utils.getValidation(form, answers),
          isSubmitted: false,
          isLoading: false,
          isComplete: action.submission.complete,
        },
      }
    // User requests next page.
    case 'FORM_NEXT':
      page = state.form.page + 1
      answers = utils.getFrontendAnswers(action.submission)
      forms = utils.getForms(action.submission)
      form = utils.getForm(0, action.submission)
      return {
        ...state,
        form: {
          id: action.submission.id,
          answers,
          questions: action.submission.questions,
          page,
          hasNext: utils.getHasNext(page, answers, forms),
          hasPrev: utils.getHasPrev(page, answers, forms),
          validation: utils.getValidation(form, answers),
          isSubmitted: false,
          isLoading: false,
          isComplete: action.submission.complete,
        },
      }
    // User requests previous page.
    case 'FORM_PREV':
      page = state.form.page - 1
      return {
        ...state,
        form: { ...state.form, page },
      }
    // User submits the form.
    case 'FORM_SUBMIT':
      return {
        ...state,
        form: {
          ...state.form,
          iaLoading: false,
          isComplete: action.submission.complete,
        },
      }
  }
  return state
}
