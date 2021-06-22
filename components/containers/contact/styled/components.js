import { Container, StyledHeader, StyledInputLabel, StyledInput, StyledButton } from "./styled-contactform"

const ContactForm = ({children}) => {
    return <Container>{children}</Container>
}

ContactForm.Header = () => {
    return <StyledHeader></StyledHeader>
}

ContactForm.InputLabel = ({children}) => {
    return <StyledInputLabel>{children}</StyledInputLabel>
}

ContactForm.Input = () => {
    return <StyledInput></StyledInput>
}

ContactForm.Button = ({children}) => {
    return <StyledButton>{children}</StyledButton>
}

export default ContactForm