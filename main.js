'use strict';

{

  const btn = document.getElementById('btn');

  const lot = document.getElementById('lot');

  btn.addEventListener('click', function() {
    const reward = ["1$", "10$", "100$"];

    const r = reward[Math.floor(Math.random() * 3)];

    lot.textContent = r;
  });
}