import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      payment_amount: 0,
      refund_id: 0
    };

    this.paymentHandler = this.paymentHandler.bind(this);
    this.refundHandler = this.refundHandler.bind(this);
  }

    paymentHandler(e) {
    e.preventDefault();

    const { payment_amount } = this.state;
    const self = this;
    const options = {
      key: 'rzp_test_LsHJLJAPefBYZC',
      amount: payment_amount*100,
      name: 'Payments',
      description: 'Donate yourself some time',

      handler(response) {
        console.log(response);
        // const paymentId = response.razorpay_payment_id;
        // const url = 'https://api.razorpay.com/v1/payments/'+paymentId+'/'+payment_amount;
        // // Using my server endpoints to capture the payment
        // fetch(url, {
        //   method: 'get',
        //   headers: {
        //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        //   }
        // })
        // .then(resp =>  resp.json())
        // .then(function (data) {
        //   console.log('Request succeeded with JSON response', data);
        //   self.setState({
        //     refund_id: response.razorpay_payment_id
        //   });
        // })
        // .catch(function (error) {
        //   console.log('Request failed', error);
        // });
      },

      prefill: {
        name: 'Ahmed Sharief',
        email: 'sharief.dekkodigital@gmail.com',
      },
      notes: {
        address: 'Bangalore,India',
      },
      theme: {
        color: '#9D50BB',
      },
    };
    const rzp1 = new Razorpay(options);

    rzp1.open();
  }

  render() {
    const { payment_amount, refund_id } = this.state;
    return (
      <div className="wrapper">
        <div className="payments">
          <div className="payments-title">
            <h1>Test Payments</h1>
          </div>
          <div className="payments-form">
            <form action="#" onSubmit={this.paymentHandler}>
              <p>
                <label htmlFor="pay_amount" className="pay_amount">
                  Amount to be paid
                </label>
              </p>
              <input
                type="number"
                value={payment_amount}
                className="pay_amount"
                placeholder="Amount in INR"
                onChange={e =>
                  this.setState({ payment_amount: e.target.value })
                }
              />
              <p>
                <button type="submit">Pay Now</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
