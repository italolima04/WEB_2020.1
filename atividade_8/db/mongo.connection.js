var mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

var mongoDB_URI = "mongodb://127.0.0.1:27017/piw";
mongoose.connect(mongoDB_URI, { useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
    console.log(`Mongoose Connected to ${mongoDB_URI}`);
});

db.on("disconnected", () => {
    console.log(`Moongose Disconnected to ${mongoDB_URI}`);
});

db.on("error", (err) => {
    console.log(`Moongose Error ${err}`);
});