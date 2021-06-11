import styled from 'styled-components'

export const StyledCard = styled.div`
    display: flex;
    border: solid black;
    width: 20%;
    margin: 1em;
    background-color: white;
    align-items: center;
    padding: 0 1em;
    @media (max-width: 1000px) {
        width: 40%;
    }
    @media (max-width: 550px) {
        min-width: 225px;
    }
`
export const StyledCardLogo = styled.p`
    margin: 0;
`

export const StyledCardName = styled.p`
    margin: 0 auto;
    font-size: 1.5rem;
`