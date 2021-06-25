import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this blog']
    },
    date: {
        type: Date,
        required: [true, 'Please provide a date for this blog']
    },
    blogCatchPhrase: {
        type: String,
        required: [true, 'Please provide a catch phrase for this blog']
    },
    text: {
        type: String,
        required: [true, 'Please provide the main text for this blog']
    },
    link: {
        type: String,
        required: [true, 'Please provide the url to the blog']
    },
    twitterLink: {
        type: String
    },
    tech: {
        type: Array
    }
})

export default mongoose.model('blog', blogSchema)