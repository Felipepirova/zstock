import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --white:#fff;
    --blue: #221C35;
    --green: #00BF6F;
    --grey:#9A95AA;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

  body, input, textarea, button{
    font-family: "Sora", sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
    font-family: "Sora", sans-serif;
    color: var(--blue);
  }

  body{
    background: var(--green);
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-size: 1rem;
    color: var(--green);
    background: var(--white);
    border: 1px solid var(--green);
    padding: 0 2rem;
    border-radius: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .react-modal-overlay{
    background: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }


`
