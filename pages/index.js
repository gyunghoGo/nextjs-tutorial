import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import { Header, Divider, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  async function getData() {
    try {
      const res = await axios.get(API_URL);
      setList(res.data);
      setIsLoading(true);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>goguard</title>
        <meta
          name="description"
          content="nextjs 연습하는 페이지 입니다."
        ></meta>
      </Head>
      {!isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
