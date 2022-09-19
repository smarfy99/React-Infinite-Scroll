import { useEffect, useState } from "react";
import axios from "axios";

// 페이지 컨텐츠 끝에 도달하면 다음페이지의 내용을 API에 요청(query)해서 페이지 하단에 append
export default function useBookSearch(query : string, pageNum : number) {

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNum },
    }).then((res) => {
      console.log(res.data);
    });
  }, [query, pageNum]);
  return null
}
