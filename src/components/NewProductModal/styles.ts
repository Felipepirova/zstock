import styled from 'styled-components'

export const Container = styled.form`
  background: var(--white);
  border-radius: 2rem;
  padding: 2rem;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 2rem;

    border: 1px solid var(--green);

    &::placeholder {
      color: var(--grey);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button {
    margin-top: 1rem;
    height: 4rem;
    width: 100%;
  }
`
