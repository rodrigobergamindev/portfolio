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
       border-radius: 20em;
       margin-top: 7em;
       margin-bottom: -8em;
       max-weight: 15em;
       max-width: 15em;
       transition: 1s;
       border: 9px solid #0984e3;
       transition: all .9s ease-in-out;

       &:hover {
        transform: scale(1.2)
       }
   }

   
   h1{
    margin-top: 2.2em;
    text-align: center;
    font-size: 5em;
    font-weight: 400;

}

    h3 {
        font-weight: 100;
        font-size: 2.5em;
        margin-top: 0.5em;
        text-align: center;
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