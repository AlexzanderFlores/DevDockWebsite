import React, { useState } from 'react';

import BlueBar from '../BlueBar';
import './EmailUs.css';

export default () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [body, setBody] = useState();
  const [response, setResponse] = useState();

  const sets = {
    name: setName,
    email: setEmail,
    website: setWebsite,
    body: setBody
  };

  const onChange = event => {
    const { name, value } = event.target;
    sets[name](value);
  };

  const onSubmit = event => {
    event.preventDefault();

    console.log(name, email, website, body);

    let uri = `https://mpoq1hplcj.execute-api.us-east-1.amazonaws.com/prod/email`;
    uri += `?email=${email}`;
    uri += `&name=${name}`;
    if (website) {
      uri += `&website=${website}`;
    }

    fetch(uri, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
      .then(() => {
        setName('');
        setEmail('');
        setWebsite('');
        setBody('');
        setResponse("Email sent! We'll get back to you within 24 hours.");
      })
      .catch(err => {
        console.error('Error:', err);
        setResponse('Please wait before sending another email.');
      });
  };

  return (
    <div id="email-us">
      <BlueBar />
      <div className="section-title">Email Us</div>

      <p>
        Connect with us via email and we'll get back to you as soon as possible.
        Please use the form or contact us directly at{' '}
        <a href="mailto:contact@devdock.org">contact@devdock.org</a>
      </p>

      <form onSubmit={onSubmit}>
        <input
          type="name"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email Address"
          required
        />
        <input
          name="website"
          value={website}
          onChange={onChange}
          placeholder="Current Website (Optional)"
        />
        <textarea
          name="body"
          value={body}
          onChange={onChange}
          placeholder="How can we help you?"
          required
        />
        <button type="submit">Send email</button>
        {response}
      </form>
    </div>
  );
};
