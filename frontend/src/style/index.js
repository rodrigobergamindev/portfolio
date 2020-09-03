import styled from 'styled-components';


const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

const Card = styled.div`
  box-sizing: border-box;
  margin-top: 12em;
  max-width: 450px;
  color: #718093;
  padding: 3em;

  @media only screen and (max-width: 600px) {
   max-width: 300px;
  }


  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  background-color:#dcdde1;
  border-radius: 1%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


h1{
  font-weight: 100;
  letter-spacing: 2.7px;
  margin-top: 0.6em;
  text-align: center;
  font-size: 1.6em;
  font-weight: 400;

  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
   }

}


  h3 {
      font-weight: 300;
      font-size: 0.9em;
      margin-top: 0.5em;
      text-align: center;

      @media only screen and (max-width: 600px) {
        font-size: 0.9em;
       }
  }


img {
  border-radius: 50%;
  max-width: 9.1em;
  margin-bottom: 0.9em;
  z-index: 100;
}

  ul {
    margin-top: 1.2em;
    width: 18em;
      display:flex;
     align-items: center;
     justify-content: center;
     list-style-type:none;

     li {
       margin: 0.8em;
       transition: 1s;

       &:hover {
        transition: all .5s ease-in-out;
        transform: scale(1.4);
       }
     }
  }

`


export {Container, Card}