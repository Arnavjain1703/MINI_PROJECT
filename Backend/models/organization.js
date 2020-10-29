const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    email:
    {
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true

    },
    Org_verified:
    {
        type:Boolean,
        default:false,
    },
    Email_verified:
    {
        type:Boolean,
        default:false

    },
    image:
    {
        type:String,
        required:true
    },    
    location:
    {
        type:String,
        required:true
    },
    address:
    {
        type:String,
        required:true
    },
    location:
    {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('organizations',organizationSchema);