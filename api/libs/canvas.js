// This file uses node-canvas to draw images on the backend
const { createCanvas, loadImage } = require('canvas');

// Convert base64 to actual image
function base64ToImage(base64) {
  const image = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
  return image;
}

module.exports = async function generate(
  imageID,
  imageWidth,
  imageHeight,
  textContent,
  textSize,
  topMargin,
  leftMargin,
  textStyle,
  textColor
) {
  // Generate the canvas
  const canvas = createCanvas(parseInt(imageWidth, 10), parseInt(imageHeight, 10));
  const ctx = canvas.getContext('2d');

  // Get the template URL
  const imageURL = `${process.env.BLOCKLET_APP_URL}${imageID}`;

  // Calculate the position of the text
  const leftDistance = (imageWidth * leftMargin) / 100;
  const topDistance = (imageHeight * topMargin) / 100;
  const metrics = ctx.measureText(textContent);
  const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  return loadImage(imageURL).then((image) => {
    // Draw the template
    ctx.drawImage(image, 0, 0, imageWidth, imageHeight);

    // Draw the text
    ctx.font = `${textSize}px ${textStyle}`;
    ctx.fillStyle = textColor;
    ctx.fillText(textContent, leftDistance, topDistance + 1.5 * actualHeight);

    const dataURL = canvas.toDataURL('image/png');
    return base64ToImage(dataURL);
  });
};
