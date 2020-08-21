import React from 'react'
import {ContainerNav} from '../style/index'
import {Home, Build, Code, Info, Call} from '@material-ui/icons'

export default function Navbar() {
    return (
        <ContainerNav>
            <ul>
                <li><Home style={{ fontSize: 38, color:'#f5f6fa', backgroundColor:'transparent'  }}></Home></li>
                <li><Build style={{ fontSize: 38, color:'#f5f6fa', backgroundColor:'transparent'  }}></Build></li>
                <li><Code style={{ fontSize: 38, color:'#f5f6fa', backgroundColor:'transparent'  }}></Code></li>
                <li><Info style={{ fontSize: 38, color:'#f5f6fa', backgroundColor:'transparent'  }}></Info></li>
                <li><Call style={{ fontSize: 38, color:'#f5f6fa', backgroundColor:'transparent'  }}></Call></li>
            </ul>
        </ContainerNav>
    )
}
