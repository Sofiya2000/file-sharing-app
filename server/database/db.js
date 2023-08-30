import mongoose from "mongoose";

const DBConnection = async () => {
    const MONODB_URI = `mongodb+srv://sofiya:test123@file-sharing.lxlzfqk.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI, {useNewUrlParser: true}); //DB_URI, Object
        console.log('database connected');
    }catch(error){
        console.error('Error while connecting with database', error.message);
    }
}

export default DBConnection;