import React from 'react';

class Likes extends React.Component{
    render(){
        var count = Math.floor(Math.random()*10 + 1);
        return(
            <div className="ui" style={{marginTop: '5px'}}>
                <a href="#">{count} likes</a>
            </div>
        );
    }
}
export default Likes;