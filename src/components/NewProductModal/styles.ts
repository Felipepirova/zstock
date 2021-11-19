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

  button[type='submit'] {
    width: 100%;
    background: var(--green);
    color: var(--white);
  }
`
export const ProductModalContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxPropsType {
  isActive: boolean
  activeColor: 'green'
}

const color = {
  green: '#00BF6F'
}

export const RadioBoxType = styled.button<RadioBoxPropsType>`
  background: ${props =>
    props.isActive
      ? transparentize(0.8, color[props.activeColor])
      : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  span {
    text-align: center;
    font-size: 1rem;
    color: var(--title);
  }
`

interface RadioBoxPropsMovimentation {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#00BF6F',
  red: '#e52e4d'
}

export const RadioBoxMovimentation = styled.button<RadioBoxPropsMovimentation>`
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
    font-size: 1rem;
    color: var(--title);
  }
`
