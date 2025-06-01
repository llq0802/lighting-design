import { Col, Form, Progress, Row } from 'antd';
import { LFormItemPassword } from 'lighting-design';
import type { FC } from 'react';
import zxcvbn from 'zxcvbn'; // 密码强度校验
import styles from './Demo1.module.less';

const StrengthMeter: FC = () => {
  const form = Form.useFormInstance();
  const password = Form.useWatch('password', form);

  const watchStrength = (password: string): number => {
    const analysisValue = zxcvbn(password);

    // zxcvbn 是个函数，接收一个参数，参数就是字符串密码。
    // 该函数返回一个对象，其中与密码强度相关的属性有：guesses、guesses_log10、score。
    // 那么这三个属性，我们应该怎么选择呢？
    // ①: guesses 值很大，不利于我们判断。
    // ②: guesses_log10 的值越大越安全，根据测试，值在 12 以上就很安全了。
    // ③: score 的取值范围只有整数 0~4，值越大越安全。
    // 如果业务考虑的场景比较多，建议使用 guesses_log10，这里我们封装使用 score。

    // score得分只有0~4，且只有整数范围并没有小数
    return (analysisValue.score + 1) * 20;
  };

  return (
    <>
      {/* 密码 */}
      <LFormItemPassword label="密码" name="password" required />
      {/* 确认密码 */}
      <LFormItemPassword
        label="确认密码"
        name="confirmPassword"
        rules={[
          { required: true, message: '请输入确认密码' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次密码输入不一致'));
            },
          }),
        ]}
      />
      {/* 显示密码强度 */}
      <div className={styles['process-steps']}>
        <Progress
          percent={password ? watchStrength(password) : 0}
          steps={5}
          strokeColor={['#e74242', '#EFBD47', '#ffa500', '#1bbf1b', '#008000']}
          showInfo={false}
        />
      </div>
      <Row justify="space-around" style={{ marginBottom: 24 }}>
        {['非常弱', '弱', '一般', '强', '非常强'].map((value) => (
          <Col key={value}>{value}</Col>
        ))}
      </Row>
    </>
  );
};

export default StrengthMeter;
