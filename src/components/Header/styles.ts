import styled from 'styled-components'

export const Container = styled.header`
  background: var(--white);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--green);
    background: var(--white);
    border: 1px solid var(--green);
    padding: 0 2rem;
    border-radius: 3rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
