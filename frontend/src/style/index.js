import styled from 'styled-components';


const Container = styled.div`
    color: #f5f6fa;
    display:flex;
    flex-direction:column;
`;




/*HEADER*/

const ContainerHeader = styled(Container)`
   header {
       display:flex;
       flex-direction: column;
        align-items: center;
        justify-content: center;

   }
   img {
       border-radius: 50%;
       margin-top: 4em;
       max-weight: 18em;
       max-width: 18em;
       transition: 1s;
       border: 0.5em solid #40407a;

       @media only screen and (max-width: 600px) {
        max-weight: 14em;
        max-width: 14em;
      }

      @media only screen and (max-width: 370px) {
        max-weight: 12em;
        max-width: 12em;
      }

       &:hover {
        transition: all .5s ease-in-out;
        transform: scale(1.1);
       }
   }

   
   h1{
    margin-top: 0.9em;
    text-align: center;
    font-size: 5em;
    font-weight: 400;

    @media only screen and (max-width: 600px) {
        font-size: 3em;
      }

      @media only screen and (max-width: 370px) {
        font-size: 2em;
      }

}

    h3 {
        font-weight: 100;
        font-size: 2.5em;
        margin-top: 0.5em;
        text-align: center;

        @media only screen and (max-width: 600px) {
            font-size: 1.4em;
          }
    
          @media only screen and (max-width: 350px) {
            font-size: 1.2em;
          }
    }
`

/**NAVBAR */

const ContainerNav = styled(Container)`
    font-weight: 400;
    background-color: #353b48;
    flex-direction: row;
    list-style-type:none;
    justify-content: center;
    ul {
        background-color: #353b48;
        display:flex;
        list-style-type:none;
        justify-content: space-around;
        width: 35em;
        flex-wrap: wrap;

        
        li {
            padding: 0.8em;
            background-color: #353b48;
            &:hover, active {
               color:#40407a;
            }
        }
    }

`


const ContainerCards = styled(Container)`
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items:center;


`

const ContainerTech = styled(Container) `
    justify-content: space-around;
    margin-top: 3em;
    h1 {
      font-weight: 400;
      font-size: 2.7em;
      text-align: center;
      color: white;
      margin-bottom: 2em;
    }
`

const Card = styled.div`

    max-width: 250px;
    height: 410px;
    border-radius:4%;
    background-color:#f5f6fa;
    color: #2d3436;
    padding: 0.4em;
    word-wrap: break-word;

    display: flex;
    flex-direction: column;

    hr {
      top: 0;
    }
    img {
      margin-left: .8em;
      max-width: 50px;
      border-radius: 50%;
    }
`




export {Container, ContainerHeader, ContainerNav, ContainerCards, ContainerTech, Card}