import axios from "axios";

export async function fetcher<T>(
    url: string,
  ): Promise<T> {
    try {
      const response = await axios.get(url);
      return response.data as T;
    } catch (e: any) {
      throw e.response || e;
    }
  }