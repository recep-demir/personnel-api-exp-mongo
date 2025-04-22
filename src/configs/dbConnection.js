const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURI || 'mongodb://localhost:27017/personnelAPI')
  .then(() => {
    console.log('* DB Connected *');
    console.log('Connected to:', process.env.MONGOURI);
  })
  .catch(() => console.log('* DB Not Connected *'));


module.exports = mongoose;