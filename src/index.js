// import "./style.scss";
// import "./javascripts/table"
import "./index.scss";
import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";
import Modal from "bootstrap/js/dist/modal";


const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');
toggleMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("sidebar-toggled");
});

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

const modalByDelete = document.querySelector("#deleteModal");
modalByDelete.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    console.log("button", button);
    console.log("123");
})