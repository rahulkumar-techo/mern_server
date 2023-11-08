import "colors";
import mongoose from "mongoose";

 const db_connections=async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(` \n MongoDB Connected ${connectionInstance.Connection.host}`.bgGreen.bold);

    } catch (error) {
        console.error("ERROR",error);
        process.exit(1);
    }
}

export default db_connections;