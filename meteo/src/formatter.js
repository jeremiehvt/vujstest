const nval = "const";
let obj = {
  get data() {
    return this.data;
  },
  set data(data) {
    // console.log(data);
    // data.then(function(nval, value) {
    //   nval = value;
    //   console.log(nval);
    // });
  }
};
export default obj;
