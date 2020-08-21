import React from 'react'
import {ContainerHeader} from '../style/index.js'
import avatar from '../assets/avatar.jpg'

export default function Header() {
    return (
        <ContainerHeader>
            <header>
                <img src={avatar} alt="perfil"/>
            </header>

            <h1>Rodrigo Bergamin</h1>
            <h3>FULL STACK DEVELOPER</h3>
        </ContainerHeader>
    )
}
