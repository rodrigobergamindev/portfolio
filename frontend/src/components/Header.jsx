import React from 'react'
import {Container, ContainerHeader} from '../style/index.js'
import Avatar from './Avatar'
import Button from './Button'
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuBookIcon from '@material-ui/icons/MenuBook';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: '1.02em'
    },
  });
  

export default function Header() {
    const classes = useStyles();
    const urlInsta = 'https://www.instagram.com/lojinha_da_mayumi/'
    const urlCatalogo = 'https://drive.google.com/file/d/1GKUWoxOUisDO0omnQvWoFwqo85ehncq2/view'
    const urlWhatsApp = 'https://api.whatsapp.com/send?phone=5511983478844&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as%20da%20loja'
    return (
        <Container>

            <ContainerHeader>
                <Avatar/>
                <div>

                <h1>LOJINHA DA MAYUMI</h1>
                <p>Loja de roupas e acessórios</p>

                <ul>
                    <li><a href={urlInsta} target="_blank"><Button text={"INSTAGRAM"} icon={<InstagramIcon className={classes.root}></InstagramIcon>}></Button></a></li>
                    <li><a href={urlCatalogo} target="_blank"><Button text={"CATÁLOGO"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlWhatsApp} target="_blank"><Button text={"FAÇA SEU PEDIDO"} icon={<TelegramIcon className={classes.root}></TelegramIcon>}></Button></a></li>
                </ul>

                </div>

                <footer>
                    POR BEATRIZ MAYUMI YASHIKI<br></br>
                    TODOS OS DIREITOS RESERVADOS ®
                </footer>
            </ContainerHeader>

        </Container>
    )
}
