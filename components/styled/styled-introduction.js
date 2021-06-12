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
`
export const StyledName = styled.h1`
    font-family: 'Spartan', sans-serif;
`
export const StyledTitle = styled.h2`
    margin: 0;
`
export const StyledDescription = styled.p`
    text-align: center;
`
export const StyledPicture = styled.img`
    display: block;
    width: 30%;
    height: auto;
    margin: 0 2em;
    @media (max-width: 768px) {
        width: 50%;
    }
`






