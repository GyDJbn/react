import React, { Component } from 'react'
import { NavBar, Icon, Carousel, Grid, WingBlank, SearchBar } from 'antd-mobile'
import * as style from './index.module.scss'
import HouseList from '../../../components/houseList/HouseList'
import { withRouter } from 'react-router-dom'
class Index extends Component {
  state = {
    data: ['banner_1.jpg', 'banner_2.jpg', 'banner_3.jpg'],
    imgHeight: 176,
    icons: [
      {
        icon: require('../../../assets/images/index/新房.svg'),
        text: '新房',
      },
      {
        icon: require('../../../assets/images/index/二手房.svg'),
        text: '二手房',
      },
      {
        icon: require('../../../assets/images/index/租房.svg'),
        text: '租房',
      },
      {
        icon: require('../../../assets/images/index/商铺写字楼.svg'),
        text: '商铺写字楼',
      },
      {
        icon: require('../../../assets/images/index/卖房.svg'),
        text: '卖房',
      },
      {
        icon: require('../../../assets/images/index/海外房产.svg'),
        text: '海外房产',
      },
      {
        icon: require('../../../assets/images/index/小区房价.svg'),
        text: '小区房价',
      },
      {
        icon: require('../../../assets/images/index/问答.svg'),
        text: '问答',
      },
    ],
    baike: [
      {
        icon: require('../../../assets/images/index/钱.svg'),
        text: '我要贷款',
      },
      {
        icon: require('../../../assets/images/index/计算器.svg'),
        text: '房贷计算',
      },
      {
        icon: require('../../../assets/images/index/知识.svg'),
        text: '知识',
      },
      {
        icon: require('../../../assets/images/index/扫一扫.svg'),
        text: '扫一扫',
      },
    ],
  }
  seletCity = () => {
    this.props.history.push('/city')
  }

  render() {
    return (
      <div>
        <div className={style['nav']}>
          <NavBar
            style={{ backgroundColor: '#00BC5B' }}
            onLeftClick={this.seletCity}
            leftContent={'重庆市'}
            rightContent={[<Icon key="1" type="ellipsis" />]}
          >
            <SearchBar
              style={{
                height: '70%',
                width: '60vw',
                backgroundColor: '#fff',
                borderRadius: '20px',
              }}
              placeholder="挑好房，上房源"
            />
          </NavBar>
        </div>
        <Carousel autoplay infinite>
          {this.state.data.map((val) => (
            <a
              href="##"
              key={val}
              style={{
                display: 'inline-block',
                width: '100%',
                height: this.state.imgHeight,
              }}
            >
              <img
                src={require('../../../assets/images/index/' + val)}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </a>
          ))}
        </Carousel>
        {/* 宫格 */}
        <div className="content">
          <Grid data={this.state.icons} hasLine={false} />
        </div>
        {/* 百科  */}
        <div className={style['baike']}>
          <WingBlank>
            <h3>
              房产全百科 <span>专业的买房攻略</span>{' '}
            </h3>
          </WingBlank>
          <Grid data={this.state.baike} hasLine={false} />
        </div>
        {/* 猜你喜欢 */}
        <HouseList></HouseList>
      </div>
    )
  }
}
export default withRouter(Index)