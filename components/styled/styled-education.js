import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 2em;
    flex-wrap: wrap;
    background-color: #3c00FF;
    justify-content: space-around;
`
export const StyledHeadLine = styled.h3`
    color: white;
    flex-basis: 100%;
    text-align: center;
`

// Card Components
export const StyledCard = styled.div`
    background-color: rgb(70, 70, 70, .8);
    width: 200px;
    height: 200px;
    perspective: 1000px;
    border-radius: 1em;
`

export const StyledCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    &:hover {
        transform: rotateY(180deg);
    }
`
export const StyledCardFront = styled.div`
    background-color: #bbb;
    color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1em;
    background-color: #bbb;
    color: black;
`
export const StyledCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1em;
    background-color: transparent;
    color: white;
    transform: rotateY(180deg);
`
