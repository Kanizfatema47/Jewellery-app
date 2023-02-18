import React from 'react';
import Signin from '../../components/Auth/Signin';
import Signup from '../../components/Auth/Signup';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Header/Navbar';
import UpNev from '../../shared/Header/UpNev';
import AllProducts from '../AllCategories/AllProducts';
import Banner from './Banner';
import ByChoice from './ByChoice';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <div className="bg-hero bg-no-repeat bg-cover bg-center h-screen" >
            <UpNev/>
            <Navbar/>
            <Banner/>
        </div>
        <ByChoice/>
        <AllProducts/>
        <Testimonials/>
        <Signin/>
        <Signup/>
          <Footer/>
        </div>
    );
};

export default Home;