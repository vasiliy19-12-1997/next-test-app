import axios from "axios";

export default class ServicePosts {
  static async getPosts() {
    if (typeof JSON) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } else {
      return alert("Error in services");
    }
  }
}
