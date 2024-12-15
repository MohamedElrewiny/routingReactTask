import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container w-75">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control my-4"
              placeholder="userName"
            />
            <input
              type="number"
              placeholder="userAge"
              className="form-control my-4"
            />
            <input
              placeholder="userEmail"
              type="email"
              className="form-control my-4"
            />
            <input
              placeholder="userPassword"
              type="password"
              className="form-control my-4"
            />
          </div>
          <button type="submit" className="btn btn-primary my-4">
            Send Message
          </button>
        </form>
        </div>
        
      </div>
    </>
  );
}
