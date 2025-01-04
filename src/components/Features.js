import React from 'react';

const Features = () => {
  return (
    <div className="container my-5" id="features">
      <h2 className="text-center mb-4">Features</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <i className="bi bi-bell display-4 text-primary"></i>
          <h4 className="mt-3">Real-Time Notifications</h4>
          <p>Stay connected with instant notifications delivered to your users.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-cloud display-4 text-primary"></i>
          <h4 className="mt-3">Cloud-Based Service</h4>
          <p>Reliable and scalable push notification services hosted in the cloud.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-shield-lock display-4 text-primary"></i>
          <h4 className="mt-3">Secure Communication</h4>
          <p>Ensure data integrity with top-notch security features.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
