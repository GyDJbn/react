import React, { Component } from 'react'
import HouseList from '../../../components/houseList/HouseList'
import { WingBlank } from 'antd-mobile'
export default class Pat extends Component {
  render() {
    return (
      <div style= {{backgroundColor: '#fff'}}>
        <WingBlank>
          <HouseList></HouseList>
        </WingBlank>
      </div>
    )
  }
}
