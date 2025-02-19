/**
 * HTTP status code return messages
 * @param {number} status - HTTP status code
 * @returns {string} Message
 */

function _getStatusMessage(status) {
  let message = ''
  switch (status) {
    case 200:
      message = 'Success'
      break
    case 201:
      message = 'Data successfully created'
      break
    case 400:
      message = 'Bad Request'
      break
    case 401:
      message = 'Not Authenticated'
      break
    case 404:
      message = 'Not found'
      break
    case 503:
      message = 'Service unavailable. Try again later'
      break
    default:
      message = 'Error'
      break
  }
  return message
}

export class ResponseWrapper {
  constructor(response, message) {
    super()
    this.status = response.status
    this.statusMessage = _getStatusMessage(this.status)
    this.message = message || null
  }
}
