class LightboxStore {
  constructor() {
    this.state = {
      img: null,
      imgId: null,
      currentIndex: null
    };
  }
}

export default new LightboxStore();
