import React from 'react'
import { useGlobalContext } from '../context'

export default function Error() {
  const { isError } = useGlobalContext()
  return <h1 style={{ color: 'brown' }}>{isError.message} </h1>
}
