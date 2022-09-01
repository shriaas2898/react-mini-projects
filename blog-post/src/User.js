import React from "react";
import Blog from "./Blog";

class User extends React.Component {
    render() {
        console.log("items", this.props.items);
        console.log("name", this.props.name);
        return (
            <>
            <h2>{this.props.name}</h2>
            {
             this.props.items.map((post) =>        
             <Blog key={post.id.toString()} title={post.title} content={post.content}/>)
            }
            </>
        );
    }
}

export default User;