import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeType } from './ButtomRedux.js';
import { removeList } from '../List/ListRedux.js';

class Bottom extends React.Component {
  // 剩余多少未完成事项
  todoCout(list) {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked === false) {
        result++;
      }
    }
    return result;
  }

  render() {
    return (
      <div className="bottom clearfix">
        <span className="todo-cout">{this.todoCout(this.props.list)} 剩余</span>
        <ul className="bottom-list">
          <li><a className={this.props.type === 'ALL' ? 'selected' : ''} onClick={() => this.props.changeType('ALL')}>全部</a></li>
          <li><a className={this.props.type === 'LEFT' ? 'selected' : ''} onClick={() => this.props.changeType('LEFT')}>未完成</a></li>
          <li><a className={this.props.type === 'DONE' ? 'selected' : ''} onClick={() => this.props.changeType('DONE')}>已完成</a></li>
        </ul>
        <button className="clear-cout" onClick={() => this.props.removeItem(this.props.list)}>清除所有已完成事项</button>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    list: state.list,
    type: state.type,
  }),
  dispatch => ({
    changeType: bindActionCreators(changeType, dispatch),
    removeItem: bindActionCreators(removeList, dispatch),
  })
)(Bottom);
