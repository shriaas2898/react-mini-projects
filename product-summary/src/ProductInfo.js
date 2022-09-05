import React from "react";

class ProductInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleQtyChange = this.handleQtyChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    render() {
        const products = ["OnePlus Nord wired earphones", "iQOO Z6 44W", "Samsung Smart TVs", "Stylish Analogue Watches from Fossil"];
        return(
            <>
                <h2>Product Info</h2>
                <label htmlFor="product_name">Product Name
                <select name="product_name" onChange={this.handleNameChange}>
                    {
                        products.map((product, index) => <option key={index.toString()} defaultValue={product.toLowerCase().replace(" ", "_")}>{product}</option>)
                    }
                </select>
                </label>
                <label htmlFor="qty">
                    Product Quantity
                    <input type="number" min="0" value={this.props.qty} onChange={this.handleQtyChange}></input>
                </label>
            </>
        );
    }
    handleQtyChange(e) {
        this.props.onQtyChange(e.target.value);
    }
    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }
}

export default ProductInfo;