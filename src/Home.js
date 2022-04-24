import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">

        <div className="home__container">
            <img className="home__image"
             src="https://m.media-amazon.com/images/I/5188nAMXyNL._SX1500_.jpg" alt="" />
           <div className="home__row">
               <Product title="The lean startup"
               price={29.99}
               image="./images/comic-book-cover.svg"
               rating={5} />
               <Product title="The lean startup"
               price={29.99}
               image="./images/comic-book-cover.svg"
               rating={5} />
               </div>
               
               <div className="home__row">
               <Product title="The lean startup"
               price={11.99}
               image="./images/comic-book-cover.svg"
               rating={5} />
               <Product title=" ajbsasdjb kasjdba auwgfba ksabcxua dkab ascasca adwd aaxxvxb dthrjrj r6yrtg sdvs "
               price={2.99}
               image="./images/comic-book-cover.svg"
               rating={3} />
               <Product title="The lean startup"
               price={9.99}
               image="./images/comic-book-cover.svg"
               rating={5} />
               </div>
               <div className="home__row">
               <Product title="The lean startup"
               price={239.99}
               image="./images/comic-book-cover.svg"
               rating={2} />
               </div>
           </div>
           
           </div>
  
  );
}

export default Home;