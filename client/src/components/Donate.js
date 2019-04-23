import React from 'react';
import charity from '../images/charity.jpg';
import './donate1.css';

class Donate extends React.Component {

constructor(props) {
    super(props);
    this.state = { username:'',password:'',amount:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState( { [event.target.name]: event.target.value } );
}

handleSubmit(event) {
    alert('THANK YOU FOR DONATING  '+this.state.amount); /*This shows message of what amount is donated by user*/
    event.preventDefault();
}

render() {
    return (
        <div>
            <div className='container center'>
              <h4>You can help a child escape from the bonds of poverty through our donation online. It lets you gift life-changing benefits
              to that child for a low  contribution. Your donation online will ensure that the child receives education, healthcare as well as
              nutritional support through every phase of his/her young life. Help a child discover the joy of learning and join us in our efforts
              to put Every Child in School!</h4>
            </div>

            <div>
              <img src={charity} alt='This is my imagee....' className='imgstyle1' />
            </div>

            <div>
              <form onSubmit={this.handleSubmit} className='donateform'>
                  <label>Username:</label>
                  <input type="text" name="username" value={this.state.value} onChange={this.handleChange} />

                  <label> Password:</label>
                  <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />

                  <label>Amount you want to donate:</label>
                  <input type="number" name="amount" value={this.state.value} onChange={this.handleChange} />

                  <input type="submit" value="Submit" />
              </form>
            </div>
        </div>

    );
  }
}

export default Donate;
