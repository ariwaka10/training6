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
    const button = document.getElementById('removeButton3');
    const ts_people_middlebox_block_b = document.getElementById('ts_people_middlebox_block_bBlock');
  
    button.addEventListener('click', function () {
        ts_people_middlebox_block_b.classList.add('no-blur'); // ← ここでぼかしを消す
        button.style.display = 'none'; // ボタン自体も消したい場合
    });
  });