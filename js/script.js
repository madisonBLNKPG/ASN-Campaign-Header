
function init(){

    var frame_1 = document.getElementById('frame-1');
    var b_1_1 = document.getElementById('blue-1-1-container');
    var b_1_2 = document.getElementById('blue-1-2-container');
    var b_1_3 = document.getElementById('blue-1-3-container');
    var b_1_4 = document.getElementById('blue-1-4-container');
    var b_1_5 = document.getElementById('blue-1-5-container');
    var b_1_6 = document.getElementById('blue-1-6-container');

    var frame_2 = document.getElementById('frame-2');
    var b_2_1 = document.getElementById('blue-2-1-container');
    var b_2_2 = document.getElementById('blue-2-2-container');
    var b_2_3 = document.getElementById('blue-2-3-container');
    var b_2_4 = document.getElementById('blue-2-4-container');
    var b_2_5 = document.getElementById('blue-2-5-container');

    TweenMax.to(b_1_1, .2, { delay: 1, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_1_2, .2, { delay: 1.05, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_1_3, .2, { delay: 1.5, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_1_4, .2, { delay: 1.15, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_1_5, .2, { delay: 1.4, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_1_6, .2, { delay: 1.25, ease: Power1.linear, opacity: 1 });
    //TweenMax.to(frame_1, .6, { delay: 8, ease: Power1.linear, top: '-100%' });
    TweenMax.to(frame_1, .6, { delay: 8, ease: Power1.linear, opacity: 0, left: '-5%'});

    //TweenMax.to(frame_2, .6, { delay: 8, ease: Power1.linear, top: '0%' });
    TweenMax.to(frame_2, .6, { delay: 8.2, ease: Power1.linear,  opacity: 1, left: '0%'});
    TweenMax.to(b_2_1, .2, { delay: 9.2, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_2_2, .2, { delay: 9.6, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_2_3, .2, { delay: 9.3, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_2_4, .2, { delay: 9.25, ease: Power1.linear, opacity: 1 });
    TweenMax.to(b_2_5, .2, { delay: 9.4, ease: Power1.linear, opacity: 1 });

}

window.addEventListener('load', init);
