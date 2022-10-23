import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { nameState } from '../../store/states';

export default function Login() {
  const [name, setName] = useRecoilState(nameState);

  const router = useRouter();
  function login() {
    axios.post('/api/login').then((res) => {
      if (res.status === 200) {
        router.push('about');
      }
    });
  }
  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field inline>
          <input placeholder="Password" type="password" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
}
