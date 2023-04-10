// get print button and add event listener
const printButton = document.querySelector('#print-button');
printButton.addEventListener('click', generatePDF);

// function to generate pdf with jsPDF and html2canvas
async function generatePDF() {
  // set canvas size to A4 size
  const canvas = document.createElement('canvas');
  canvas.width = 1190; // A4 width in pixels
  canvas.height = 1684; // A4 height in pixels

  // get canvas context and set background color to white
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // hide button
  printButton.style.display = 'none';

  html2canvas(document.querySelector('#summary-form'), {
    canvas: canvas,
    backgroundColor: null,
  }).then(function (canvas) {
    // convert canvas to image
    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    // create new pdf instance
    const pdf = new jsPDF({ format: 'a4' });

    // add image to pdf
    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);

    // save pdf file
    pdf.save('contact-summary.pdf');

    // restore button visibility
    printButton.style.display = 'inline';
  });
}
