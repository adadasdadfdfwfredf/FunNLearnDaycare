import React, { useState } from 'react';

const Testimonials = () => {
  // Define testimonial data
  const testimonialsData = [
    {
      author: 'Sudha & Aravind',
      quote:
        "Fun'N Learn Day Care offers the warmth of a home by providing personal and individual attention to each child. They serve fresh home-cooked breakfast and lunch every day and help discipline a child by teaching good manners and habits. They also maintain a schedule with fun-filled activities and nap times which are essential for the growth and development of a young child. We would definitely recommend Fun'N Learn to parents looking for a secure, loving, trust-worthy day care for their child.",
    },
    {
      author: 'Swathi, Software engineer, NCR Corp.',
      quote:
        "It would be our pleasure recommending Fun'N Learn day care as it is a great place where you can leave your kids to learn and have a good time. It has a lot of indoor and outdoor activities and you can see the progressive growth of your child.",
    },
    {
      author: 'Ushasree Kode',
      quote:
        "We had a good time sending our kid Aakash to your daycare. Of course, I recommend it to all my friends and colleagues. Especially liked the food, arts & crafts activities, which are highly educational and playful. Aakash learned lots of his basic stuff here, along with his first little words. Our second child would definitely go there. I would recommend it to anyone who is looking for a home-based daycare that is rich in educational activities.",
    },
    {
      author: 'Purush Viswanathan, VMware Inc',
      quote:
        "We highly recommend Fun'N Learn for their prompt timing. Everything works on time and methodical. My son was so happy there.",
    },
    {
      author: 'Ritu Bhalla',
      quote:
        "After looking at several in-home and center-based childcare centers, when I met Rashmi (at Fun'N Learn), I knew it was the right place for my son. Her home has a great feel about it and is very clean. Her pricing is comparable to other in-home daycares. Fun'N Learn has great programs full of various activities and meals for the kids. The home has a big backyard, where the kids have the opportunity to interact as a group to play and have fun.",
    },
    // Add more testimonials here...
  ];

  // State to handle card expansion
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="testimonial-section">
      <div className="title">
        <div className='wrapperagain'>
          <div className='wrapper-with-bar'>
            <h1 className="titletest-text">Our Valued Testimonials</h1>
            <hr className="service-bar-test" />
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        {testimonialsData.map((testimonial, index) => (
          <div
            className={`testimonial-card ${
              expandedIndex === index ? 'expanded' : ''
            }`}
            key={index}
            onClick={() =>
              setExpandedIndex((prevIndex) =>
                prevIndex === index ? null : index
              )
            }
            
          >
            <div className="content">
              <p className="quote">{testimonial.quote}</p>
              <p className="author">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
