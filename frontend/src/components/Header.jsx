import React from 'react'
import {Card} from '../style/index.js'
import avatar from '../assets/avatar.jpg'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


export default function Header() {
    return (
            <Card>
                    <img src={avatar} alt="perfil"/>
                    
            
                <h1>RODRIGO BERGAMIN</h1>
            <h3>FULL STACK DEVELOPER</h3>

            <ul>
                <li><a href="https://www.instagram.com/rodrigo_bergamin/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ fontSize: 40, color: '#ED4C67'}}/></a></li>
                <li><a href="https://github.com/rodrigobergamindev/" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ fontSize: 35 , color: '#2f3640'}}/></a></li>
                <li><a href="https://www.linkedin.com/in/rodrigo-bergamin-9b0b111a2/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: 40, color: '#0e76a8'}}/></a></li>
                <li><a href="https://www.facebook.com/rodrigo.bergamin.142/" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{ fontSize: 40, color: '#3b5998'}}/></a></li>
            </ul>

            </Card>
    )
}
