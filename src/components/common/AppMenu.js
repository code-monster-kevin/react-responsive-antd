import React from 'react';
import { Menu, Icon } from 'antd';

class AppMenu extends React.Component {
  render() {
    return (
      <Menu {...this.props}>
        <Menu.Item key="home">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="tvshows">
          <Icon type="star" />TV Shows
        </Menu.Item>
        <Menu.Item key="movies">
          <Icon type="star" />Movies
        </Menu.Item>
        <Menu.Item key="originals">
          <Icon type="star" />Originals
        </Menu.Item>
        <Menu.Item key="recent">
          <Icon type="star" />Recently Added
        </Menu.Item>
        <Menu.Item key="mylist">
          <Icon type="star" />My List
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;
