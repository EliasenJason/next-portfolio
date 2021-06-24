import { Container, StyledHeader, StyledInputLabel, StyledInput, StyledButton, StyledCloseButton } from "./styled-contactform"

const ContactForm = ({children, isContactOpen}) => {
    return <Container isContactOpen={isContactOpen}>{children}</Container>
}
ContactForm.CloseButton = ({onClick, children}) => {
    return <StyledCloseButton onClick={onClick}>{children}</StyledCloseButton>
}
ContactForm.Header = () => {
    return <StyledHeader></StyledHeader>
}

ContactForm.InputLabel = ({children}) => {
    return <StyledInputLabel>{children}</StyledInputLabel>
}

ContactForm.Input = ({value, onChange, ...restprops}) => {
    return <StyledInput value={value} onChange={onChange} {...restprops}></StyledInput>
}

ContactForm.Button = ({children, onClick}) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default ContactForm