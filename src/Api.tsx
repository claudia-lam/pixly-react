import axios from "axios";

const BASE_URL = "http://localhost:5001";

class PixlyApi {
  static async fetchImg(headers, formData) {
    const result = await axios.post(`${BASE_URL}/api/add`, formData, {
      headers: headers,
    });
    return result.data;
  }
}

export default PixlyApi;
