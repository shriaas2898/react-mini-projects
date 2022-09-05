import React from "react";

class AddressInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        this.props.onAddressChange(e.target.value);  
    }  
    render() {
        return(
            <>
                <h2>Address Info</h2>
                <label htmlFor="address">Address
                <textarea name="address" onChange={this.handleChange}></textarea>
                </label>
            </>
        );
    }
}

export default AddressInfo;