import React, { Component } from 'react'
import { TabBar, Toast } from 'antd-mobile'
import Index from './index/Index'
import Pat from './pat/Pat'
import My from './my/My'
import Chat from './chat/Chat'

export default class Nav extends Component {
  state = {
    selectedTab: 'index',
  }
  componentDidMount() {
    const acc = localStorage.getItem('acc')
    if (!acc) {
      Toast.fail('请先登陆', 2)
      this.props.history.push('/login')
      return
    }
  }
  render() {
    return (
      <div>
        <div
          style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}
        >
          <TabBar
            tabBarPosition="bottom"
            unselectedTintColor="#949494"
            tintColor="#1afa29"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="首页"
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(' +
                      require('../../assets/images/tabbar/首页.svg') +
                      ') center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(' +
                      require('../../assets/images/tabbar/首页_1.svg') +
                      ') center center /  21px 21px no-repeat',
                  }}
                />
              }
              selected={this.state.selectedTab === 'index'}
              onPress={() => {
                this.setState({
                  selectedTab: 'index',
                })
              }}
              data-seed="logId"
            >
              <Index></Index>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(' +
                      require('../../assets/images/tabbar/微信.svg') +
                      ') center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(' +
                      require('../../assets/images/tabbar/微信_1.svg') +
                      ') center center /  21px 21px no-repeat',
                  }}
                />
              }
              title="微聊"
              key="微聊"
              selected={this.state.selectedTab === 'chat'}
              onPress={() => {
                this.setState({
                  selectedTab: 'chat',
                })
              }}
              data-seed="logId1"
            >
              <Chat></Chat>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(' +
                      require('../../assets/images/tabbar/收藏.svg') +
                      ') center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(' +
                      require('../../assets/images/tabbar/收藏_1.svg') +
                      ') center center /  21px 21px no-repeat',
                  }}
                />
              }
              title="推荐"
              key="推荐"
              selected={this.state.selectedTab === 'pat'}
              onPress={() => {
                this.setState({
                  selectedTab: 'pat',
                })
              }}
            >
              <Pat></Pat>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(' +
                      require('../../assets/images/tabbar/我的.svg') +
                      ') center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(' +
                      require('../../assets/images/tabbar/我的_1.svg') +
                      ') center center /  21px 21px no-repeat',
                  }}
                />
              }
              title="我的"
              key="我的"
              selected={this.state.selectedTab === 'my'}
              onPress={() => {
                this.setState({
                  selectedTab: 'my',
                })
              }}
            >
              <My></My>
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}
