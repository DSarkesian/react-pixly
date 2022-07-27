import axios from "axios";
const BASE_URL = "http://localhost:5000/";
class PixlyApi {
  // post new user
  static async uploadNewImage(image) {
    console.log(image, 'IMAGE*****')
    let res = await axios.post(`${BASE_URL}images/upload`, image, {
      headers: { "content-type": "multipart/form-data" }
    });
    console.log(" uploadNewImage ", res);
    //return res;
  }
}

export default PixlyApi;
