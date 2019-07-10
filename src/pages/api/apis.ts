import { get, post, put, destroy } from './rest-client'

export const Authentication = {
  signUp: (data) => post(`/api/send-sms-code`, data).then(({ data }) => data),
  get: (submissionId, id) =>
    get(`/current-applicant/forms/${submissionId}/files/${id}`).then(
      ({ data }) => data
    ),
  upload: (submissionId, formData, onUploadProgress) =>
    post(`/current-applicant/forms/${submissionId}/files`, formData, {
      onUploadProgress,
    }).then(({ data }) => data),
  download: (submissionId, id, filename) =>
    put(
      `/current-applicant/forms/${submissionId}/files/${id}/${encodeURIComponent(
        filename
      )}`
    ).then(({ data }) => data),
  destroy: (submissionId, id) =>
    destroy(`/current-applicant/forms/${submissionId}/files/${id}`).then(
      ({ data }) => data
    ),
}
