

var link = document.querySelector(".popap-feedback-link");
var popap = document.querySelector(".popap-feedback");
var close = document.querySelector(".popap-feedback_btn-close");
var name = document.querySelector("[name=name]");


link.addEventListener("click", function (event) {
    event.preventDefault();
    popap.classList.add("popap-feedback-show");
    name.focus();
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popap.classList.remove("popap-feedback-show");
});


windows.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popap.classList.contains('popap-feedback-show')) {
            popap.classList.remove('popap-feedback-show');
        }
    }
})