import React from "react";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const MockAPI = () => {
  const [data, setData] = useState<Data[]>([]); //API로부터 받아온 데이터를 배열에 저장 state
  const [loading, setLoading] = useState<boolean>(false); //로딩중인지를 알기 위한 state
  const [error, setError] = useState<Error | unknown>(); //error 핸들링을 위한 state
  const [paging, setPaging] = useState<Data>({next : undefined});


  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
      }
      setLoading(false);
    };
    getData();
  }, []);
  return [data, loading, error] as [Data[], boolean, Error];
};

export default MockAPI;
