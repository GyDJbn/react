import React, { Component } from 'react'
import { gethouselist, SEVER_IP } from '../../api/api'
import { WingBlank } from 'antd-mobile'
import style from './houseList.module.scss'
export default class HouseList extends Component {
  state = {
    likeData: [],
  }
  async componentDidMount() {
    const { data } = await gethouselist()
    console.log(data)
    this.setState({ likeData: data })
  }
  render() {
    return (
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
    )
  }
}
