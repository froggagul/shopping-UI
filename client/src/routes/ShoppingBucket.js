import React, {Component} from 'react';
import axios from 'axios';

class ShoppingBucket extends Component {
    static defaultProps={
        data:[]
    }

    
    postData = ()=> {
        var body={
            countShirt: this.props.data.countShirt,
            countShoe: this.props.data.countShoe            
        };
        console.log(body);
        axios.post('http://localhost:5000/post',body)
        .then( ()=> {
            console.log('response');
        })
        .catch( ()=>{
            console.log('error');
        });
    }


    render() {
        return(
            <div>
                <h3>장바구니</h3>
                <ul>
                    <li>
                        shirt: {this.props.data.countShirt}
                    </li>
                    <li>
                        shoe: {this.props.data.countShoe}
                    </li>
                </ul>
                <button onClick={this.postData.bind(this)} >구매하기</button>
            </div>
        );
    }

}

export default ShoppingBucket