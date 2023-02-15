import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      color="#3f51b5"
      wrapperStyle={{ position: 'absolute', left: '150px', top: '26px' }}
    />
  );
};

export default Loader;
