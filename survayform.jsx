 
 import React, { useState } from 'react';

const SurveyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !age || !feedback || !rating) {
      setMessage('All fields are required.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setMessage(`Survey submitted successfully! Thank you, ${name}.`);
    
  };

  return (
    <div>
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
        </div>
        <div>
          <label>Age:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Enter your age" 
          />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
            placeholder="Enter your feedback" 
          />
        </div>
        <div>
          <label>Rating:</label>
          <div>
            <label>
              <input 
                type="radio" 
                value="1" 
                checked={rating === '1'} 
                onChange={(e) => setRating(e.target.value)} 
              />
              1
            </label>
            <label>
              <input 
                type="radio" 
                value="2" 
                checked={rating === '2'} 
                onChange={(e) => setRating(e.target.value)} 
              />
              2
            </label>
            <label>
              <input 
                type="radio" 
                value="3" 
                checked={rating === '3'} 
                onChange={(e) => setRating(e.target.value)} 
              />
              3
            </label>
            <label>
              <input 
                type="radio" 
                value="4" 
                checked={rating === '4'} 
                onChange={(e) => setRating(e.target.value)} 
              />
              4
            </label>
            <label>
              <input 
                type="radio" 
                value="5" 
                checked={rating === '5'} 
                onChange={(e) => setRating(e.target.value)} 
              />
              5
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SurveyForm;
