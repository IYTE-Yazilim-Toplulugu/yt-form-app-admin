import mongoose, { Schema } from "mongoose";

// Question için ayrı bir Schema tanımlayın
const QuestionSchema = new Schema({
    type: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    isRequired: {
        type: Boolean,
        required: true
    },
    options: {
        type: [String],
        default: [] // Eğer çoktan seçmeli değilse bu array boş olabilir
    }
});

const formSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    applicationsNumber: {
        type: Number,
        default: 0
    },
    questions: {
        type: [QuestionSchema],
        default: [] // Bu, questions array'inin varsayılan olarak boş olacağını belirtir
    },
    isActive: {
        type: Boolean,
        default: false,
        required: true,
    }

}, { timestamps: true });

let FormModel: mongoose.Model<any>
try{
     FormModel = mongoose.model("forms")
}
catch(error){
    FormModel = mongoose.model("forms", formSchema)
}
export default FormModel;