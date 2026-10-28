// Flips the card between front and back, keeping the toggle buttons and screen-reader label in sync.
(function () {
  var card = document.getElementById('card');
  var bf = document.getElementById('b-front');
  var bb = document.getElementById('b-back');

  function set(back) {
    card.classList.toggle('is-back', back);
    bf.setAttribute('aria-pressed', String(!back));
    bb.setAttribute('aria-pressed', String(back));
    card.setAttribute('aria-label', 'Business card, showing the ' + (back ? 'back' : 'front') + '. Activate to flip.');
  }

  card.addEventListener('click', function () { set(!card.classList.contains('is-back')); });
  bf.addEventListener('click', function () { set(false); });
  bb.addEventListener('click', function () { set(true); });
})();
