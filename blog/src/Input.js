import React from 'react';
class Input extends React.Component{
    getInput =  (event) =>{
        event.preventDefault();
        var input = document.getElementById('input').value;
        if(input!== ''){
            this.props.onSubmit(input);
            document.getElementById('input').value = '';
        }
    }
    render(){
        return(
            <form className="ui form">
                <div className="field">
                    <label >Enter Your text</label>
                    <textarea id="input"></textarea>
                    <button className="ui secondary button" onClick={this.getInput} style={{marginTop: '10px'}}>Submit</button>
                </div>
            </form>
        );
    }
}

export default Input;