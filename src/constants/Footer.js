import styled from "styled-components"
import MinunButton from '../components/MinunButton'
import PlusButton from '../components/PlusButton'
import { Link } from "react-router-dom"

export default function Footer () {
    return (
        <Content>
            <Link><PlusButton/></Link>
            <Link><MinunButton/></Link>
        </Content>
    )
}

const Content = styled.footer`
    padding: 16px 24px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    a {
        text-decoration: none;
    }
`