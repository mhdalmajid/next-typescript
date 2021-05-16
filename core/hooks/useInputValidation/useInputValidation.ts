import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { AnySchema } from 'yup'
import { InputProps } from '@components/elements/Input/Input'

export interface useValidatedInputProps extends InputProps {
  /**
   * Yup schema
   */
  schema: AnySchema
  /**
   *text message to desplay when there is error
   */
  errorText?: string
}

interface ErrorDispatch {
  error: string | false
  setError: Dispatch<SetStateAction<string | false>>
}

type validation = (props: useValidatedInputProps) => [InputProps, ErrorDispatch]

export const useValidatedInput: validation = ({ schema, errorText = 'invalid', ...props }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | false>(false)

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value
    const valid = await schema.isValid(newText)
    setError(valid ? false : errorText)
    setValue(newText)
  }

  return [
    { value, onChange, error, ...props },
    { error, setError },
  ]
}
