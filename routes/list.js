// // const express = require('express');
// // const List = require('../models/List');
// // const router = express.Router();

// // // Create a new list
// // router.post('/', async (req, res) => {
// //   try {
// //     const { name, responseCodes, imageLinks, userId } = req.body;

// //     // Validate request data
// //     if (!name || !responseCodes || !imageLinks || !userId) {
// //       return res.status(400).send('Missing required fields');
// //     }

// //     // Create and save the list
// //     const list = new List({ name, responseCodes, imageLinks, userId });
// //     await list.save();
// //     res.status(201).send('List created');
// //   } catch (error) {
// //     res.status(400).send(`Error creating list: ${error.message}`);
// //   }
// // });

// // module.exports = router;
// const express = require('express');
// const List = require('../models/List'); // Correct path to your List model
// const router = express.Router();

// // Create a new list
// router.post('/', async (req, res) => {
//   const { name, filter, images, userId } = req.body;

//   if (!name || !filter || !images || !userId) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//     const list = new List({ name, filter, images, user: userId });
//     await list.save();
//     res.status(201).json(list);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;



const express = require('express');
const List = require('../models/List'); // Correct path to your List model
const router = express.Router();

// Create a new list
router.post('/', async (req, res) => {
  const { name, filter, images, userId } = req.body;

  if (!name || !filter || !images || !userId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const list = new List({ name, filter, images, user: userId });
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/', async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
