import React from "react";
import ProductInfo from './ProductInfo';
import AddressInfo from './AddressInfo';
import Summary from './Summary';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name:"",
            product_qty: 0,
            address: ""
        };
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);

    }
    render() {
        return(
            <>
             <ProductInfo qty={this.state.product_qty} onQtyChange={this.handleQtyChange} onNameChange={this.handleNameChange}/>
             <AddressInfo onAddressChange={this.handleAddressChange}/>
             <Summary  onQtyChange={this.handleQtyChange}
                       qty={this.state.product_qty}
                       address={this.state.address}
                       name={this.state.product_name}
                        />
            </>
        )
    }
    handleAddressChange(address) {
        this.setState({address: address})
    }
    handleQtyChange(qty) {
        this.setState({product_qty:qty})
    }
    handleNameChange(name) {
        this.setState({product_name:name})
    }
}
export default Checkout;