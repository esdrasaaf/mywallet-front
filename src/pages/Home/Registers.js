import styled from 'styled-components'
import Footer from '../../constants/Footer'
import Header from '../../constants/Header'
import axios from 'axios'
import BASE_URL from '../../constants/url'
import { useContext, useEffect, useState} from "react"
import { UserInfoContext } from '../../contexts/userInfo'
import Balance from '../../components/Balance'

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
                            <h2>{r.data}</h2>
                            <div>
                                <h1>{r.description}</h1>
                                <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(r.value)}</span>
                            </div>
                        </ListItem> 
                    )
                }
                <Balance transations={registers}/> 
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
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 80px;
    
    &::-webkit-scrollbar{
        display: none;
    }
    
    p {
        display: flex;
        width: 180px;
        height: 100%;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        justify-content: center;
        align-items: center;
        color: #868686;
    }
`
const ListItem = styled.li`
    padding: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    div {
        justify-content: space-between;
        align-items: center;
        width: 100%;
        display: flex;
        margin-left: 10px;
    }

    h2 { color: gray; }
    h1 { color: #000000; }
    span { color: ${props => props.type === "input" ? "#03AC00" : "#C70000"}; }
`