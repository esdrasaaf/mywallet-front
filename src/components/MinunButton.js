import minunImg  from '../assets/images/minun.png'
import styled from 'styled-components'

export default function MinunButton () {
    return (
        <RegistrationButton>
            <img  src={minunImg} alt={"Symbol Minun"}/>
            <p>Nova saída</p>
        </RegistrationButton>
    )
}

//Styled Components
const RegistrationButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
`