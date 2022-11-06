import { Switch } from 'lighting-design';
import type { FC } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Index: FC = () => {
  return (
    <div style={center}>
      <Switch defaultChecked onChange={(e)=>{
        console.log(e);
      }}/>
    </div>
  );
};

export default Index;
