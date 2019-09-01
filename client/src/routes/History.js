import React, { Component } from 'react';
import axios from 'axios';

class History extends Component {
    state = {
        "information":[]
    }
    
    getHistory = () =>{
        return (
            axios.get('http://localhost:5000/post')
            .then(response => {
                return response.data;
            })
            .catch(error=>{
                return console.log('error');
            })
        );
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        this.getHistory(this.state_change, this.setState)
        .then(data => {
            this.setState({"information": data});
        })
        .catch(error => {
            console.log('error!');
        })
    }


    render() {
        return(
            <div>
                <p>구매내역</p>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">구매내역 불러오기</button>
                    <div>
                    {this.state.information.map( (contact, i) => {
                        return(<HistoryComponent countShirt={contact.countShirt}
                                                countShoe={contact.countShoe}
                                                key={i}
                                                date={contact.date}
                        />)})}
                    </div>
                </form>
            </div>
        );   
    }
}

class HistoryComponent extends React.Component {
    render() {
        return(
        <div>
            <div>{'Date : '+this.props.date}</div>
            <div>
            {'Shirts: '+this.props.countShirt}
            <br/>
            {'Shoes: '+this.props.countShoe}
            </div>
            <br/>
        </div>
        );
    }
}

export default History;