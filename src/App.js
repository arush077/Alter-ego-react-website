// import logo from './logo.svg';
import './App.css';
import bgImage from './cr1.mp4'
import bgImage2 from './cr2.mp4'

function App() {
  return (
    <>

    
    <video className='video' autoPlay="on" loop>
      <source src={bgImage} type="video/mp4" />
      </video>
    
    
    
      
      


     <div className='grid'>
      
        <div className='dashes'> <span></span> <br /> <span></span> </div>
        <div className='eng'></div>
        
        <div className="milan">MILAN <span></span> </div>

        <div className="monaco">MONACO <span></span> </div>

        <div className='img1'>
          <a href="https://www.alterego-group.com/en/awards/"><img src="https://www.alterego-group.com/img/logo_white.svg"  alt="" /> </a>
        
        </div>

        <br />

        <div className='img2'>
        <img  src="https://www.alterego-group.com/upload/resize_cache/webp/img/main_logo_text_mob.webp" alt=""  />
        </div>
        
        <br /><br />

      
        <div className='rewards'>
        <img  src="https://www.alterego-group.com/upload/resize_cache/webp/img/main_logo_awards.webp" alt="" />
   
   <div className='mm'> <span className='eurspan'></span> </div>
        </div>

        
    </div>


    

    



    <div className='secondpage'>
      <div className='p'> <a href="https://www.alterego-group.com/en/portfolio/penthouses-and-apartments/"> PENTHOUSES AND APARTMENTS </a><div className='inside'><span></span></div></div>
      <div className='c'> <a href="https://www.alterego-group.com/en/portfolio/country-houses-and-villas/"> COUNTRY HOUSES AND VILLAS </a><div className='inside'> <span></span></div> </div>
      <div className='m'> <a href="https://www.alterego-group.com/en/portfolio/mansions-and-estates/"> MANSIONS AND ESTATES </a> <div className='inside'><span></span></div> </div>

    </div>


    
    <div className='lastpage'>
      
      <div className="overlay">
      <div className='lastviddiv'>
       <video className='video2' autoPlay loop>
      <source src={bgImage2} type="video/mp4" />
      </video>
      </div>

    <div className='ldyp'>LET'S DISCUSS YOUR PROJECT</div>
    <div className='ldypp'>We would love to share ideas, suggest options and answer your questions.
    <br />
    We’re ready to become your guide in the fascinating landscape of architecture and
                    design.

                </div>




      </div>



      <div className='abovefooter'>
        <br />
    <div id='meta'> METAVERSE </div>
    <br />
    <div>MILAN</div>
    <br />
    <div>MONACO COMING SOON</div>
      </div>

      <div className="footer">


        <ul className='left'>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>PORTFOLIO</li>
          <li>CONTACTS</li>
        </ul>
      

      <ul className='right'>
        <li>All rights reserved</li>
        <li>Cookies</li>
        <li><i class="fa-brands fa-pinterest-p"></i></li>
        <li><i class="fa-brands fa-facebook-square"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li>
      </ul>
    


    </div>
    </div>

      


    
    </>
  );
}

export default App;




