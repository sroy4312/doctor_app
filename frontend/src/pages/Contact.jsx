import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]:value
      }
    });
    console.log(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about beta feature? Let
          us know
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form__label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              placeholder="example@gmail.com"
              className="form__input mt-1"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={data.subject}
              placeholder="Let us know how we can help you."
              className="form__input mt-1"
              onChange={handleOnChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className='form__label'>Your message</label>
            <textarea rows={5} type="textbox" id="message" placeholder='Leave a comment...' name="message" value={data.message} className='form__input mt-1' onChange={handleOnChange} />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
