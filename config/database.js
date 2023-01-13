const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on("open", () => console.log(`Connected to MongoDB at ${db.host}:${db.port}`))
db.on("close", () => console.log("conncetion closed"))
db.on("error", (error) => console.log(error))
