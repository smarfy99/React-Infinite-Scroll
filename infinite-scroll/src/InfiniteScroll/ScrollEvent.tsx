// scroll event 방법으로 무한스크롤 구현하기
import React from "react";
import { useState, useEffect } from "react";
import MockAPI from "../API/MockAPI";

// const InfiniteScroll = () => {
//   const [fetching, setFetching] = useState(false); //추가 데이터를 로드하는지 아닌지를 담기위한 state
//   useEffect(() => {
//     setFetching(true); // 추가 데이터를 로드하는 상태로 전환
//     const fetchMoreData = async () => {
//       //API로부터 받아온 페이징 데이터를 이용해 다음 데이터 로드
//       await axios.get(paging.next).then((response) => {
//         const fetchedData = response.data; //기존 데이터 부분
//         //
//         const mergedData = data.concat(...fetchedData);
//         setData(mergedData);
//       });
//       //추가 데이터 로드 종료
//       setFetching(false);
//     };
//   });
//   return <></>;
// };

// export default InfiniteScroll;
