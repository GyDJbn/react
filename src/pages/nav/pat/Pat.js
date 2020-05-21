import React, { Component } from 'react'
import { WingBlank, PullToRefresh } from 'antd-mobile'
import BScroll from 'better-scroll'
import style from './pat.module.scss'
import { gethouselist, SEVER_IP } from '../../../api/api'
export default class Pat extends Component {
  state = {
    likeData: [],
  }
  async getLikeData() {
    const { data } = await gethouselist()
    this.setState({ likeData: data })
  }
  componentDidMount() {
    this.getLikeData()
    this.cityBS = new BScroll('#list', {
      click: true,
    })
  }
  render() {
    return (
      <div id="list" style={{ backgroundColor: '#fff', height: '100%' }}>
        <PullToRefresh
          damping={60}
          onRefresh={() => {
            this.getLikeData()
          }}
        >
          <WingBlank>
            <div className={style['like']}>
              <WingBlank>
                <h3>猜你喜欢</h3>
              </WingBlank>
              {this.state.likeData.map((v, i) => {
                return (
                  <div className={style['item']} key={i}>
                    <img alt="" src={SEVER_IP + v.imgs} />
                    <div className={style['mid']}>
                      <h4>{v.name}</h4>
                      <p className={style['area']}>
                        <span>{v.area}</span>
                        <span>{v.range}</span>
                      </p>
                      <p className={style['type']}>
                        <span>{v.type}</span>
                        <span>{v.point}平</span>
                      </p>
                    </div>
                    <div className={style['price']}>{v.price}/平</div>
                  </div>
                )
              })}
            </div>
          </WingBlank>
        </PullToRefresh>
      </div>
    )
  }
}
