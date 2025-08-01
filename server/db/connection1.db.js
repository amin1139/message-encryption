import mongoose from "mongoose";




const connectWithMongoose = async() => {
    const MONGO_URL = process.env.MONGO_URL

    try{
        const connectionInstance = await mongoose.connect(MONGO_URL);
    }
    catch(error){
        console.log(error);
    }
    
}

export {connectWithMongoose}