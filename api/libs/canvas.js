const { createCanvas, loadImage } = require('canvas');

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
  const canvas = createCanvas(parseInt(imageWidth, 10), parseInt(imageHeight, 10));
  const ctx = canvas.getContext('2d');

  const imageURL = `${process.env.BLOCKLET_APP_URL}${imageID}`;
  const leftDistance = (imageWidth * leftMargin) / 100;
  const topDistance = (imageHeight * topMargin) / 100;

  const metrics = ctx.measureText(textContent);
  const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  return loadImage(imageURL).then((image) => {
    ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
    ctx.font = `${textSize}px ${textStyle}`;
    ctx.fillStyle = textColor;
    ctx.fillText(textContent, leftDistance, topDistance + 1.5 * actualHeight);

    const dataURL = canvas.toDataURL('image/png');

    return base64ToImage(dataURL);
  });
};
