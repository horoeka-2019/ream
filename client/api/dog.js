import request from 'superagent'

const URL = 'https://random.dog/woof.json'

export function fetchDog () {
  return request.get(URL)
}
