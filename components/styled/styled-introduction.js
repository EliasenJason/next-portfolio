import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    @media (min-aspect-ratio: 2.2/1) {
        height: auto;
    }
    width: 100%;
    padding: 0 2em;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`
export const StyledName = styled.h1`
    font-family: 'Spartan', sans-serif;
    font-size: 2em;
`
export const StyledTitle = styled.h2`
    margin: 0;
    font-size: 1.5em;
`
export const StyledDescription = styled.p`
    text-align: center;
    font-size: 1em;
`
export const StyledPicture = styled.img`
    display: block;
    max-height: 60%;
    margin: auto 2em;
    @media (max-width: 768px) {
        max-height: 40%;
    }
`






