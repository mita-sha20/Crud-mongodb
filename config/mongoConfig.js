const mongoose = require('mongoose');

let mongoConfig = ()=>{
    mongoose.connect('mongodb+srv://taskxm:J$z5njKez7!J-h5@cluster0.3u2lkfh.mongodb.net/apixm?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Database Connected!'));
}



module.exports = mongoConfig;