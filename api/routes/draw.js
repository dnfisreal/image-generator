const router = require('express').Router();
const drawImage = require('../libs/canvas');

router.get('/', async (req, res) => {
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
  console.log(topMargin);
  /* eslint-disable */
  console.log(leftMargin);

  const image = await drawImage(imageID, imageWidth, imageHeight, textContent, textSize, textStyle, textColor);
  res.set('content-type', 'image/png');

  res.send(image);
});

module.exports = router;

// http://localhost:3000/draw?id=/statics/templates/education_1.jpg&width=900&height=600&text=oefjewonfn&size=30&top=45&left=50&style=Arial, Helvetica, sans-serif&color=red
