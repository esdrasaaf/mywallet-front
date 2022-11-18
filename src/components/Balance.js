import styled from "styled-components"

export default function BalanceDiv ({transations}) {
    const numbers = []

    transations.forEach(t => {
        if (t.type === 'input') {
            const number = Number(t.value)
            numbers.push(number)   
        }

        if (t.type === 'output') {
            const number = Number(t.value)
            numbers.push(-number)   
        }
    });

    let totalBalance = numbers.reduce((a, b) => a + b, 0)

    return (
        <Balance isMajor={totalBalance}>
            <h1>SALDO</h1>
            <span>R$ {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalBalance).replace("R$", '')}</span>
        </Balance>
    )
}

// Styled Components
const Balance = styled.div`
    position: fixed;
    z-index: 2;
    bottom: 150px;
    padding: 30px 15px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    background-color: #ffffff;
    border-radius: 5px;

    h1 {
        color: black;
        font-weight: 700;
    }

    span {
        color: ${props => props.isMajor >= 0 ? "#03AC00" : "#C70000"};
    }
`