import ContactForm from "./styled/components";


// https://codepen.io/florian-gropp/pen/wLGrqj/

const ContactFormContainer = () => {
    return (
        <ContactForm>
            <ContactForm.Header>GET IN TOUCH</ContactForm.Header>
            <ContactForm.InputLabel>Tell me your name</ContactForm.InputLabel>
            <ContactForm.Input></ContactForm.Input>
            <ContactForm.InputLabel>Enter your email</ContactForm.InputLabel>
            <ContactForm.Input></ContactForm.Input>
            <ContactForm.InputLabel>Whats up?</ContactForm.InputLabel>
            <ContactForm.Input></ContactForm.Input>
            <ContactForm.Button>Submit</ContactForm.Button>
        </ContactForm>
    )
}

export default ContactFormContainer