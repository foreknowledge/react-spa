import useRouter from '../hooks/useRouter';

const About = () => {
  const { push } = useRouter();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>about</h1>
      <button onClick={() => push('/')}>go main</button>
    </div>
  );
};

export default About;
