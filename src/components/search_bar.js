 import React, { Component } from 'react';

 //함수형 컴포넌트 : 어떤 정보와 jsx로 분리될 때 주로 이용
/*const SearchBar = () => {
    return <input />;
};*/

//클래스형 컴포넌트 : 스테이트를 파악할 필요가 있을때 사용(데이터가 바뀌고 있거나 이벤트반응 랜더링과정)
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state= { term: 'h' }; /*placeholder와 비슷해보이지만 ''안의값은 실제 이용이 가능한 값*/
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