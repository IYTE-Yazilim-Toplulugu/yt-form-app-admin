import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema({
    formID: {
        type: Schema.ObjectId,
        required: false,
    },
    answers: {
        type: [String],
        required: true,
    }

}, { timestamps: true });

let ApplicationsModel : mongoose.Model<any>
try{
     ApplicationsModel = mongoose.model("applications")
}catch(error){
   ApplicationsModel = mongoose.model("applications", applicationSchema)
}
export default ApplicationsModel;
