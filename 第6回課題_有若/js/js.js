document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('toggleButton');
    const content = document.getElementById('hiddenContent');
  
    if (btn && content) {
      btn.addEventListener('click', function () {
        content.style.display = 'block';
        btn.style.display = 'none';
      });
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const target = document.querySelector('.ts_people_middlebox_block_b');
  
    button.addEventListener('click', function () {
      // もやもやを消すクラスを追加
      target.classList.add('no-blur');
    });
  });