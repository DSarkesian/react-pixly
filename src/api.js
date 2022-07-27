import axios from "axios";

class PixlyApi{

   // post new user
  static async uploadNewImage(image) {
  let res = await this.request("/images/upload", image, "post");
  console.log(" uploadNewImage ", res);
  return res
}

}

export default PixlyApi
