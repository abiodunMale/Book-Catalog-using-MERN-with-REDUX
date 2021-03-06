const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true,},
    password: { type: String, required: true}
},{
    timestamps: true
})

UserSchema.virtual('books',{
    ref: 'Book',
    foreignField: 'createdBy',
    localField: '_id'
});

UserSchema.set('toJSON', { virtuals: true });

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;