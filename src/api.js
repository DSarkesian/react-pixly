import axios from "axios";
const BASE_URL = "http://localhost:8000/"
class PixlyApi{

   // post new user
  static async uploadNewImage(image) {
  let res = await axios.post(`${BASE_URL}images/upload`, image, "post");
  console.log(" uploadNewImage ", res);
  return res
}

}

export default PixlyApi
