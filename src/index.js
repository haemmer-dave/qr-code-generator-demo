import QrCodeWithLogo from 'qrcode-with-logos';

const qrContent = document.getElementById('qr-content');
const imageUrl = document.getElementById('qr-logo');
const canvas = document.getElementById('qr-output');
const submitButton = document.getElementById('generate-button');
const inputError = document.querySelector('span.error');

qrContent.setCustomValidity('');

submitButton.addEventListener('click', function (event) {
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (qrContent.validity.valueMissing) {
    inputError.textContent = 'Please enter a value!';
    inputError.className = 'error active';
    return;
  } else {
    inputError.textContent = '';
    inputError.className = 'error';
  }

  let qrCode = new QrCodeWithLogo({
    canvas: canvas,
    content: qrContent.value,
    width: 400,
    logo: imageUrl.value,
  })
    .toCanvas()
    .catch(err =>
      console.log(
        'There has been a problem with code generation: ' + err.message
      )
    );
});
