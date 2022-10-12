import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        setIsLogin(true); // 로그인
      } else {
        router.push("/login"); // 로그인 실패
      }
    });
  }

  function logout() {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      admin
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  );
}
