import { LHighlightText } from 'lighting-design';

const text = 'Helloworld, welcome to the wonderful world of React!';
const keywords = ['wor', 'world', 'react'];

const demo1 = () => {
  return (
    <div>
      <LHighlightText text={text} highlightWords={keywords} />
    </div>
  );
};

export default demo1;
