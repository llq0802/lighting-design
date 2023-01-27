const url = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const sleep = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url);
    }, time);
  });
};

export const upload = async (file) => {
  console.log('file ', file);
  const ret = await sleep();
  return {
    url: ret,
  };
};
