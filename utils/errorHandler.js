export const errors = (msg, err) => {
  const errMsg = msg + err
  console.log(errMsg)
  return {data: null, errors: errMsg}
}