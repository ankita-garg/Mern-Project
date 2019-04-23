import React, { Component } from 'react';
import women from '../images/women.jpg';
import corrupt from '../images/corrupt.jpg';
import terror from '../images/terror.jpg';

class Campaign extends Component {

render(){
 return(

   <div className='campbgstyle'>

      <div className='camp1'>
         <h2 className='heading'> Women Empowerment </h2>
         <img src={women} alt='This is my imagee....' className='campimg' />
         <p> Empowering women to participate fully in economic life across all sectors is essential to build stronger economies, achieve internationally
         agreed goals for development and sustainability, and improve the quality of life for women, men, families and communities.
         The private sector is a key partner in efforts to advance gender equality and empower women.
         The Women's Empowerment Principles offer practical guidance to business and the private sector on how to empower women in the workplace,
         marketplace and community. Developed through a partnership between UN Women and the </p>
         {/*This is for if user want to read more about this cause so they have to click on this and naviagte to particular pages*/}
         <a href="http://www.unwomen.org/en/digital-library/publications/2011/10/women-s-empowerment-principles-equality-means-business"> Continue Reading.... </a>
      </div>

      <div className='camp1'>
         <h2 className='heading'> Corruption </h2>
         <img src={corrupt} alt='This is my imagee....' className='campimg' />
         <p> Corruption is the misuse of public power (by elected politician or appointed civil servant) for private gain.
         In order to ensure that not ony public corruption but also private corruption between individuals and businesses could be covered by
         the same simple definition: Corruption is the misuse of entrusted power (by heritage, education, marriage, election, appointment or
         whatever else) for private gain. This broader definition covers not only the politician and the public servant, but also the CEO and
         CFO of a company, the notary public, the teamleader at a workplace, the......</p>
         <a href="http://www.corruptie.org/en/corruption/what-is-corruption/"> Continue Reading.....</a>
      </div>

      <div className='camp1'>
         <h2 className='heading'> Terrorism </h2>
         <img src={terror} alt='This is my imagee....' className='campimg' />
         <p> Terrorism is usually understood as the use or threat of violence to further a political cause.
         There is no universally agreed definition of terrorism making it a difficult object to quantify.
         For clarity, the Data Quality & Definitions section below carefully outlines the definition used in constructing the dataset
         presented here and compares it with the legal definition in the UK. While acts of terrorism across the globe have increased markedly in recent decades,
         in most parts of the world it continues to be a relatively rare event and is instead focused in particular countries or regions of instability.....</p>
         <a href="https://ourworldindata.org/terrorism"> Continue Reading..... </a>
      </div>

  </div>

   )
 }
}

export default Campaign;
