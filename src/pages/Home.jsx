import Orangebar from "../components/orangebar";
import Redbar from "../components/redbar";
import calling from "../images/calling.png";
import Bluebar from "../components/bluebar";


export default function Home() {
  return( 
    <>
      <div className="wrapper121">
        <h1 className= 'title'>Welcome to Fun N Learn Daycare</h1>
        <section id="home" className="home-section">
          <h2>Cultivating Happy Hearts and Curious Minds</h2>
          <hr className="horizontal-bar" />
          
          <div className="info-section">
            <h4>Licensed Large Family Day Care</h4>
            <p>Quality daycare services provided by licensed caregivers.</p>
          </div>
          
          <div className="info-section">
            <h4>CPR, Finger Printed & Background Cleared Staff</h4>
            <p>Trained staff with CPR certification and cleared background checks.</p>
          </div>
          
          <div className="info-section">
            <h4>Clean, Open and Hygienic Environment</h4>
            <p>We maintain a clean and hygienic environment for the well-being of your children.</p>
          </div>
          
          <div className="info-section">
            <h4>Family-Friendly and Secure Environment</h4>
            <p>We create a safe and welcoming atmosphere for your family.</p>
          </div>
          
          <div className="info-section">
            <h4>Indoor & Outdoor Age-Appropriate Toys & Activities</h4>
            <p>We provide a variety of engaging toys and activities suitable for different age groups.</p>
          </div>
          
          <div className="info-section">
            <h4>Homemade Vegetarian Lunch and Snacks</h4>
            <p>We offer nutritious vegetarian meals and snacks made with love.</p>
          </div>
          
          <div className="info-section">
            <h4>Easy Access and Proximity to Local Companies</h4>
            <p>Conveniently located near major highways and in close proximity to local companies.</p>
          </div>
          
          <button>Contact Us</button>
        </section>
        <Orangebar/>
      </div>


      <div className='wrapper'>
      <section className="meals-section">
        <div className="meals-content">
          <div className="meals-text">
            <h2 className="meals-title">Call Us Now!</h2>
            <p className="meals-description">
              Reach out to us today for a warm and welcoming conversation about how Fun N Learn Daycare can create an enriching and safe environment for your child. We're here to answer your questions and guide you through our exceptional care programs.
            </p>

            <div className="contact-info">
              <p className="license-number">License# 434342431</p>
              <p className="contact-name">Guruprit Kaur</p>
              <p className="contact-phone">(408) 209 6882</p>
              <a className='hover-container' href='mailto:guruprit.kaur@yahoo.com'>
                <span>guruprit.kaur@yahoo.com</span>
                <div className='mask'></div>
              </a>
            </div>
          </div>
          <div className="meals-image">
            <img src={calling} alt="Healthy Meals" />
          </div>
        </div>
      </section>
      <Bluebar/>
    </div>

  <section className="location-section">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1583.9255877666594!2d-121.91278638093911!3d37.44062038283255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc8cfa2c9b295%3A0xfbfc5ddffb04ed08!2s888%20Coyote%20St%2C%20Milpitas%2C%20CA%2095035!5e0!3m2!1sen!2sus!4v1694061015698!5m2!1sen!2sus"
    width="400"
    height="400"
    style={{ border: 0, paddingRight: "100px" }}
    allowFullScreen="true"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Daycare Location"
    className="location-map" // Add this class
  ></iframe>

  <div className="location-content">
    <div className="location-text">
      <h2 className="find-us-title">Where to Find Us</h2>
      <p className="location-description">
        We are sure you will have more questions to ask, after all, it's going to be a place where kids have to spend most of their day time. Please feel free to contact us via phone or email, and we will be happy to provide you with more details.
      </p>
      <p className="location-description">
        We are conveniently accessible from freeways 880 / 680 / 237 in Milpitas.
      </p>
      <strong>Address:</strong>
      <p className="location-description">
        888 COYOTE ST., MILPITAS, CA - 95035
      </p>
      <p className="hover-container">
        <a
        className="hover-container hover-effect" // Apply the classes here
        href="https://www.google.com/maps/dir//888+COYOTE+ST.,+MILPITAS,+CA+-+95035"
        target="_blank"
        rel="noopener noreferrer"
        >
          Directions
          <div className='mask'></div>
        </a>
      </p>
    </div>
  </div>
</section>

    </>
  );
}
