/* eslint-disable @typescript-eslint/no-use-before-define */
import * as antIcons from '@ant-design/icons';
import Icon, { SearchOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import type { ModalProps, TabsProps } from 'antd';
import { Input, Modal, Tabs } from 'antd';
import classnames from 'classnames';
import type { ChangeEvent, FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type {
  FormItemIconOptionsProps,
  FormItemIconTabsExtendOptions,
} from '..';
import './index.less';

interface IconModalProps extends ModalProps {
  onChange: (key: string) => void;
  cancel: (open: boolean) => void;
  itemRender?: (item: string, node: React.ReactNode) => React.ReactNode;
  options?: FormItemIconOptionsProps;
  extendRender?: {
    IconFont: React.ReactNode | any;
    options: FormItemIconTabsExtendOptions[];
  };
  open: boolean;
  modalProps?: ModalProps;
  tabsProps?: TabsProps;
}

const defaultIcon: IconModeType<string[]> | { [key: string]: string[] } = {
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

const initialIconType = ['Outlined', 'Filled', 'TwoTone'];

export const prefixCls = 'lightd-form-item-icon';

let IconFont: React.ReactNode | any;

const Index: FC<IconModalProps> = ({
  onChange,
  cancel,
  open,
  options,
  extendRender,
  itemRender,
  modalProps,
  tabsProps,
}) => {
  const [activeKey, setActiveKey] = useState(() => 'Outlined');

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

  const IconItemDom = useCallback(
    ({ val, keys }: { val: string; keys: string }) => (
      <>
        <li
          key={val}
          className={classnames(`${prefixCls}-itemIcon`)}
          onClick={() => {
            onChange?.(val);
            if (modalProps?.onCancel) modalProps.onCancel(val as any);
          }}
        >
          {initialIconType.includes(keys) ? (
            <Icon component={antIcons[val] || <></>} />
          ) : (
            IconFont && <IconFont type={val} />
          )}
        </li>
      </>
    ),
    [],
  );

  const IconListDom = (list: string[], key: IconType | string) => {
    return (
      <>
        <Input
          style={{ marginBlock: 20 }}
          addonAfter={<SearchOutlined />}
          placeholder={'在此搜索图标'}
          onChange={(e) => onSearch(e, key)}
        />
        <ul className={classnames(`${prefixCls}-iconList`)}>
          {list.map((val) => {
            if (itemRender) {
              return itemRender(
                val,
                <IconItemDom key={val} val={val} keys={key} />,
              );
            }
            return <IconItemDom key={val} val={val} keys={key} />;
          })}
        </ul>
      </>
    );
  };

  const [items, setItems] = useState<TabsProps['items']>(() => [
    { label: `线框风格`, key: 'Outlined' },
    { label: `实底风格`, key: 'Filled' },
    { label: `双色风格`, key: 'TwoTone' },
  ]);

  const onSearch = (
    e: ChangeEvent<HTMLInputElement>,
    key: IconType | string,
  ) => {
    const { value } = e.target;
    const filterIcon = defaultIcon[key as IconType].filter((item: string) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );

    setIconMode({ [key]: filterIcon });
  };

  useEffect(() => {
    const itemList: any = [];
    IconFont = extendRender?.IconFont;
    if (options) {
      Object.entries(options).forEach(
        ([key, { label, ...itemProps }]: [any, any]) => {
          setIconMode({ [key]: antIconList(key) });
          if (itemProps.children && typeof itemProps.children === 'function') {
            itemList.push({
              label,
              ...itemProps,
              children: itemProps.children(
                antIconList(key),
                IconListDom(iconMode[key], key),
              ),
              key,
            });
          } else {
            itemList.push({ label, ...itemProps, key });
          }
        },
      );
    }
    if (extendRender && extendRender?.options.length > 0) {
      extendRender.options.forEach((item) => {
        if (item.children && typeof item.children === 'function') {
          itemList.push({
            ...item,
            children: item.children(
              item.data,
              IconListDom(item.data, item.key),
            ),
          });
        } else {
          itemList.push({ ...item });
        }
        defaultIcon[item.key as IconType] = item.data;
      });
    }

    if (itemList.length !== 0) setItems(itemList);
  }, []);

  return (
    <Modal
      title="选择图标"
      width={880}
      footer={false}
      open={open}
      {...modalProps}
      onCancel={(e) => {
        cancel(false);
        if (modalProps?.onCancel) modalProps.onCancel(e);
      }}
      className={classnames(`${prefixCls}-iconModal`, modalProps?.className)}
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
                children: IconListDom(
                  iconMode[item.key] ? iconMode[item.key] : item.data,
                  item.key,
                ),
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
