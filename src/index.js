import QrCodeWithLogo from 'qrcode-with-logos';

const qrContent = document.getElementById('qr-content');
const canvas = document.getElementById('qr-output');
const submitButton = document.getElementById('generate-button');

submitButton.addEventListener('click', function (event) {
  let qrCode = new QrCodeWithLogo({
    canvas: canvas,
    content: qrContent.value,
    width: 380,
    image: document.getElementById('image'),
    logo: './src/Octocat.jpg',
  })
    .toCanvas()
    .catch(err =>
      console.log(
        'There has been a problem with code generation: ' + err.message
      )
    );
});
