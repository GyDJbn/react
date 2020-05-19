import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import CityJson from '../../json/City.json'
import BScroll from 'better-scroll'
const Item = List.Item
class City extends Component {
  handleClick(v) {
    console.log(v)
    this.cityBS.scrollToElement('#' + v, 800)
  }
  componentDidMount() {
    this.cityBS = new BScroll('#city_1', {
      click: true,
    })
  }
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="cross" />}
          onLeftClick={() => this.props.history.goBack()}
        >
          选择城市
        </NavBar>
        <div id="city_1" style={{ overflowY: 'scroll', height: '92vh' }}>
          <div>
            {CityJson.city.map((obj) => {
              return (
                <List
                  renderHeader={() => obj.title}
                  className={obj.title}
                  key={obj.title}
                  id={obj.title}
                >
                  {obj.lists.map((v) => {
                    return <Item key={v}>{v}</Item>
                  })}
                </List>
              )
            })}
          </div>
        </div>
        <div
          id="FF"
          style={{
            position: 'fixed',
            zIndex: '2',
            top: '10%',
            right: '5%',
            textAlign:'center'
          }}
        >
          <div>
            {CityJson.city.map((v, i) => {
              return (
                <div
                  onClick={() => {
                    this.handleClick(v.title)
                  }}
                  key={i}
                  style={{ marginTop: '2px' }}
                >
                  {v.title}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(City)
