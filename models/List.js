// const mongoose = require('mongoose');

// const ListSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   responseCodes: { type: [String], required: true },
//   imageLinks: { type: [String], required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// });

// module.exports = mongoose.model('List', ListSchema);
// const mongoose = require('mongoose');

// const ListSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   responseCodes: { type: [String], required: true },
//   imageLinks: { type: [String], required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// });

// module.exports = mongoose.model('List', ListSchema);

const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  filter: { type: String, required: true },
  images: [{ code: String, url: String }],
  user: { type: String, required: true }, // Assuming user is stored as a string
});

module.exports = mongoose.model('List', ListSchema);

