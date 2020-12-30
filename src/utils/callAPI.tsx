import { graphRes } from '../interfaces'
import { errors } from './errorHandler'

export const callAPI = async (q:string): Promise<graphRes> => {
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