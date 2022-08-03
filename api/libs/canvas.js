const { createCanvas, loadImage } = require('canvas');

function base64ToImage(base64) {
  const image = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
  return image;
}

module.exports = async function generate(imageID, imageWidth, imageHeight) {
  const canvas = createCanvas(parseInt(imageWidth, 10), parseInt(imageHeight, 10));
  const ctx = canvas.getContext('2d');

  const imageURL = `http://localhost:3000${imageID}`;

  return loadImage(imageURL).then((image) => {
    ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
    ctx.fillText('test', 300, 300);

    const dataURL = canvas.toDataURL('image/png');

    return base64ToImage(dataURL);
  });
};
