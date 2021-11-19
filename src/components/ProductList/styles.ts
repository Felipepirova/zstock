import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;

  ul {
    list-style: none;

    li {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 0.25rem;
      color: var(--grey);
      background: var(--white);
    }
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin-left: 1rem;
      font-size: 0.755;
    }
  }
`
