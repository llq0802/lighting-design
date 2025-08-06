export const disposeInitialItems = (list: any[]) => {
  const newList = list?.map((item, index) => {
    const formItems = item.formItems || [];
    const newformItems = [];
    const nameLists = [];
    for (let i = 0; i < formItems.length; i++) {
      const it = formItems[i];
      const hasContent = !!it?.content;
      const name = hasContent ? it.name ?? it.props?.name ?? `${i}` : it.props?.name ?? `${i}`;
      if (Array.isArray(name)) {
        name.forEach((s) => {
          nameLists.push([item.formName, s]);
        });
      }

      const nameList = [item.formName, name];
      nameLists.push(nameList);
      const content = hasContent ? it.content : it;
      const obj = {
        name,
        nameList,
        content,
      };
      newformItems.push(obj);
    }
    return { formName: `${index}`, ...item, formItems: newformItems, nameLists };
  });
  return newList;
};
