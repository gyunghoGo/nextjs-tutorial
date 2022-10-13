import Head from 'next/head';
import axios from 'axios';
import ItemList from '../src/component/ItemList/ItemList';
import { Header, Divider } from 'semantic-ui-react';

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>goguard</title>
        <meta name="description" content="nextjs 연습하는 페이지 입니다."></meta>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list?.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list?.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
