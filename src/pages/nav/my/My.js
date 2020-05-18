import React, { Component } from 'react'
import style from './my.module.scss'
import { WingBlank, List } from 'antd-mobile'
const Item = List.Item;
export default class My extends Component {
  render() {
    return (
      <div className={style['my']}>
        <header>
          <WingBlank>
            <div className={style['top']}>
              <img src={require('../../../assets/images/logo.gif')} alt="" />
              <div>
                <p className={style['name']}>登陆/注册</p>
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
            <Item arrow="horizontal"><i className='iconfont icon-jifen'/> 我的积分</Item>
            <Item arrow="horizontal"><i className='iconfont icon-dingyue'/> 我的订阅</Item>
            <Item arrow="horizontal"><i className='iconfont icon-lianxiren'/> 微聊联系人</Item>
          </List>
          <List renderHeader={() => ''} className="my-list">
            <Item arrow="horizontal"><i className='iconfont icon-jisuanqi'/> 房贷计算器</Item>
            <Item arrow="horizontal"><i className='iconfont icon-huaban'/> 我的房子</Item>
          </List>
          <List renderHeader={() => ''} className="my-list">
            <Item arrow="horizontal"><i className='iconfont icon-jilu'/> 我的看房记录</Item>
            <Item arrow="horizontal"><i className='iconfont icon-icon-me'/> 我的问答</Item>
          </List>
          <List renderHeader={() => ''} className="my-list">
            <Item arrow="horizontal"><i className='iconfont icon-shezhi'/> 设置</Item>
            <Item arrow="horizontal"><i className='iconfont icon-fankui51'/> 意见反馈</Item>
          </List>
        </div>
      </div>
    )
  }
}
