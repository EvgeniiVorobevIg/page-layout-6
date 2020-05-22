$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, .block__menu-list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
