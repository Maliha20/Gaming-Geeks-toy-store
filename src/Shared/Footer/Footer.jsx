import React from 'react';
import logo from '../../assets/logogame.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-color text-base-content">
  <div>
    <img className='md:w-56 md:h-40 w-28 h-28' src={logo} alt="" />
    <p className='font-bold text-xl text-yellow-950'>Gaming Geeks <br />
     <small>The ultimate bonding piece</small>        
    <br/>Providing recreational value  since 1997</p>
  </div> 
  <div>
    <span className="footer-title font-bold text-xl text-yellow-950">Games we offer</span> 
    <a className="link link-hover text-xl text-yellow-950">Chess</a> 
    <a className="link link-hover text-xl text-yellow-950">Checkers</a> 
    <a className="link link-hover text-xl text-yellow-950">Monopoly</a> 
    <a className="link link-hover text-xl text-yellow-950">Scrabble</a>
  </div> 
  <div>
    <span className="footer-title font-bold text-xl text-yellow-950">Company</span> 
    <a className="link link-hover text-xl text-yellow-950">Hasbro</a> 
    <a className="link link-hover text-xl text-yellow-950">Mattel</a> 
    <a className="link link-hover text-xl text-yellow-950">Selchow and Righter</a> 
  
  </div> 
  <div>
    <span className="footer-title font-bold text-xl text-yellow-950">Legal</span> 
    <a className="link link-hover text-xl text-yellow-950">Terms of use</a> 
    <a className="link link-hover text-xl text-yellow-950">Privacy policy</a> 
    <a className="link link-hover text-xl text-yellow-950">Cookie policy</a>
  </div>
  <div>
    <span className="footer-title font-bold text-xl text-yellow-950">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="text-yellow-950">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="name@email.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-ghost text-amber-50 bg-yellow-950 absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
      
    </div>
  </div>
</footer>
    );
};

export default Footer;