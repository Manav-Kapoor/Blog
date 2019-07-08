import React from 'react';
import Input from './Input';
import Print from './Print';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: []
        };
    }
    onFormSubmit = (text) => {
        let data=[].concat(this.state.arr);
        let key=data.length+1;
        data.push({
            key,
            text,
        });
        this.setState({arr:data});
    }
    removeElement = (key) =>{
        let newArr = this.state.arr.filter((element)=>{
            return element.key!==key;
        })
        this.setState({
            arr: newArr
        });
    }
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <div className="ui segment header">Blog App</div>
                <Input onSubmit = {this.onFormSubmit}/>
                <Print array = {this.state.arr} removeElement={this.removeElement}/>
            </div>
        );
    }
}

export default App;