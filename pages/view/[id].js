import { useRouter } from "next/router";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import { Loader } from "semantic-ui-react";
import Head from "next/head";

const Post = ({ item }) => {
  //   const [item, setItem] = useState({});
  //   const [isLoading, setIsLoading] = useState(false);
  //   const router = useRouter();
  //   const { id } = router.query;
  //   const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  //   async function getData() {
  //     try {
  //       const res = await axios.get(API_URL);
  //       setItem(res.data);
  //       setIsLoading(true);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }

  //   useEffect(() => {
  //     if (id && id > 0) {
  //       getData();
  //     }
  //   }, [id]);

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}

/*
Nextjs 모든 페이지는 사전 렌더링을 한다. 이걸 pre-rendering 이라고 한다. 
더 좋은 포퍼먼스와 검색엔진최적화 (SEO)에 유리하다. 

pre-rendering은 두가지 형태가 있다. 
1. 정적 생성
2. Server Sied Rendering (SSR, Dynamic Rendering)

이 둘의 차이점은 언제 html 파일을 생성하는가에 있다.

[정적 생성]
- 프로젝트가 빌드하는 시점에 html 파일들이 생성되고, 모든 요청이 그 파일들을 재사용하게된다. 
한번 파일들을 만들어 놓고, 호출이 들어올때마다 그 파일들을 재사용하는 것이다. 
- 퍼포먼스를 이유로, nest js는 정적 생성을 권고하고, 정적 생성된 페이지들은 CDN에 캐싱됩니다. 
- 유저가 요청하기 전에 미리 페이지를 만들어도 상관없으면 정적 생성을 사용한다. (마케팅페이지, 블로그게시물, 제품 리시트 등등)
- getStaticProps / getStaticPaths

[서버사이드 렌더링]은 매 요청 마다 html을 생성한다. 
- 항상 최신 상태를 유지한다.
- getServerSideProps


*/
