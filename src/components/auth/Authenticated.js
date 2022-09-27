import AuthBox from '../../components/auth/AuthBox';
import { useLocalStorage } from '@mantine/hooks';

export default function Authenticated({ children }) {
  const [accessToken] = useLocalStorage({ key: 'access-token' });

  if (accessToken) {
    return <div>{children}</div>;
  } else {
    return <AuthBox />;
  }
}
