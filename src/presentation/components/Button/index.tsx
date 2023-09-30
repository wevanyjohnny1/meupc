import React from 'react'
import { Container } from './styles'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

const Button: React.FC<Props> = ({ title, ...props }) => {
  return (
    <Container {...props}>{title}</Container>
  )
}

export default Button
