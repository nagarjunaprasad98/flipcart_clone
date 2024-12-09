import axios from "axios";

export async function getAPI(url, method, requestBody) {
  try {
    const config = {
      method,
      url,
      data: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    throw new Error(error);
  }
}
