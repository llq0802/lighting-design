import { LHighlightText } from 'lighting-design';

const text = 'Hello world, welcome to the wonderful World of React!';
const keywords = ['world', 'react'];

const demo2 = () => {
  return (
    <div>
      <LHighlightText
        text={text}
        highlightWords={keywords}
        caseSensitive
        highlightTag="span"
        highlightStyle={{
          padding: '0 4px',
          textDecoration: 'underline',
          color: '#209cee',
          fontWeight: 600,
          transition: `all .3s`,
        }}
      />
    </div>
  );
};

export default demo2;
