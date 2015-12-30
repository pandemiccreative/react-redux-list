import React from 'react';
import ListItem from './ListItem.jsx';
let HTTP = require('../services/httpservice');

let List = React.createClass({
  getInitialState: function(){
    return {
      ingredients: []
    };
  },
  componentWillMount: function(){
    HTTP.get('/ingredients')
    .then(function(data){
      this.setState({ingredients: data});
    }.bind(this));
  },
  render: function(){
    let listItems = this.state.ingredients.map(function(item){
      return (
        <ListItem key={item.id} ingredient={item.text} />
      );
    });

    return (
      <ul>{listItems}</ul>
    );
  }
});

export default List;
