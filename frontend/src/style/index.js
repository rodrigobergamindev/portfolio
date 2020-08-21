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
       background-color: #353b48;

   }
   img {
       z-index: 1;
       border-radius: 0.7em;
       border: 3px solid #f5f6fa;
       margin-top: 7em;
       margin-bottom: -8em;
       max-weight: 15em;
       max-width: 15em;
       box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
    padding: 0.8em;
    ul {
        background-color: #353b48;
        display:flex;
        list-style-type:none;
        justify-content: space-around;
        width: 35em;

        
        li {
            background-color: #353b48;
        }
    }

`


export {Container, ContainerHeader, ContainerNav}