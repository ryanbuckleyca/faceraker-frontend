import { errors } from './errorHandler'

const baseURL = process.env.NODE_ENV === 'development'
? "http://localhost:8000/"
: "http://louwer.herokuapp.com/"

export const callAPI = async (q) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json'}
  }
  try {
    const res = await fetch(`${baseURL}graphql?${q}`, options)
    const json = await res.json()
    console.log(json)
    return json
  }
  catch (err) {
    return errors("error connecting to graphql: ", err)
  }
}