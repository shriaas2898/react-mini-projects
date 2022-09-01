import React from "react";

class Blog extends React.Component {

    render() {
        return (
        <>
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
        </>);
    }
}


export default Blog;