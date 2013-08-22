var LayerGroup = require('./layergroup');

function Canvas(options) {
    options = options || {};
    this.id = options.id || 'gameponent-canvas';
    this.width = options.width || 600;
    this.height = options.height || parseInt(this.width * 3.0 / 2, 10);
    this.viewport = options.viewport || {width: this.width, height: this.height};
    this.parent = options.parent || document.body;
    this.el = document.createElement('canvas');
    this.el.setAttribute('id', this.id);
    this.el.setAttribute('style', 'width:' + this.width + 'px;height;' + this.height + 'px');
    this.parent.appendChild(this.el);
    this.ctx = this.el.getContext('2d');
    this.root = options.root || new LayerGroup();
}

Canvas.prototype.draw = function () {
    this.root.draw({canvas: this});
};

module.exports = Canvas;