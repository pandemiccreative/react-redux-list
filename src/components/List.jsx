import React from 'react';
import ListItem from './ListItem.jsx';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import IngredientStore from '../reflux/ingredients-store.jsx';

let List = React.createClass({
  mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
  getInitialState: function(){
    return {
      ingredients: [],
      newText: ''
    };
  },
  componentWillMount: function(){
    Actions.getIngredients();
  },
  onChange: function(event, data){
    this.setState({ingredients: data});
  },
  onClick: function(e){
    if(this.state.newText){
      Actions.postIngredient(this.state.newText);
    }

    this.setState({newText: ''});
  },
  onInputChange: function(e){
    this.setState({newText: e.target.value});
  },
  render: function(){
    let listItems = this.state.ingredients.map(function(item){
      return (
        <ListItem key={item.id} ingredient={item.text} />
      );
    });

    return (
      <div>
        <input
          placeholder="Add Item"
          value={this.state.newText}
          onChange={this.onInputChange}
        />
        <button onClick={this.onClick}>Add Item</button>
        <ul>{listItems}</ul>
      </div>
    );
  }
});

export default List;
