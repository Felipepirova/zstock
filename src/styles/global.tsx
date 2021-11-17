import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --background: #fff;
    --title-color: #221C35;
    --button-color: #00BF6F;
    --text-color:#9A95AA;
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
    color: var(--title-color);
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }
`
