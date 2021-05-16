import yup, { string } from 'yup'

export const emailSchema = string().trim().email().required()
export const passworSchema = string().min(6).required()
export const nameSchema = string()
  .trim()
  .min(3)
  .max(30)
  .matches(/^[a-zA-Z]+[a-zA-Z '\\-]*[a-zA-Z]+$/)
  .required()

export const usernameSchema = string()
  // .trim()
  .min(5)
  .max(20)
  .matches(/^[a-zA-Z]*$/)
  .required()

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const mobileSchema = string().matches(phoneRegExp)

export const numberSchema = string().matches(/^[0-9\b]+$/)
