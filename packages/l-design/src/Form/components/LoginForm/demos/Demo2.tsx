import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, Checkbox, Col, Row, Space, Tabs } from 'antd';
import {
  LForm,
  LFormItemCaptcha,
  LFormItemInput,
  LFormItemPassword,
  LLoginForm,
} from 'lighting-design';
import type { CSSProperties } from 'react';
import IdentifyCode from './IdentifyCode';
import loginBg from './loginBg.png';
import loginBoxBg from './loginBoxBg.png';
import style from './style.less';

const iconStyles: CSSProperties = {
  marginInlineStart: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

// 账号密码登录
const AccountDom = () => (
  <LForm
    name="LFormItemInput"
    submitter={{
      showReset: false,
      submitButtonProps: {
        block: true,
      },
      submitText: '登录',
    }}
  >
    <LFormItemInput
      name="name"
      required
      disabledWhiteSpace
      placeholder="请输入用户名"
      inputProps={{
        prefix: <UserOutlined />,
      }}
    />
    <LFormItemPassword
      name="password"
      required
      passwordProps={{
        prefix: <LockOutlined />,
      }}
    />
    <LFormItemInput
      name="code"
      placeholder="请输入验证码"
      required
      contentAfter={<IdentifyCode />}
    />
  </LForm>
);

// 手机号登录
const PhoneDom = () => (
  <LForm
    name="LFormItemInput"
    submitter={{
      showReset: false,
      submitButtonProps: {
        block: true,
      },
      submitText: '登录',
    }}
  >
    <LFormItemInput
      name="phone"
      required
      type="phone"
      disabledWhiteSpace
      placeholder="请输入手机号"
      inputProps={{
        prefix: <UserOutlined />,
      }}
    />
    <LFormItemCaptcha
      type="inline"
      name="code1"
      required
      second={60}
      onGetCaptcha={async () => true}
      placeholder="请输入验证码"
    />
  </LForm>
);

const Demo1 = () => {
  return (
    <div style={{ height: 960 }}>
      <Row
        style={{
          background: `url(${loginBg}) no-repeat`,
          display: 'flex',
          height: '100%',
        }}
      >
        <Col flex="1" className={style.login_col}>
          <div className={style.login_intro}>
            <h1>Lighting Design</h1>
            <div className={style.desc}>
              基于React、TypeScript、Ant Design、UmiJs、ahook等开发的后台模板组件。 lighting-design
              是基于 Ant Design UI
              而开发的业务常用模板组件，提供了更高级别的抽象支持，开箱即用。可以显著的提升制作 CRUD
              页面的效率，更加专注于页面开发。
            </div>
            <div className={style.login_bg}>
              <img src={loginBoxBg} alt="" />
            </div>
          </div>
        </Col>

        <Col flex="520px" style={{ minWidth: 400 }}>
          <LLoginForm
            message={<Alert message="登录异常，请重试！" showIcon closable type="error" />}
            logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            title="Lighting Design"
            subTitle="Lighting Design是基于Ant Design而开发的业务常用模板组件。"
            actions={
              <Space>
                其他登录方式
                <AlipayCircleOutlined style={iconStyles} />
                <TaobaoCircleOutlined style={iconStyles} />
                <WeiboCircleOutlined style={iconStyles} />
              </Space>
            }
            style={{ background: '#fff' }}
          >
            <Tabs
              centered
              items={[
                {
                  label: '账号密码登录',
                  key: 'account',
                  children: <AccountDom />,
                },
                {
                  label: '手机号登录',
                  key: 'phone',
                  children: <PhoneDom />,
                },
              ]}
            />
            <div style={{ margin: '12px 0 24px' }}>
              <Checkbox defaultChecked>记住密码</Checkbox>
              <a style={{ float: 'right' }}>忘记密码</a>
            </div>
          </LLoginForm>
        </Col>
      </Row>
    </div>
  );
};

export default Demo1;
