class LightboxStore {
  constructor() {
    this.state = {
      imgId: null,
      currentIndex: null,
      index: false,
      imgs: []
    };
  }

  addImage(url) {
    return this.state.imgs.push(url);
  }

  openImg(index) {
    this.state.index = index;
  }

  close() {
    this.state.index = false;
  }

  next() {
    this.state.currentIndex++;
    if (this.state.currentIndex > this.state.imgs.length - 1) {
      this.state.currentIndex = 0;
    }
  }

  prev() {
    this.state.currentIndex--;
    if (this.state.currentIndex < this.state.imgs.length) {
      this.state.currentIndex = this.state.imgs.length - 1;
    }
  }
}

export default new LightboxStore();
