import React from "react";

class TextSummary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let words = this.props.text == ''? 0: this.props.text.split(" ").length;
        const chars = this.props.text.length;
        let readTime =  words/200;
        readTime = parseInt(readTime/1) + (readTime%10)*0.6;
        return(
            <>
            <p> {words} words and {chars} characters</p>
            <p>{readTime} minutes read</p>
            </>
        );
    }
}

export default TextSummary;