const router = require('express').Router();

router.get('/', (req, res) => {
  const imageID = req.query.id;
  const imageWidth = req.query.width;
  const imageHeight = req.query.height;
  const textContent = req.query.text;
  const textSize = req.query.size;
  const topMargin = req.query.top;
  const leftMargin = req.query.left;
  const textStyle = req.query.style;
  const textColor = req.query.color;

  /* eslint-disable */
  console.log(imageID);
  /* eslint-disable */
  console.log(imageWidth);
  /* eslint-disable */
  console.log(imageHeight);
  /* eslint-disable */
  console.log(textContent);
  /* eslint-disable */
  console.log(textSize);
  /* eslint-disable */
  console.log(topMargin);
  /* eslint-disable */
  console.log(leftMargin);
  /* eslint-disable */
  console.log(textStyle);
  /* eslint-disable */
  console.log(textColor);

  res.send('The parameters have been received!');
});

module.exports = router;
