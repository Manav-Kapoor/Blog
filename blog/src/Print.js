import React from 'react';
import Likes from './Likes';
import './Print.css'
class Print extends React.Component{
    delete = (element) =>{
        this.props.removeElement(element.key);
    }
    render(){
        const blogs = this.props.array.map((element)=>{
            return (
                <div key={element.key} className="ui segment blog">
                    {element.text}
                    <br />
                    <i className="trash icon" style={{float: 'right'}} onClick={()=>this.delete(element)}></i>
                    <Likes />
                </div>
            );
        });
        return(
            <div className="blogs" style={{marginTop:'10px'}}>{blogs}</div>
        );
    }
}
export default Print;