var btnPt = document.getElementById('btn-pt');
var btnEn = document.getElementById('btn-en');

btnPt.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the link from navigating

    // Check the current href and toggle it
    if (btnPt.href.endsWith('index_en.html')) {
      link.href = 'index.html';
    } else {
      link.href = 'index_en.html';
    }
  });