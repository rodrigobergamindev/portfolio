import React from 'react'
import {ContainerCards, ContainerTech} from '../style/index'
import CardTechs from './CardTechs'
import reactjs from '../assets/reactjs.jpg'


export default function Techs() {

    const techs = [
        {img: reactjs, title: '', definition: '', handleClick: ''},
        {img: '', title: '', definition: '', handleClick: ''},
        {img: '', title: '', definition: '', handleClick: ''},
        {img: '', title: '', definition: '', handleClick: ''},
    ]

    return (
        <ContainerTech>
            <h1>TECHNOLOGIES</h1>
            <ContainerCards>
                <CardTechs/>
            </ContainerCards>
        </ContainerTech>
    )
}
