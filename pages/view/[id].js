import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";

const Post = () => {
  const [item, setItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  async function getData() {
    try {
      const res = await axios.get(API_URL);
      setItem(res.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
