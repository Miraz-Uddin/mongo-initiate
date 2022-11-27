import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const client = new MongoClient(process.env.DATABASE_URL);
console.log("Database Conected");

export default client;
