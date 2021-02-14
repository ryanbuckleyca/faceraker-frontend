import { errors } from './errorHandler'

const baseURL = "https://louwer-api.herokuapp.com/graphql?"

export const callAPI = async (q) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json'}
  }
  try {
    const res = await fetch(`${baseURL}${q}`, options)
    const json = await res.json()
    return json
  }
  catch (err) {
    return errors("error connecting to graphql: ", err)
  }
}
