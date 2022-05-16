import React, {Component} from "react";
import Card from "./Card"
class SanPham extends Component {
    render() {
        constructor (props) {
            super(props)
        };
        return (
            <div>
                <image src={this.props.image}></image>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}
export default SanPham;
