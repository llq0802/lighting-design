import { LCard } from 'lighting-design';
import React from 'react';

type PropsType = {};

const Index: React.FC<PropsType> = ({}) => {
  const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];

  return (
    <div
      style={{
        height: 500,
      }}
    >
      <LCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint labore, corrupti illum cum vitae aspernatur
        deserunt deleniti? Eum, ab! Quibusdam, at voluptatem? Velit, placeat quis vitae a hic ab! Placeat consequatur
        amet impedit, quae odit fugiat nemo at? Nam aliquid ad in at dolorem eveniet dicta alias aliquam ullam sit
        labore, esse non sunt eos repellat temporibus. Natus, possimus. Ab assumenda delectus beatae eum, distinctio
        dolorum sapiente cum rem, autem quaerat quibusdam eveniet mollitia sit velit, suscipit ducimus ad excepturi
        aperiam amet quia saepe commodi. Ipsa tenetur suscipit nisi? Minus eligendi ad iure, eveniet ullam explicabo
        repellendus molestiae consequatur beatae odit suscipit facilis laudantium, laborum quae. Animi, culpa itaque
        unde excepturi laudantium, eos vel obcaecati accusantium, laboriosam eligendi consequatur! Animi eveniet rerum
        neque quos magnam, deserunt fugiat voluptatem incidunt, maxime, error tempore nisi voluptates. Non saepe omnis
        iusto tempora iure, quos accusamus ea, cumque mollitia ipsum totam magnam libero!
      </LCard>
    </div>
  );
};

export default Index;
