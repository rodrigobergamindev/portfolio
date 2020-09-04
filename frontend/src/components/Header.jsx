import React from 'react'
import avatar from '../assets/avatar.jpg'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Navbar from './Navbar'
import {ContainerNavbar, Container, ContainerHeader, AreaButtons} from '../style/index.js'
import Avatar from './Avatar'
import Button from './Button'

export default function Header() {
    return (
        <Container>
            <ContainerNavbar>
                <Navbar/>
            </ContainerNavbar>

            <ContainerHeader>
                <Avatar/>

                <h3>RODRIGO BERGAMIN</h3>
                <h6>FULL STACK <span className="spot">WEB DEVELOPER</span></h6>
                <p>HTML/CSS | ReactJS | NodeJS | MongoDB | Java</p>

                <Button text={"VIEW MY WORK"}></Button>
            </ContainerHeader>

        </Container>
    )
}
