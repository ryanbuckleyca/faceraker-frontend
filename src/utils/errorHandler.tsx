import { graphRes } from '../interfaces'

export const errors = (msg:string, err:any):graphRes => {
  const errMsg = msg + err
  console.log(errMsg)
  return {data: null, errors: errMsg}
}