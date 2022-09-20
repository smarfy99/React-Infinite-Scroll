import { useEffect, useState } from "react";
import axios from "axios";

// 페이지 컨텐츠 끝에 도달하면 다음페이지의 내용을 API에 요청(query)해서 페이지 하단에 append
export default function useBookSearch(query: string, pageNum: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNum },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prevBooks) => {
          // previous 책 정보를 현재 책 정보로 map 함수 돌려서 보여줌
          return [...prevBooks, res.data.docs.map((b) => b.title)];
        });
        console.log(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
      });
    return () => cancel();
  }, [query, pageNum]);
  return null;
}
