function Canvas(options) {
    this.id = options.id || 'gameponent-canvas';
    this.width = options.width || 600;
    this.height = options.height || parseInt(this.width * 3.0 / 2, 10);
    this.parent = options.parent || document.body;
    this.el = document.createElement('canvas');
    this.el.setAttribute('id', this.id);
    this.el.setAttribute('style', 'width:' + this.width + 'px;height;' + this.height + 'px');
    this.parent.appendChild(this.el);
    this.ctx = this.el.getContext('2d');
}

module.exports = Canvas;