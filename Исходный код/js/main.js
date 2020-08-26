var cardSwitcher1, cardSwitcher2, cardSwitcher3 = false;
var k1 = $('.card1'), k2 = $('.card2'), k3 = $('.card3');


k1.on('click', function () {
    cardSwitcher1 = !cardSwitcher1;

    if ($('.slider1-card-container1').hasClass('card-disabled')) {
    }else {
        if (cardSwitcher1) {
            k1.addClass('card-select');
            $('.footer1').addClass('footer-select');
        } else {
            k1.removeClass('card-select-hover');
            k1.removeClass('card-select');
            $('.footer1').removeClass('footer-select');
        }
    }
});

$('.buy1').on('click', function () {
    cardSwitcher1 = !cardSwitcher1;

    if ($('.slider1-card-container1').hasClass('card-disabled')) {
    }else {
        if (cardSwitcher1) {
            k1.addClass('card-select');
            $('.footer1').addClass('footer-select');
        } else {
            k1.removeClass('card-select-hover');
            k1.removeClass('card-select');
            $('.footer1').removeClass('footer-select');
        }
    }
});

k1.mouseenter(function () {
    if (k1.hasClass('card-select')) {
        k1.addClass('card-select-hover');
    }
});

k1.mouseleave(function () {
    if (k1.hasClass('card-select')) {
        k1.removeClass('card-select-hover');
    }
});


k2.on('click', function () {
    cardSwitcher2 = !cardSwitcher2;

    if ($('.slider1-card-container2').hasClass('card-disabled')) {
    }else {
        if (cardSwitcher2) {
            k2.addClass('card-select');
            $('.footer2').addClass('footer-select');
        } else {
            k2.removeClass('card-select-hover');
            k2.removeClass('card-select');
            $('.footer2').removeClass('footer-select');
        }
    }
});

$('.buy2').on('click', function () {
    cardSwitcher2 = !cardSwitcher2;

    if ($('.slider1-card-container2').hasClass('card-disabled')) {
    }else {
        if (cardSwitcher2) {
            k2.addClass('card-select');
            $('.footer2').addClass('footer-select');
        } else {
            k2.removeClass('card-select-hover');
            k2.removeClass('card-select');
            $('.footer2').removeClass('footer-select');
        }
    }
});

k2.mouseenter(function () {
    if (k2.hasClass('card-select')) {
        k2.addClass('card-select-hover');
    }
});

k2.mouseleave(function () {
    if (k2.hasClass('card-select')) {
        k2.removeClass('card-select-hover');
    }
});

k3.on('click', function () {
    cardSwitcher3 = !cardSwitcher3;

    if ($('.slider1-card-container3').hasClass('card-disabled')) {
    }else {
        if (cardSwitcher3) {
            k3.addClass('card-select');
            $('.footer3').addClass('footer-select');
        }else{
            k3.removeClass('card-select-hover');
            k3.removeClass('card-select');
            $('.footer3').removeClass('footer-select');
        }
    }
});

$('.buy3').on('click', function () {
    cardSwitcher3 = !cardSwitcher3;

    if ($('.slider1-card-container3').hasClass('card-disabled')) {
    }else {
        if (cardSwitcher3) {
            k3.addClass('card-select');
            $('.footer3').addClass('footer-select');
        }else{
            k3.removeClass('card-select-hover');
            k3.removeClass('card-select');
            $('.footer3').removeClass('footer-select');
        }
    }
});

k3.mouseenter(function () {
    if (k3.hasClass('card-select')) {
        k3.addClass('card-select-hover');
    }
});

k3.mouseleave(function () {
    if (k3.hasClass('card-select')) {
        k3.removeClass('card-select-hover');
    }
});