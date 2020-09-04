import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`

const ContainerNavbar = styled(Container)`
    box-shadow: 0 20px 6px rgba(0,0,0,0.16), 0 20px 20px rgba(0,0,0,0.23);
    background-color: #f5f6fa;
`

const ContainerHeader = styled(Container)`  
    font-size: 4em;
    padding: 1.5em;
    color:#f5f6fa;
    text-align: center;
    flex-direction:column;

    background: linear-gradient(to right, #005AA7 , #FFFDE4); 

    p {
        font-weight: 700;
        font-size: 0.3em;
        margin-top: 2em;
        border: 2px solid white;
        border-radius: 2em;
        padding: 1em;
    }

    h3 {
        margin-top: 0.7em;
        font-weight: 100;
        font-size: 0.58em;
        letter-spacing: 2px;
    }

    h6{
        margin-top: 0.3em;
        font-size: 0.25em;
        font-weight: 500;
        letter-spacing: 2px;

        .spot {
            color: #2196f3;
        }
    }

`


const ContainerPortfolio = styled(Container)`
    width: 100%;
    background-color: #f5f6fa;
    flex-direction: column;
`

export {Container, ContainerNavbar, ContainerHeader, ContainerPortfolio}