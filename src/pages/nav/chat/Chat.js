import React, { Component } from 'react'
import { Button, Flex } from 'antd-mobile'
import style from './chat.module.scss'

export default class Chat extends Component {
  render() {
    return (
      <Flex justify='center'>
        <div className={style['box']}>
          <div className={style['img']}>
            <img src={require('../../../assets/images/logo.gif')} alt="" />
          </div>
          <div>
            职业顾问： <span>张小妹</span>
          </div>
          <p>专业服务诚信做人诚心做事！</p>
          <Button className={style['WeChat']}>我要聊天</Button>
        </div>
      </Flex>
    )
  }
}
