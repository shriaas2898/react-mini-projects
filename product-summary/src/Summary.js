import React from "react";

class Summary extends React.Component{
    constructor(props) {
        super(props);
        this.handleQtyChange = this.handleQtyChange.bind(this);
    }
    render() {
        return(
            <>
                <span>Product Name:</span> {this.props.name}
                <label htmlFor="qty">
                    Quantity:
                    <input type="number" min="0" value={this.props.qty} onChange={this.handleQtyChange}></input>
                </label>
                <span>Address:</span>
                <p>{this.props.address}</p>
                <button>Place Order</button>
            </>
        );
    }
    handleQtyChange(e) {
        this.props.onQtyChange(e.target.value);
    }
}
export default Summary;