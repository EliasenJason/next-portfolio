import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    display:flex;
    justify-content: space-between;
    height: 10vh;
`

export const StyledLogo = styled.img`
    width: 130px;
`

export const StyledNav = styled.ul`
    display: flex;
`

export const StyledNavItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2em;
    padding: 0 2em;
    color: #3c00FF;
    border: solid #3c00FF 3px;
    border-radius: 1.5em;
    list-style-type: none;
    &:hover {
        background-color: #3c00FF;
        color: white;
        cursor: pointer;
    }
`