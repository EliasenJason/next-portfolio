import { useEffect, useState } from "react";
import ContactForm from "./styled/components";
// https://codepen.io/florian-gropp/pen/wLGrqj/



const ContactFormContainer = ({setIsContactOpen, isContactOpen}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (event) => {
        //TODO check if fields are filled out than send data to database
        console.log(`my state is the following: name=${name}, email=${email}, comment=${comment} and you should send this to a server or something`)
    }
    return (
        <ContactForm isContactOpen={isContactOpen}>
            <button onClick={() => setIsContactOpen(false)}> X </button>
            <ContactForm.Header>GET IN TOUCH</ContactForm.Header>
            <ContactForm.InputLabel>Tell me your name</ContactForm.InputLabel>
            <ContactForm.Input type="text" value={name} onChange={(event) => setName(event.target.value)} name></ContactForm.Input>
            <ContactForm.InputLabel>Enter your email</ContactForm.InputLabel>
            <ContactForm.Input type="text" value={email} onChange={(event) => setEmail(event.target.value)} email></ContactForm.Input>
            <ContactForm.InputLabel>Whats up?</ContactForm.InputLabel>
            <ContactForm.Input type="text" value={comment} onChange={(event) => setComment(event.target.value)} comment></ContactForm.Input>
            <ContactForm.Button onClick={() => handleSubmit()}>Submit</ContactForm.Button>
        </ContactForm>
    )
}

export default ContactFormContainer