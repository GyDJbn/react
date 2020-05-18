import React, { Component } from 'react'
import { InputItem, Button, Checkbox, Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { valitecode, reg } from '../../api/api'
const AgreeItem = Checkbox.AgreeItem

export default class Regster extends Component {
  state = {
    yzm: undefined,
    pwd: '',
    acc: '',
    agree: false,
    loading: false,
  }
  render() {
    let { yzm, pwd, acc, agree, loading } = this.state
    return (
      <div>
        <InputItem
          onChange={(v) => {
            this.setState({ acc: v })
          }}
          placeholder="请输入手机号"
        />
        <InputItem
          onChange={(v) => {
            this.setState({ pwd: v })
          }}
          placeholder="请输入密码"
          type="password"
        />
        <InputItem
          placeholder="请输入验证码"
          value={yzm}
          extra={
            <Button
              disabled={yzm || loading}
              loading={loading}
              onClick={async () => {
                this.setState({
                  loading: true,
                })
                const { data } = await valitecode()
                this.setState({
                  yzm: data,
                  loading: false,
                })
              }}
              size="small"
            >
              
              获取验证码
            </Button>
          }
        />
        <AgreeItem
          style={{ color: '#D0D3DD' }}
          onChange={(e) => this.setState({ agree: e.target.checked })}
        >
          我已同意
          <span style={{ color: 'rgb(0, 188, 91)' }}>
            《用户服务协议》及《隐私权政策》
          </span>
        </AgreeItem>
        <Button
          style={{
            backgroundColor: 'rgb(0, 188, 91)',
            color: 'rgb(255, 255, 255)',
            margin: '10px 0',
          }}
          onClick={async () => {
            if (!yzm || !agree) {
              Toast.fail('请同意协议和获取验证码', 2)
              return
            }
            const { data } = await reg({pwd, acc}) 
            if (data === 'ok') {
              Toast.success('注册成功', 2)
              this.props.history.push({
                pathname: '/login',
                query: { acc, pwd },
              })
            } else {
              Toast.fail('注册失败', 2)
            }
          }}
        >
          注册
        </Button>
        <Link to="/login" style={{ color: '#00bc5b' }}>
          已有账号
        </Link>
      </div>
    )
  }
}
