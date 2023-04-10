import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://httpdump.app/dumps/27724aef-88f9-474d-96fd-eca15feeb2f5"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(
      "https://httpdump.app/dumps/27724aef-88f9-474d-96fd-eca15feeb2f5",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
