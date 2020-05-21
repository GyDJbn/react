import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from './my.module.scss'
import { WingBlank, List, Modal } from 'antd-mobile'
const alert = Modal.alert
const Item = List.Item
class My extends Component {
  state = {
    acc: '登陆/注册',
  }
  componentDidMount() {
    const acc = localStorage.getItem('acc')
    this.setState({
      acc,
    })
  }
  render() {
    return (
      <div className={style['my']}>
        <header>
          <WingBlank>
            <div className={style['top']}>
              <img src={require('../../../assets/images/logo.gif')} alt="" />
              <div>
                <p className={style['name']}>{this.state.acc}</p>
                <p>可以于经纪人发起聊天</p>
              </div>
              <i className="iconfont icon-shezhi" />
            </div>
            <div className={style['bottom']}>
              <div>
                <p>0</p>
                <div>
                  <i className="iconfont icon-qianbao"></i>钱包
                </div>
              </div>
              <div>
                <p>0</p>
                <div>
                  <i className="iconfont icon-youhui"></i>优惠
                </div>
              </div>
              <div>
                <p>0</p>
                <div>
                  <i className="iconfont icon-jifen"></i>积分
                </div>
              </div>
            </div>
          </WingBlank>
        </header>
        <div className={style['list']}>
          <List renderHeader={() => ''} className="my-list">
            <Item arrow="horizontal">
              <i className="iconfont icon-jifen" /> 我的积分
            </Item>
            <Item arrow="horizontal">
              <i className="iconfont icon-dingyue" /> 我的订阅
            </Item>
            <Item arrow="horizontal">
              <i className="iconfont icon-lianxiren" /> 微聊联系人
            </Item>
          </List>
          <List renderHeader={() => ''} className="my-list">
            <Item arrow="horizontal">
              <i className="iconfont icon-jisuanqi" /> 房贷计算器
            </Item>
            <Item arrow="horizontal">
              <i className="iconfont icon-huaban" /> 我的房子
            </Item>
          </List>
          <List renderHeader={() => ''} className="my-list">
            <Item arrow="horizontal">
              <i className="iconfont icon-jilu" /> 我的看房记录
            </Item>
            <Item arrow="horizontal">
              <i className="iconfont icon-icon-me" /> 我的问答
            </Item>
          </List>
          <List renderHeader={() => ''} className="my-list">
            <Item arrow="horizontal">
              <i className="iconfont icon-shezhi" /> 设置
            </Item>
            <Item arrow="horizontal">
              <i className="iconfont icon-fankui51" /> 意见反馈
            </Item>
            <Item
              arrow="horizontal"
              onClick={() => {
                alert('警告⚠', '确定退出吗???', [
                  {
                    text: '取消',
                    style: 'default',
                  },
                  {
                    text: '确定',
                    onPress: () => {
                      localStorage.clear()
                      this.props.history.replace('/login')
                    },
                  },
                ])
              }}
            >
              <i className="iconfont icon-shezhi" /> 退出登陆
            </Item>
          </List>
        </div>
      </div>
    )
  }
}
export default withRouter(My)
