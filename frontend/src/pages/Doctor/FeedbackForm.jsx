import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    //later api will be used
  }
  return (
    <form>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                key={index}
                type="button"
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions<span style={{color:'#FF2400'}}>*</span>
        </h3>
        <textarea className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md" rows='5' placeholder="Share your feedback" onChange={() => setReview(e.target.value)} />
      </div>
      <button className="btn" type="submit" onClick={handleSubmit}>Submit feedback</button>
    </form>
  );
};

export default FeedbackForm;
