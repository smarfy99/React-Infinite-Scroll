import React from "react";
import { useEffect, useState, useCallback } from "react";
import axios, { AxiosResponse } from "axios";

export interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PageInfoType {
  page: number;
  totalPage: number;
}

const MockAPI = () => {
  const [data, setData] = useState<Data[]>([]); //API로부터 받아온 데이터를 배열에 저장 state
  const [loading, setLoading] = useState<boolean>(false); //로딩중인지를 알기 위한 state
  const [error, setError] = useState<Error | unknown>(); //error 핸들링을 위한 state
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    page: 1,
    totalPage: 1,
  });
  const [target, setTarget] = useState<Element | null>(null);

  useCallback(() => {
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
  return [data, loading, error, pageInfo, target] as [
    Data[],
    boolean,
    Error,
    PageInfoType,
    Element
  ];
};

export default MockAPI;
