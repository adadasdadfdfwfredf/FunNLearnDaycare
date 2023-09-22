import React from 'react';
import serviceimg from "../images/serviceimg.png";
import Bluebar from '../components/bluebar';
import por from "../images/por.png";
import Orangebar from '../components/orangebar';
import meals from "../images/meals.png";
import Redbar from '../components/redbar'


const Services = () => {
  const scheduleData = [
    { time: '8:30 - 9:00', activity: 'Arrival Time' },
    { time: '9:00 - 10:00', activity: 'Breakfast' },
    { time: '10:00 - 10:30', activity: 'Circle Time' },
    { time: '10:30 - 11:00', activity: 'Painting / Creative work' },
    { time: '11:00 - 12:00', activity: 'Outdoor Play Time' },
    { time: '12:00 - 1:00', activity: 'Lunch' },
    { time: '1:00 - 1:30', activity: 'Puzzles' },
    { time: '1:30 - 3:30', activity: 'Naptime' },
    { time: '3:30 - 4:00', activity: 'Snacks / Free Play' },
    { time: '4:00 - 4:30', activity: 'Dance & Music' },
    { time: '4:30 - 5:30', activity: 'Outdoor Play / Story Time' },
    { time: '5:30 - 6:00', activity: 'Cleanup / Ready for Home' },
  ];

  const calendarData = [
    { month: 'January', event: 'New Years Day 1st' },
    { month: 'February', event: 'President’s Day 18th' },
    { month: 'March', event: '-' },
    { month: 'April', event: 'Childcare Service Day  19th' },
    { month: 'May', event: 'Memorial Day 27th' },
    { month: 'June', event: '-' },
    { month: 'July', event: 'Independence Day 4th'},
    { month: 'August', event: '-'},
    { month: 'September', event: 'Labor Day  2nd'},
    { month: 'October', event: '-'},
    { month: 'November', event: 'Thanksgiving 28-29th'},
    { month: 'December', event: 'Christmas Break  23-27th'},
  ];

  return (
    <>
      <section className="services-wrapper">
        <section className="servicetext">
          <div className="service-content">
            <img className="serviceimg" src={serviceimg} alt="Service" />
            <div className="service-description">
              <h2 id="text1"> Services We Offer to Cater to Your Child's Needs</h2>
              <hr className="service-bar" />
              <h2 id="text2">From drop-off to pick-up, we’ll keep your child safe and sound. At Fun'N Learn Daycare, we provide a comprehensive range of services designed to ensure your child's well-being and development. </h2>
            </div>
          </div>
        </section> 
        <Bluebar></Bluebar>
      </section>


      <div className='wrapper'>
        <section className="schedule-section">
          <h2 className='rightsubtitle-text'>
            Our Daily Schedule
          </h2>

          <section className="daycare-schedule">
            <img className="por1" src={por} alt="por" />
            <div className="schedule-container">
              {scheduleData.map((item, index) => (
                <div key={index} className="schedule-item">
                  <p className="schedule-time">{item.time}</p>
                  <h3 className="schedule-activity">{item.activity}</h3>
                </div>
              ))}
            </div>
          </section>
        </section>
        <Orangebar></Orangebar>
      </div>


      <div className='wrapper'>
          <section className="meals-section">
            <div className="meals-content">
              <div className="meals-text">
                <h2 className="meals-title">Healthy Meals</h2>
                <p className="meals-description">
                  Our commitment to your child's well-being extends to their nutrition. We provide freshly prepared, well-balanced meals that cater to various dietary needs. Our menu is designed to ensure your child receives the nutrients they need to grow and thrive.
                </p>
                <p className='meals-description'> We provide fresh homemade meals (vegetarian only) for kids. We try to include seasonal vegetables & fruits in daily diet. There may be parent’s sponsored parties at certain times. Please inform us about  any restrictive food items which your kid should not be allowed to have.  </p>
              </div>
              <div className="meals-image">
                <img src={meals} alt="Healthy Meals" />
              </div>
            </div>
          </section>
          <Redbar/>
        </div>

        <section className="calendartext">
          <div className="calendar-content">

            <div className="calendar-description">
              <h2 id="centersubtitle-text">Explore Our Year-Round Events</h2> 
            </div>
          </div>
        </section>

      <section className="calendar-section">
        <div className="calendar-container">
          {calendarData.map((item, index) => (
            <div key={index} className="calendar-item">
              <p className="calendar-month">{item.month}</p>
              <h3 className="calendar-event">{item.event}</h3>
            </div>
          ))}
        </div>
      </section>
      
    
    </>
  );  
};

export default Services;
