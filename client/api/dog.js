import request from 'superagent'

const URL = 'http://localhost:3000/api/v1/dog'

export function fetchDog () {
  return request.get(URL)
}
