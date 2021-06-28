import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this blog']
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
    },
    date: {
        type: Date,
    }
})

mongoose.models = {}

let Blog = mongoose.model('Blog', BlogSchema)

export default Blog