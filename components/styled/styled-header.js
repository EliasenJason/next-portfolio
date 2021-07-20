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
    font-size: 1em;
    transform: ${({isContactOpen}) => isContactOpen ? 'translateY(-100px)' : 'translateY(0px)'};
    transition: ${({isContactOpen}) => isContactOpen ? 'all 400ms cubic-bezier(.8, 0, .33, 1)' : 'all 1000ms cubic-bezier(.8, 0, .33, 1)'};
    height: 2em;
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