import React, { Component } from 'react';
import images1 from '../images/images1.jpg';

class Home extends Component{

//This is function to handle what is going to happen when we submit our form..
handleSubmit = (e) => {
    e.preventDefault();  //prevent from refreshing
    alert('THANK YOU FOR YOUR RESPONSE...');
}


render(){

return(

<div className='container center'>

    <div className='container center red-text text-accent-3'>
        <h3 className='headingstyle'> WELCOME EVERYONE!! </h3>
        <h5>" This website is just an addition to one of those hundreds of websites made everyday, the only difference you will
        find is that this website will make you develop a connection through the words, phrases, sentences in the content which
        are a part of our thoughts. With due respect and love , Folks !! welcome to not our, but your Blog.</h5>
    </div>

    <div>
        <h1 className='fontsty'> Child Education </h1>
        <img src={images1} alt='This is my imagee....' className='imgstyle' />
    </div>

    <div className= 'contentstyle'>
        <h5>India is a country with more than one billion people, and just one-third of them can read. Rapidly growing size of population,
        shortages of teachers, books, and basic facilities, and insufficient public funds to cover education costs are some of the nation’s
        toughest challenges. This is where Children in India are facing the basic challenges. According to a study, more than 30% of educational
        funds are allocated towards higher education, leaving the primary education in India in sway.

        India is fourth among the top 10 nations with the highest numbers of out-of children in primary level. Furthermore, the rate of school
        drop-outs amongst students is very high. One of the main reasons behind this is poverty. When earning a livelihood and taking care of the
        members of the family becomes a primary matter of concern in one’s life, education stands a little or, very often, no chance of pursuance.
        For the underprivileged people in India, education is perceived as a high-priced luxury, and this negative outlook continues on with every
        new generation.

        A disproportionate number of total out-of-school children in India are girls. What denies equal opportunities of children are serious social
        issues that have arose out of caste, class and gender differences. The practice of child labour in India and resistance to sending girls to
        school in several parts of the country remain as genuine concerns. If the current trend continues, millions of underprivileged children will
        probably never set foot in a classroom. </h5>
    </div>


    {/*This is for getting user point of view...as what user thinks on that topic....*/}
    <div className= 'formgroup'>
        <form  method="POST"  onSubmit={this.handleSubmit}>
            <h3 className='indigo-text text-darken-4'> ADD YOUR OPINIONS....</h3>
            <div>
            <textarea className="form-control" placeholder="Write here..." rows="15" name="comment"></textarea>
            </div>

            <div>
            <input type="text" className="form-control" name="Username:" placeholder="Username" />  <br />
            </div>

            <div>
            <button type="submit" className="btn">Submit</button>
            </div>
        </form>
    </div>

    {/*This is for when user want to read about other causes as well... so then user has to navigate to campaign page for that*/}
    <div className='container center teal-text text-darken-4'>
            <h4 className='learnmore'> Do visit this section and read about other issues too...  <a href="/Campaign"> Learn More....</a> </h4>
            <h3> HAPPY READING!!! </h3>
    </div>

    <div className= 'container grey'>
            <h2> <a href="/About" className="astyle"> About Us </a> </h2>
            <h2> <a href="/contact" className="cstyle"> Contact Us  </a> </h2>
    </div>

</div>

  )
 }
}

export default Home;
