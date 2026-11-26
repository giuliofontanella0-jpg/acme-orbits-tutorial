// Highlight the "# TODO" comments of the student notebook (static page and Live Code).
(function () {
  const TODO = /#\s*TODO/;
  function markStatic() {
    document.querySelectorAll('div.highlight span.c1, div.highlight span.c').forEach(function (s) {
      if (TODO.test(s.textContent)) s.classList.add('todo-mark');
    });
  }
  const overlay = {
    token: function (stream) {
      if (stream.match(/#\s*TODO.*/)) return 'todo';
      while (stream.next() != null && !stream.match(/#\s*TODO/, false)) {}
      return null;
    }
  };
  function markLive() {
    document.querySelectorAll('.thebelab-cell .CodeMirror').forEach(function (el) {
      const cm = el.CodeMirror;
      if (cm && !cm.__todoOverlay) { cm.addOverlay(overlay); cm.__todoOverlay = true; }
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    markStatic();
    new MutationObserver(markLive).observe(document.body, { childList: true, subtree: true });
  });
})();
