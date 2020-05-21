import React, { Component } from 'react'
import logo from '../../assets/images/logo.gif'
import './login.scss'
import { List, InputItem, Button, Toast, Flex, WingBlank } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { login } from '../../api/api'

export default class Login extends Component {
  state = {
    pwd: '',
    acc: '',
    isClick: false,
  }
  handleLogin = async () => {
    const { pwd, acc } = this.state
    if (this.state.isClick) {
      return
    }
    this.setState({ isClick: true })

    if (!pwd || !acc) {
      Toast.fail('请输入密码或用户名', 2)
      return
    }
    const { data } = await login({ pwd, acc })
    this.setState({ isClick: false })
    if (data === 'ok') {
      Toast.success('登陆成功', 2)
      localStorage.setItem('acc', acc)
      this.props.history.push({
        pathname: '/',
        query: { acc, pwd },
      })
    } else {
      Toast.fail('登陆失败', 2)
    }
  }
  componentDidMount() {
    if (!this.props.location.query) {
      return
    }
    this.setState({
      ...this.props.location.query,
    })
  }
  render() {
    const { pwd, acc } = this.state
    return (
      <div className="box">
        <Flex justify="center" wrap="wrap">
          <img src={logo} alt="" />
        </Flex>
        <WingBlank size="lg">
          <List>
            <InputItem
              clear
              value={acc}
              onChange={(v) => {
                this.setState({
                  acc: v,
                })
              }}
              placeholder="请输入手机号"
            >
              <div
                style={{
                  backgroundImage:
                    'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                  backgroundSize: 'cover',
                  height: '22px',
                  width: '22px',
                }}
              />
            </InputItem>
            <InputItem
              value={pwd}
              clear
              onChange={(v) => {
                this.setState({
                  pwd: v,
                })
              }}
              placeholder="请输入密码"
              type="password"
            >
              <div
                style={{
                  backgroundImage:
                    'url(' + require('../../assets/images/密码.svg') + ')',
                  backgroundSize: 'cover',
                  height: '22px',
                  width: '22px',
                }}
              />
            </InputItem>
          </List>
          <Button className="botton" onClick={this.handleLogin}>
            登陆
          </Button>
          <div className="reg">
            <Link to="/regster">手机快速注册</Link>
            <Link to="/">忘记密码</Link>
          </div>
        </WingBlank>
      </div>
    )
  }
}
