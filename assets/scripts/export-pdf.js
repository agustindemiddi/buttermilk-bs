// get canvas, printButton and add event listener
const summaryCanvas = document.querySelector('.summary-canvas');
const printButton = document.querySelector('#save-pdf');
printButton.addEventListener('click', generatePDF);

// function to generate pdf with jsPDF and html2canvas
async function generatePDF() {
  // set class to style PDF
  summaryCanvas.classList.add('pdf-style');

  // set canvas size to A4 size
  const canvas = document.createElement('canvas');
  canvas.width = 1190; // A4 width in pixels
  canvas.height = 1684; // A4 height in pixels

  // get canvas context and set background color to white
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // hide printButton
  printButton.style.display = 'none';

  html2canvas(summaryCanvas, {
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
  });

  // restore printButton visibility and canvas style
  printButton.style.display = 'inline';
  summaryCanvas.classList.remove('pdf-style');
}
