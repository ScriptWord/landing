import Image from 'next/image';

const customLoader = ({ src }) => {
  return src
}

const NextImage = ({ ...props }) => {
  console.log({...props});
  return <Image {...props} loader={customLoader}/>;
};

export default NextImage;
