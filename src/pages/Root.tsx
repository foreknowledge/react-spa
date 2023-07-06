import useRouter from '../hooks/useRouter';

const Root = () => {
  const { push } = useRouter();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>root</h1>
      <button onClick={() => push('/about')}>about</button>
    </div>
  );
};

export default Root;
