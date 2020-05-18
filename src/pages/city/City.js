import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import CityJson from '../../json/City.json'
import BScroll from 'better-scroll'
const Item = List.Item
class City extends Component {
  componentDidMount() {
    new BScroll(document.getElementById('city_1'), {
      click: true,
    })

    
    new BScroll(document.getElementById('FF'), {
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
        <div id="city_1" style={{ overflowY: 'scroll', height: '95vh' }}>
          <div>
            {CityJson.city.map((v) => {
              return (
                <List
                  renderHeader={() => v.title}
                  className={v.title}
                  key={v.title}
                  id={v.title}
                >
                  {v.lists.map((_) => {
                    return <Item key={_}>{_}</Item>
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
            height: '80vh',
            overflowY: 'scroll',
          }}
        >
          <div>
            {CityJson.city.map((v, i) => {
              return (
                <div key={i} style={{ marginTop: '5px' }}>
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
