import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    text-align: center;
    color: white;
}
.projects-main {
    height :90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997;
        color:white;
    }
}
#light{
    color: black;
    span {
        color: #23D997;
    }
    button {
        color: black;
    }
    .navme {
        background-color: lightgray;
        a {
            color: black;
        }
    }
}
#dark {
    background-color: #1b1b1b;
        a {
            color: white;
        }
}

h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
    }
    span {
        font-weight: bold;
        color: #23d997;
        
    }
    a {
        font-size: 1.1rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
.cardBox {
  width: 300px;
  height: 470px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  margin:0 auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;
}
.card {
  position: absolute;
  width: 95%;
  height: 95%;
  background: #000814;
  border-radius: 20px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.5) 0px 18px 36px -18px inset;
    
}
.card h2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 800;
  pointer-events: none;
  opacity: 0.5;
}

span {
  top: 75%;
}

.card .content h3 {
  font-size: 3rem;
  padding-bottom: 10px;
}
.card .content p {
  font-size: 1.6rem;
  line-height: 25px;
}
.card .content {
  transform: translateY(100%);
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.card:hover .content {
  transform: translateY(0);
  opacity: 1;
}

.card:hover h2, 
.card:hover span {
  opacity: 0;
}

.cardBox::before {
  content: "";
  position: absolute;
  width: 40%;
  height: 150%;
  background: #40E0D0;
background: -webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
background: linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
  animation: glowing01 5s linear infinite;
  transform-origin: center;
  animation: glowing 5s linear infinite;
}

@keyframes glowing {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

`

export default GlobalStyle;