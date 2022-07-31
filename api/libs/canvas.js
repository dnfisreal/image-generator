const { createCanvas, loadImage } = require('canvas');

function base64ToImage(base64) {
  const image = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
  return image;
}

module.exports = async function generate(imageID, imageWidth, imageHeight) {
  const canvas = createCanvas(imageWidth, imageHeight);
  const context = canvas.getContext('2d');

  const imageURL = `http://localhost:3000${imageID}`;

  loadImage(imageURL).then((image) => {
    context.drawImage(image, 0, 0, imageWidth, imageHeight);

    const dataURL = canvas.toDataURL('image/jpg');
    return base64ToImage(dataURL);
  });
};
