var btn = document.querySelector(".search .search-form-title");
var form = document.querySelector(".search-form-content");

form.classList.remove('open');

function showForm(e) {
  e.preventDefault();
  if (form.classList.contains('open')) {
    form.classList.remove('open')
  } else {
    form.classList.add('open')
  }
}

if (btn) {
  btn.addEventListener('click', showForm);
}