import BottomTab from '../../more/BottomTab';
import Footer from '../../more/Footer';
import Header from './Header';
import Hero from './Hero';
import ShowProductBanner from './ShowProductBanner';


const Home = () => {
    return (
        <>
         <Header/>
         <Hero/>
         <ShowProductBanner/>
       
         <Footer/>   
         <BottomTab/>
        </>
    );
};

export default Home;