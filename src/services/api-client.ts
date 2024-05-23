import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8bc6c05a18414addadd3a47342c404bf",
  },
});
