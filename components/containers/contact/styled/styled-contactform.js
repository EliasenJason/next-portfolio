import styled from "styled-components";

export const Container = styled.div`
    right: 0;
    top: 0;
    position: absolute;
    transform: ${({isContactOpen}) => isContactOpen ? 'translateX(000px)' : 'translateX(350px)'};
    height: 500px;
    width: 350px;
    transition: all 800ms cubic-bezier(.8, 0, .33, 1);
    border-radius: 0% 0% 0% 30%;
    border-left: solid 10px #3c00FF;
    border-bottom: solid 10px #3c00FF;
    background-color: #FFF;
`
const lineHeight = '15px';
const lineHeightHover = '25px';
const lineColor = '#3c00FF';
const lineTransition = 'all .2s cubic-bezier(.25,.46,.45,.94)';

export const StyledCloseButton = styled.button`
	display: block;
    position: relative;
    width: 75px;
    height: 60px;
    background: #fff;
    color: ${lineColor};
    border: none;
    margin-right: auto;
    outline: none;
  
  &:hover{
    &:before{
      width: ${lineHeightHover};
    }
    
    &:after{
      width: ${lineHeightHover};
    }
  }
  
  &:before{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 2px;
    border-left: ${lineHeight} solid currentColor;
    border-right: ${lineHeight} solid currentColor;
    transform: translate3d(-50%,-50%,0) rotate(-45deg);
    transition: ${lineTransition};
  }
  
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 2px;
    border-left: ${lineHeight} solid currentColor;
    border-right: ${lineHeight} solid currentColor;
    transform: translate3d(-50%,-50%,0) rotate(45deg);
    transition: ${lineTransition};
  }
`

export const StyledHeader = styled.p`
    
`
export const StyledInputLabel = styled.label`
    text-align: center;;
    width: 75%;
    display: block;
    margin: 0 auto;
`
export const StyledInput = styled.input`
    display: block;
    width: 90%;
    margin: 0 auto;
    border: solid 1px #3c00FF;
    border-radius: .2em;
    height: ${({height}) => height};
    border-radius: ${({height}) => height ? '0% 0% 0% 20%' : null};
    margin-bottom: 1.1em;
`
export const StyledTextArea = styled.textarea`
    display: block;
    width: 90%;
    margin: 0 auto;
    border: solid 1px #3c00FF;
    border-radius: .2em;
    height: ${({height}) => height};
    border-radius: ${({height}) => height ? '0% 0% 0% 20%' : null};
    margin-bottom: 1.1em;
`
export const StyledButton = styled.button`
    background-color: #3c00FF;
    color: #FFF;
    border: none;
    border-radius: 1em;
    padding: .5em 2em;
    display: block;
    margin-left: auto;
    margin-top: 1em;
`

