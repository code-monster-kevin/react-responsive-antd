import React from 'react';

class DropDownLocale extends React.Component {
  localeChange = e => {
    this.props.handleChangeLocale(e.target.value);
  };

  render() {
    return (
      <select
        name="locale"
        onChange={this.localeChange}
        value={this.props.locale}
      >
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    );
  }
}

export default DropDownLocale;
