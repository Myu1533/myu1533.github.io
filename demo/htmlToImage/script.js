let htmlToImage = function () {
  function init(target) {
    this.targetDOMTree.target = document.querySelector(target);
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.targetDOMTree.target.offsetWidth;
    this.canvas.height = this.targetDOMTree.target.offsetHeight;
    this.ctx = this.canvas.getContext('2d');
    document.querySelector('body').appendChild(this.canvas);
  }

  function renderToCanvas() {
    let allChildren = this.targetDOMTree.target.children;
    for (let i = 0, l = allChildren.length; i < l; i++) {
      if (!allChildren[i].innerHTML) {
        this.ctx.save();
        this.ctx.fillStyle = window.getComputedStyle(allChildren[i], null).backgroundColor;
        this.ctx.fillRect(allChildren[i].offsetLeft, allChildren[i].offsetTop, allChildren[i].offsetWidth, allChildren[i].offsetHeight)
        this.ctx.restore();
      }
    }
  }
  function saveToImage() {
    return this.canvas.toDataURL();
  }
  return {
    canvas: null,
    targetDOMTree: {},
    cw: 0,
    ch: 0,
    init: init,
    renderToCanvas: renderToCanvas,
    saveToImage: saveToImage
  }
};