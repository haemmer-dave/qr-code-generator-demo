import QrCodeWithLogo from 'qrcode-with-logos';

const qrContent = document.getElementById('qr-content');
const canvas = document.getElementById('qr-output');
const submitButton = document.getElementById('generate-button');

submitButton.addEventListener('click', function () {
  let qrCode = new QrCodeWithLogo({
    canvas: canvas,
    content: qrContent.value,
    width: 380,
    image: document.getElementById('image'),
    logo: {
      src: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
    },
  }).toCanvas();
});
