import styled from 'styled-components'
import Footer from '../../constants/Footer'
import Header from '../../constants/Header'
import axios from 'axios'
import BASE_URL from '../../constants/url'
import { useContext, useEffect, useState} from "react"
import { UserInfoContext } from '../../contexts/userInfo'

export default function RegistersPage () {
    const [registers, setRegisters] = useState([])
    const { config } = useContext(UserInfoContext)
    const [name, setName] = useState('')

    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/registers`, config)

        promisse.then((res) => {
            console.log(res)
            setName(res.data.user.name)
            setRegisters(res.data.registers)
        })

        promisse.catch((err) => {
            alert(err.response.data)
        })
    }, [config])


    return (
        <Container>
            <Header username={name}/>

            <RegistersList>
                {registers.length === 0 ? 
                    <p>Não há registros de entrada ou saída</p> 
                : 
                    registers.map((r, idx) => 
                        <ListItem key={idx} type={r.type}>
                            <p>{r.data}</p>
                            <h1>{r.description}</h1>
                            <span>{r.value}</span>
                        </ListItem> 
                    )
                }
            </RegistersList>

            <Footer/>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    background-color: #9056BF;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const RegistersList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 5px;

    p {
        width: 180px;
        height: 46px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`
const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    p { color: #C6C6C6; }
    h1 { color: #000000; }
    span { color: ${props => props.type === "input" ? "#03AC00" : "#C70000"}; }
    
`