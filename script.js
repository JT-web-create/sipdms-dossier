document.querySelectorAll('.tabs button').forEach(function (b) {
  b.addEventListener('click', function () {
    document.querySelectorAll('.tabs button, .pane').forEach(function (e) { e.classList.remove('on'); });
    b.classList.add('on');
    document.getElementById(b.dataset.t).classList.add('on');
  });
});

var ids = ['g', 'r', 'i', 'c'];
function calc() {
  var v = ids.map(function (k) { return +document.getElementById(k).value; });
  ids.forEach(function (k, n) { document.getElementById(k + 'v').textContent = v[n]; });
  var p = v[0] * (v[1] + v[2] + v[3]);
  var conf = p >= 12 ? 'élevé' : p >= 5 ? 'moyen' : 'faible';
  var ind = v[2] < 2 ? ' · avec une seule source : aucune alerte de tendance (règle d\'indépendance)' : '';
  document.getElementById('out').textContent = 'Priorité de situation = ' + p + ' · confiance ' + conf + ind;
}
ids.forEach(function (k) { document.getElementById(k).addEventListener('input', calc); });
calc();
