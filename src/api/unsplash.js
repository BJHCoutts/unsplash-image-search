import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 26f607af76ce9acac042bf1239f1cd2644b2f6aa1f575a4bbc805bff97dc8924"
  }
});
