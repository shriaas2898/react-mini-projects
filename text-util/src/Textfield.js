import React from "react";
import TextSummary from "./TextSummary";

class TextUtil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: props.text
        }
    }
    render() {
    return(
    <>  
        <h3>Input text</h3>
        <textarea value={this.state.textValue} onChange={this.changed.bind(this)} name="textValue">
        {this.state.textValue}
        </textarea>
        <button onClick={this.upperCase.bind(this)}> Convert Upper Case</button>
        <button onClick={this.lowerCase.bind(this)}> Convert Lower Case</button>
        <button onClick={this.clear.bind(this)}> Clear text</button>
        <h3>Preview</h3>
        <p>{this.state.textValue}</p>
        <h3>Text Summary</h3>
        <TextSummary text={this.state.textValue}/>
    </>
    )
    }
    changed(e) {
        this.setState({
            textValue: e.target.value
        })
    }
    upperCase(){
        this.setState({
            textValue: this.state.textValue.toUpperCase()
        })
    }
    lowerCase(){
        this.setState({
            textValue: this.state.textValue.toLowerCase()
        })
    }
    clear(){
        this.setState({
            textValue: ""
        })
    }
}

export default TextUtil;