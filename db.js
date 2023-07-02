const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://suryakantkakkar:surya555@to-do.nydqlwi.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
