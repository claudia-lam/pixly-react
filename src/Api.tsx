import axios from "axios";

const BASE_URL = "http://localhost:5001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the Backend API.
 *
 */

class PixlyApi {
  static async fetchImg(headers: object, formData: object) {
    const result = await axios.post(`${BASE_URL}/api/add`, formData, {
      headers: headers,
    });
    return result.data;
  }
}

export default PixlyApi;
