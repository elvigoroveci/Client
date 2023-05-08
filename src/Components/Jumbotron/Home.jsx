import React from 'react'
import '../Jumbotron/Home.css'
import delivery from "../Jumbotron/delivery.png";
import hours from "../Jumbotron/24-7.png"
import security from "../Jumbotron/verified.png";

const Home = () => {
  return (
    <>
    <section className='jumbotron'>
        <div className='message'>
            <div className='discription'>
              <h6>New Arrival</h6>
              <h2>Discover Our <br/> New Collection</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <button>
              BUY NOW
              </button>
            </div>
        </div>
    </section>
    <div className='end-home'>
          <div className='column'>
                <div className='icon'>
                    <img src={delivery} alt="delivery" />
                </div>
            <div className='text'>
                <h3>Free Delivery</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
         </div>   
         <div className='column'>
                <div className='icon'>
                    <img src={hours} alt="24/7 hours" />
                </div>
            <div className='text'>
                <h3>Support 24/7</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
         </div> 
         <div className='column'>
                <div className='icon'>
                    <img src={security} alt="" />
                </div>
            <div className='text'>
                <h3>100% Authentic</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
         </div> 
     </div>  
    </>
  )
}

export default Home;
