import { sr } from './slider.js';

document.addEventListener('DOMContentLoaded', function () {
    if (sessionStorage.getItem('splash') !== 'true') {
        sessionStorage.setItem('splash', 'true');
        var svg = new Walkway({
            selector: '.pyramid',
            duration: 5500,
            easing: 'Linear',
        }).draw(function () {
            console.dir('Finished Pyramid')
            sr.reveal('.menu', { delay: 1000, distance: "20px", origin: 'bottom' });
        });
        $(function () {
            setTimeout(function () {
                $('#pre_title').fadeTo(1000, 1);
            }, 4000);
            $(function () {
                setTimeout(function () {
                    $('#load_screen').fadeOut('slow');
                }, 5500);
            });
        });
    }
    else {
        $('#load_screen').hide();
        sr.reveal('.menu', { delay: 500, distance: "20px", origin: 'bottom' });
    }
});

