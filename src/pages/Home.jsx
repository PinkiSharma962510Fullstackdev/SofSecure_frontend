import React from 'react'

import Navbar from '../navbar/Navbar'
import HeroSection from '../Componants/Home_componants/HeroSection'
import AboutInsightsSection from '../Componants/Home_componants/AboutInsightsSection'
import WhyChooseUs from '../Componants/Home_componants/WhyChooseUs'
import AuditInsights from '../Componants/Home_componants/AuditInsights'
import EnterpriseServices from '../Componants/Home_componants/Services'
import Footer from '../navbar/Footer'
import ContactFormHome_page from '../Componants/ContactFormHome_page'


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <AboutInsightsSection></AboutInsightsSection>
            <WhyChooseUs></WhyChooseUs>
             <AuditInsights></AuditInsights>
             <EnterpriseServices></EnterpriseServices>
             <ContactFormHome_page></ContactFormHome_page>
             <Footer></Footer>
            
            
        </div>
    )
}

export default Home
