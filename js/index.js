function showForm(e) {
  var form = document.querySelector(".search-form-content");
  e.preventDefault();

  if (form.classList.contains('open')) {
    form.classList.remove('open')
  } else {
    form.classList.add('open')
  }
}

var btn = document.querySelector(".search .search-form-title");
btn.addEventListener('click', showForm);
