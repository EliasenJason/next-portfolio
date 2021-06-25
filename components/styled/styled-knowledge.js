import styled from 'styled-components'

export const Container = styled.div`
    background: #FFF;
    text-align: center;
    z-index: 1;
`
export const StyledHeader = styled.h2`
    color: #3c00FF;
    padding-top: 1em;
    font-size: 3rem;
`
export const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const StyledExplination = styled.p`
    color: #3c00FF;
`

export const StyledGoalContainer = styled.div`
    background: #3c00FF;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2em;
`

export const StyledGoal = styled.div`
    border: solid black .1em;
    display: block;
    width: 15%;
    margin: 1em;
    border-radius: 2em;
    padding: .5em 2em;
    background: #FFF;
    box-shadow: 0 0 .5em #000;
    @media (max-width: 1100px) {
        width: 30%;
    }
    @media (max-width: 500px) {
        width: 50%;
    }
`
export const StyledGoalText = styled.p`
    border-top: solid black .2em;
    padding-top: .5em;
    margin: 0;
`