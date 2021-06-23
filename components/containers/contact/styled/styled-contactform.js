import styled from "styled-components";

export const Container = styled.div`
    right: 0;
    position: absolute;
    transform: ${({isContactOpen}) => isContactOpen ? 'translateX(000px)' : 'translateX(300px)'};
    height: 500px;
    width: 15%;
    transition: all 800ms cubic-bezier(.8, 0, .33, 1);
    border-radius: 0% 0% 0% 25%;
    border: solid 1px red;
`
export const StyledHeader = styled.p`

`
export const StyledInputLabel = styled.label`
    display: block;

`
export const StyledInput = styled.input`
    display: block;
`
export const StyledButton = styled.button`
    display: block;
    margin-left: auto;
`

