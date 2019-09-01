import React, {Component} from 'react';
import ShoppingBucket from './ShoppingBucket';

class PurchaseWindow extends Component {
    state={
        countShirt:0,
        countShoe:0
    }
    handleChange=(e)=>{
        e.preventDefault();
        console.log(e.target.name);
        switch (e.target.name) {
            case "shirt": { this.setState({
              countShirt: this.state.countShirt + 1
            });
            break;
            }
            case "shoe": {this.setState({
              countShoe: this.state.countShoe + 1
            });
            break;    
            }
            default: console.log("unknown category");
        };
    }
    render() {
        return(
            <div>
                <h2>클릭하여 살 옷을 장바구니에 담자</h2>
                <ul>
                    <li>
                        <button type='button' name='shirt' onClick={this.handleChange}>셔츠</button>  
                    </li>
                    <li>
                        <button type='button' name='shoe'  onClick={this.handleChange}>신발</button>
                    </li>
                </ul>
                <hr/>
                <ShoppingBucket data={this.state}/>
            </div>
        );
    }
}

export default PurchaseWindow;