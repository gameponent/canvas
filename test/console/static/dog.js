window.onload = function () {

    var canvas = require('canvas');
    var screen = new canvas.Canvas({
        width: 1000,
        height: 1000,
        viewport: {width: 500, height: 500}
    });
    var layer = new canvas.Layer();
    var el = document.createElement('img');

    screen.root.addLayer({layer: layer});

    el.addEventListener('load', function () {
        var drawable = new canvas.Drawable({el: el});
        var view = new canvas.ImageView({
            image: drawable,
            x: 225,
            y: 169
        });

        layer.addView({view: view});
        screen.draw();

        window.view = view;
        window.screen = screen;
    });

    el.setAttribute('src', 'http://static.tumblr.com/44e684098f0ac7c33a6640c20556b923/jxahzkb/fZ5mod2rw/tumblr_static_dog-logo.jpg');

};