import { useState } from "react";
import ContactForm from "./styled/components";




const ContactFormContainer = ({setIsContactOpen, isContactOpen}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (event) => {
        console.log(`my state is the following: name=${name}, email=${email}, comment=${comment} and you should send this to a database?`)
    }
    return (
        <ContactForm isContactOpen={isContactOpen}>
            <ContactForm.CloseButton onClick={() => setIsContactOpen(false)}></ContactForm.CloseButton>
            <ContactForm.Header>GET IN TOUCH</ContactForm.Header>
            <ContactForm.InputLabel>Name</ContactForm.InputLabel>
            <ContactForm.Input type="text" value={name} onChange={(event) => setName(event.target.value)}></ContactForm.Input>
            <ContactForm.InputLabel>Email</ContactForm.InputLabel>
            <ContactForm.Input type="text" value={email} onChange={(event) => setEmail(event.target.value)}></ContactForm.Input>
            <ContactForm.InputLabel>Whats up?</ContactForm.InputLabel>
            <ContactForm.Input type="text" value={comment} onChange={(event) => setComment(event.target.value)} height={'40%'}></ContactForm.Input>
            <ContactForm.Button onClick={() => handleSubmit()}>Submit</ContactForm.Button>
        </ContactForm>
    )
}

export default ContactFormContainer