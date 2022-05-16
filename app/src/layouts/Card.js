import React, { Component } from "react";
import axios from "axios";
class Card extends Component {
    constructor (props) {
        super(props)
    };
    render() {
        return (
            <div className="col">
                <div className="card" style={{width: '16rem', height:'20rem', textAlign: 'center', itemAlign: 'center'}}>
                <img src={this.props.image} className="card-img-top" alt="..."  style={{width: '10rem', height: '10rem', marginLeft: '3rem'}}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">Giá: {this.props.mieuTa} Nơi bán: {this.props.noiBan}</p>
                    <a href={this.props.link} className="btn btn-primary">Thông tin</a>
                </div>
            </div>
            <hr/>
            </div>
        );
    }
}
export default Card;