// const DataStore = require("nedb");

// const db = new DataStore({
//   autoload: true,
//   filename: "./app/database/dbusers.db"
// });

// var doc = {
//   email: "nathanaelhananta09@gmail.com",
//   username: "ZEROBOT",
// };

// // db.insert(doc)
// db.find({ username: "RakuGans" }, function (er, r) {
//   console.log(er);
// });

//const moment = require("moment-timezone");

//console.log(moment.tz("Asia/Jakarta").format("yy"))


const axios = require("axios");

axios.post("http://localhost:3000/users/read", {
	username: "ZeroChanBot",
	password: "Nathanael2009",
	fullName: "ZeroGansBot",
	email: "nathanaelhananta09@gmail.com",
	apikey: "ZERGANS"
})
.then(data => console.log(data.data))
.catch(er => console.log(er.toJSON()));
