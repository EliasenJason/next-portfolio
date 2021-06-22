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

ContactForm.Input = ({value, onChange}) => {
    return <StyledInput value={value} onChange={onChange}></StyledInput>
}

ContactForm.Button = ({children, onClick}) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default ContactForm