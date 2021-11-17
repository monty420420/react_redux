 import React, { Component } from 'react';

 //함수형 컴포넌트
/*const SearchBar = () => {
    return <input />;
};*/

//클래스형 컴포넌트
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state= { term: 'hi' }; /*placeholder와 비슷해보이지만 ''안의값은 실제 이용이 가능한 값*/
    }
    
  render() {
      return (
          <div>            
            <input 
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value})} />  
         </div>
      );
    }
}


export default SearchBar;