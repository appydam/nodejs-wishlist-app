// module.exports = {
//     mongourl : "mongodb+srv://ArpitDhamija:arpit.737@arpitcluster-crvjn.mongodb.net/test?retryWrites=true&w=majority"
// }

if(process.env.NODE_ENV == "production"){  // it is predefined words and syntax
    module.exports = require("./prod")
}
else{
    module.exports = require("./development")
}