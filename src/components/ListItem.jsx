import React from 'react';

let ListItem = React.createClass({
  render: function(){
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});

export default ListItem;
