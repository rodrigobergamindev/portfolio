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
        background-color: #2f3640;

   }
   img {
       z-index: 1;
       border-radius: 50%;
       margin-top: 4em;
       max-weight: 18em;
       max-width: 18em;
       transition: 1s;
       border: 0.5em solid #0984e3;

       @media only screen and (max-width: 600px) {
        max-weight: 14em;
        max-width: 14em;
      }

      @media only screen and (max-width: 350px) {
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

      @media only screen and (max-width: 350px) {
        font-size: 3em;
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
               color:#0984e3;
            }
        }
    }

`


export {Container, ContainerHeader, ContainerNav}