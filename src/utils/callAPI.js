import { errors } from './errorHandler'

export const callAPI = async (q) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json'}
  }
  try {
    const res = await fetch(`http://localhost:8000/graphql?${q}`, options)
    const json = await res.json()
    console.log(json)
    return json
  }
  catch (err) {
    return errors("error connecting to graphql: ", err)
  }
}