import { darken, transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.form`
  background: var(--white);
  border-radius: 2rem;
  padding: 2rem;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;

    &::placeholder {
      color: var(--grey);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button {
    width: 100%;
  }
`
export const ProductTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`
interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#00BF6F',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${props =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1ren;
    color: var(--title);
  }
`
