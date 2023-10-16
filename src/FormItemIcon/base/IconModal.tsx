import * as antIcons from '@ant-design/icons';
import Icon, { SearchOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import type { ModalProps, TabsProps } from 'antd';
import { Input, Modal, Tabs } from 'antd';
import classnames from 'classnames';
import LScrollBar from 'lighting-design/ScrollBar';
import type { ChangeEvent, FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { FormItemIconOptions, FormItemIconTabsExtendOptions } from '..';
import './index.less';

interface IconModalProps extends ModalProps {
  onChange: (key: string) => void;
  cancel: (open: boolean) => void;
  itemRender?: (item: string, node: React.ReactNode) => React.ReactNode;
  options?: FormItemIconOptions;
  extendRender?: {
    IconFont: React.ReactNode | any;
    options: FormItemIconTabsExtendOptions[];
  };
  open: boolean;
  modalProps?: ModalProps;
  tabsProps?: TabsProps;
  iconStyle?: React.CSSProperties;
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
  iconStyle,
  open,
  options = {
    Outlined: {
      label: '线性风格',
    },
    Filled: {
      label: '实底风格',
    },
    TwoTone: {
      label: '双色风格',
    },
  },
  extendRender,
  itemRender,
  modalProps,
  tabsProps,
}) => {
  const [activeKey, setActiveKey] = useState(() => 'Outlined');

  const antIconList = useCallback((iconType: IconType) => {
    const list = Object.keys(antIcons).filter(
      (item) =>
        typeof antIcons[item as keyof typeof antIcons] === 'object' &&
        item.includes(iconType),
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
          className={classnames(`${prefixCls}-item-icon`)}
          onClick={() => {
            onChange?.(val);
            if (modalProps?.onCancel) modalProps.onCancel(val as any);
          }}
        >
          {initialIconType.includes(keys) ? (
            <Icon
              component={antIcons[val as keyof typeof antIcons] as any}
              style={iconStyle}
            />
          ) : (
            IconFont && <IconFont type={val} />
          )}
        </li>
      </>
    ),
    [],
  );

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

  const IconListDom = (list: string[], key: IconType | string) => {
    return (
      <>
        <Input
          style={{ marginBlock: 16 }}
          addonAfter={<SearchOutlined />}
          placeholder="在此搜索图标"
          allowClear
          onChange={(e) => {
            onSearch(e, key);
          }}
        />

        <>
          <LScrollBar
            tag="ul"
            maxHeight="50vh"
            className={classnames(`${prefixCls}-icon-list-scroll`)}
          >
            {list.map((val) => {
              if (itemRender) {
                return itemRender(
                  val,
                  <IconItemDom key={val} val={val} keys={key} />,
                );
              }
              return <IconItemDom key={val} val={val} keys={key} />;
            })}
          </LScrollBar>
        </>
      </>
    );
  };

  useEffect(() => {
    const itemList: any = [];
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
    IconFont = extendRender?.IconFont;
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
      className={classnames(`${prefixCls}-icon-modal`, modalProps?.className)}
    >
      <Tabs
        {...tabsProps}
        activeKey={activeKey}
        items={
          items &&
          items.map((item: any) => {
            if (!item.children) {
              return {
                ...item,
                children: IconListDom(
                  iconMode[item.key] ? iconMode[item.key] : item.data || [],
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
