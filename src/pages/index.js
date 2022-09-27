import NonSSRWrapper from '../components/architecture/NonSSRWrapper';
import Authenticated from '../components/auth/Authenticated';
import Main from '../components/home/Main';

export default function Home() {
  return (
    <NonSSRWrapper>
      <Authenticated>
        <Main />
      </Authenticated>
    </NonSSRWrapper>
  );
}
