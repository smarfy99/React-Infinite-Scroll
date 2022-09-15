import React from "react";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const mockAPI = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/"
        );
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
        console.log(e);
        setLoading(false);
      }
    };
    getData();
  }, []);
  return [data, loading, error] as [Data[], boolean, Error];
};

export default mockAPI;
