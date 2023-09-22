import Bluebar from "../components/bluebar";
import playing from "../images/playing.png";
import serviceimg from "../images/serviceimg.png";


export default function About(){
    return (
      <section className="services-wrapper">
        <section className="servicetext">
          <div className="service-content">
            <img className="aboutimg" src={playing} alt="Service" />
            <div className="service-description">
              <h2 id="text1"> About Us!</h2>
              <hr className="service-bar" />
              <h2 id="text2">We started this child day care in Mar. 2006, with a vision of providing home like care in a clean and hygienic environment for kids. While working with kids, we learnt that access to open area is equally important as group time inside a room. At Fun’N Learn we strive to provide them the best. </h2>
              <h2 id="text2">We are pleased to inform you that Fun'N Learn has been granted license to operate as "Large Home Day Care", with maximum capacity of 14 kids.</h2>
              <p className="about-license-number">License# 434342431</p>
              <h2 id="text2">We have hands on experience in dealing with kids of all ages. Our staff hiring is based on our belief, that kids should get home like environment while they are away from their parents.</h2>

            </div>
          </div>
        </section> 

      </section>
      
      
      
      )
}