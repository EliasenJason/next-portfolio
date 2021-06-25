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
        type: String
    }



})


        // title: 'this is the title',
        // date: 'this is the date',
        // blogcatchphrase: 'this is the catch',
        // text: 'this is the text',
        // link: 'this is the link to the text',
        // twitterlink: 'this is the link to the tweet',
        // tech: ['react', 'mongo']