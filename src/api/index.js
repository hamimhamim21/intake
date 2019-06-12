// @flow
import { http } from './http'
import type { Data, ImageUpload, Submission } from 'types'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const questions = {
  submission: {
    // Create a new submission.
    create: (): Promise<Submission> => {
      const url = '/api/submission/'
      return http.post(url, { data: {} }).then(r => r.json())
    },
    // Retrieve an existing submission.
    get: (id: string): Promise<Submission> => {
      const url = `/api/submission/${id}/`
      return http.get(url).then(r => r.json())
    },
    // Update an existing submission's data.
    update: (id: string, data: Data): Promise<Submission> => {
      const url = `/api/submission/${id}/`
      return http.patch(url, { data }).then(r => r.json())
    },
    // Submit a submission.
    submit: (id: string): Promise<Submission> => {
      const url = `/api/submission/${id}/`
      return http.patch(url, { complete: true }).then(r => r.json())
    },
  },
  upload: (image: File): Promise<ImageUpload> => {
    const url = '/api/images/'
    const form = new FormData()
    form.append('image', image)
    return fetch(`${SERVER}${url}`, {
      method: 'POST',
      body: form,
    }).then(r => r.json())
  },
}

export const api = {
  questions,
}
