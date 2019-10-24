const mongoose = require('mongoose');
const  Schema = mongoose.Schema;


const personSchema = new Schema({
        name: String,
        stories: [{
            type: Schema.Types.ObjectId,
            ref: 'StorySchema',
            required: true
        }],
});



const Person = mongoose.model('PersonSchema', personSchema);
module.exports = Person;