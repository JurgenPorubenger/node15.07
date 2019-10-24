const mongoose = require('mongoose');
const  Schema = mongoose.Schema;


const storySchema = Schema({
    title: String,
    author: [{
                type: Schema.Types.ObjectId,
                ref: 'PersonSchema',
                required: true
    }],
    edition: [{
                type: Schema.Types.ObjectId,
                ref: 'EditionSchema',
                required: true
    }]
});


const Story = mongoose.model('StorySchema', storySchema);
module.exports = Story;