import React from 'react'
import {ContainerNav} from '../style/index'
import {Home, Build, Code, Info, Call} from '@material-ui/icons'

export default function Navbar() {
    return (
        <ContainerNav>
            <ul>
                <li><Home style={{ fontSize: 38, backgroundColor:'transparent'  }}></Home></li>
                <li><Build style={{ fontSize: 38, backgroundColor:'transparent'  }}></Build></li>
                <li><Code style={{ fontSize: 38, backgroundColor:'transparent'  }}></Code></li>
                <li><Info style={{ fontSize: 38, backgroundColor:'transparent'  }}></Info></li>
                <li><Call style={{ fontSize: 38, backgroundColor:'transparent'  }}></Call></li>
            </ul>
        </ContainerNav>
    )
}
