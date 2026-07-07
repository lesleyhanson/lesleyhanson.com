// Lesley Hanson — Author Site
// Shared behavior: mobile nav, scroll reveals, placeholder form handling.

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('is-open'); });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Newsletter signup — submits to MailerLite without leaving the page.
  document.querySelectorAll('form[data-ml-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var scope = form.parentNode;
      var success = scope.querySelector('.form-success');
      var error = scope.querySelector('.form-error');
      if (!error) {
        error = document.createElement('p');
        error.className = 'form-error';
        form.insertAdjacentElement('afterend', error);
      }
      error.textContent = '';
      var original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Joining…';

      var data = new FormData(form);
      data.append('ml-submit', '1');
      data.append('anticsrf', 'true');

      fetch(form.action, { method: 'POST', body: data })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json && json.success === false) throw new Error('rejected');
          form.reset();
          form.style.display = 'none';
          if (success) success.classList.add('is-visible');
        })
        .catch(function () {
          error.textContent = "Hmm — that didn't go through. Please try again in a moment.";
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = original;
        });
    });
  });

  // Placeholder form handling (contact form isn't wired to an inbox yet).
  // Replace once a real form service (e.g. Formspree) is connected.
  document.querySelectorAll('[data-placeholder-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = form.querySelector('.form-success');
      if (success) success.classList.add('is-visible');
      form.reset();
    });
  });

});
