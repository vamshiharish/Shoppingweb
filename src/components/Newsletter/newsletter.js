import React, { useState } from 'react';
import './newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="newsletter">
        <div className='news-card1'>
            <div className='news-card2'>
                <h2 style={{color: '#fff'}}>Join Our Newsletter</h2>
                <div className="newsletter-input-container">
                    <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    />
                    <button onClick={handleSubscribe} className="newsletter-button">
                    Subscribe →
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Newsletter;