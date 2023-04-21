import * as antIcons from '@ant-design/icons';
import Icon, { SearchOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import type { ModalProps, TabsProps } from 'antd';
import { Input, Modal, Tabs } from 'antd';
import classnames from 'classnames';
import type { ChangeEvent, FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { FormItemIconOptionsProps } from '..';
import './index.less';

interface IconModalProps extends ModalProps {
  onChange: (key: string) => void;
  cancel: (open: boolean) => void;
  options?: FormItemIconOptionsProps;
  open: boolean;
  modalProps?: ModalProps;
  tabsProps?: TabsProps;
}

const defaultIcon: IconModeType<string[]> = {
  Outlined: [],
  Filled: [],
  TwoTone: [],
};

interface IconModeType<T> {
  Outlined: T;
  Filled: T;
  TwoTone: T;
}

type IconType = keyof typeof defaultIcon;

export const prefixCls = 'lightd-form-item-icon';

const Index: FC<IconModalProps> = ({
  onChange,
  cancel,
  options,
  open,
  modalProps,
  tabsProps,
}) => {
  const [activeKey, setActiveKey] = useState('Outlined');

  const antIconList = useCallback((iconType: IconType) => {
    const list = Object.keys(antIcons).filter(
      (item) => typeof antIcons[item] === 'object' && item.includes(iconType),
    );
    defaultIcon[iconType] = list;
    return list;
  }, []);

  const [iconMode, setIconMode] = useSetState<IconModeType<string[]> | any>(
    () => ({
      Outlined: antIconList('Outlined'),
      Filled: antIconList('Filled'),
      TwoTone: antIconList('TwoTone'),
    }),
  );

  const IconListDom = (list: string[], key: IconType) => {
    return (
      <>
        <Input
          style={{ marginBlock: 20 }}
          addonAfter={<SearchOutlined />}
          placeholder={'在此搜索图标'}
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          onChange={(e) => onSearch(e, key)}
        />
        <ul className={classnames(`${prefixCls}-iconList`)}>
          {list.map((item) => (
            <li
              key={item}
              className={classnames(`${prefixCls}-itemIcon`)}
              onClick={() => onChange(item)}
            >
              <Icon component={antIcons[item]} />
            </li>
          ))}
        </ul>
      </>
    );
  };

  const [items, setItems] = useState<TabsProps['items'] | []>(() => [
    {
      label: `线框风格`,
      key: 'Outlined',
    },
    {
      label: `实底风格`,
      key: 'Filled',
    },
    {
      label: `双色风格`,
      key: 'TwoTone',
    },
  ]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>, key: IconType) => {
    const { value } = e.target;
    const filterIcon = defaultIcon[key].filter((item: string) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );

    setIconMode({ [key]: filterIcon });
  };

  useEffect(() => {
    if (options) {
      const item: TabsProps['items'] = [];
      Object.entries(options).forEach(
        ([key, { label, ...itemProps }]: [any, any]) => {
          setIconMode({ [key]: antIconList(key) });
          if (itemProps.children && typeof itemProps.children === 'function') {
            item.push({
              label,
              ...itemProps,
              children: itemProps.children(antIconList(key)),
              key,
            });
          } else {
            item.push({
              label,
              ...itemProps,
              key,
            });
          }
        },
      );
      setItems(item);
    }
  }, []);

  return (
    <Modal
      title="选择图标"
      width={880}
      footer={false}
      {...modalProps}
      onCancel={(e) => {
        cancel(false);
        if (modalProps?.onCancel) modalProps.onCancel(e);
      }}
      className={classnames(`${prefixCls}-iconModal`, modalProps?.className)}
      open={open}
    >
      <Tabs
        {...tabsProps}
        activeKey={activeKey}
        items={
          items &&
          items.map((item) => {
            if (!item.children) {
              return {
                ...item,
                children: IconListDom(iconMode[item.key], item.key as IconType),
              };
            }
            return item;
          })
        }
        onChange={setActiveKey}
      />
    </Modal>
  );
};

export default Index;
