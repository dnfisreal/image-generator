const router = require('express').Router();

router.get('/', (req, res) => {
  const imageID = req.query.id;
  const imageWidth = req.query.width;
  const imageHeight = req.query.height;
  /* eslint-disable */
  console.log(imageID);
  /* eslint-disable */
  console.log(imageWidth);
  /* eslint-disable */
  console.log(imageHeight);
  res.send('The parameters have been received!');
});

module.exports = router;
