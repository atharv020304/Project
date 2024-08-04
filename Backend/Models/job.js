import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    jobType:{
        type:String,
        required: true,
        enum: ["Full-Time","Part-Time"]
    },
    location:{
        type:String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    introduction:{
        type:String,
    },
    responsibilities: {
        type: String,
        required:true,
    },
    qualification:{
        type:String,
        required:true
    }, 
    offers:{
        type:String,
    },
    salary:{
        type:String,
        required: true,
    },
    hiringMultiple:{
        type:String,
        default: "No",
        enum: ["Yes","No"]
    },
    personalWebsite:{
        title: String,
        url: String
    },
    jobDomain:{
        type: String,
        required: true
    },
    //checks new jobs posted and letter email send to it or not
    newsLettersSend:{
        type: Boolean,
        default: false
    },
    jobPostedOn:{
        type: Date,
        default: Date.now
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

export const Job = mongoose.model("Job",jobSchema);

