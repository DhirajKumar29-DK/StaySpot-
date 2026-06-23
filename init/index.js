require('dotenv').config();
const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL; 

main()
  .then(() => {
    console.log("DB Connected")
  })
  .catch((err) => {
    console.log(err); 
  })

async function main(){
    await mongoose.connect(MONGO_URL)
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6a314988ee263f4e4444533e"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized")
}

initDB();