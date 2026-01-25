// import React from 'react'

// import Navbar from '../navbar/Navbar'
// import HeroSection from '../Componants/Home_componants/HeroSection'
// import AboutInsightsSection from '../Componants/Home_componants/AboutInsightsSection'
// import WhyChooseUs from '../Componants/Home_componants/WhyChooseUs'
// import AuditInsights from '../Componants/Home_componants/AuditInsights'
// import EnterpriseServices from '../Componants/Home_componants/Services'
// import Footer from '../navbar/Footer'
// import ContactFormHome_page from '../Componants/ContactFormHome_page'
// import AgileInternalAudit from './services/AgileInternalAudit'
// import HomeFAQs from '../Faqs/FAQs'
// import ServicesMarquee from '../Componants/Home_componants/ServicesMarquee'


// const Home = () => {
//     return (
//         <div>
           
//             <HeroSection></HeroSection>
//             <ServicesMarquee></ServicesMarquee>
//             <AboutInsightsSection></AboutInsightsSection>
//             <WhyChooseUs></WhyChooseUs>
//              <AuditInsights></AuditInsights>
//              <EnterpriseServices></EnterpriseServices>
//               <HomeFAQs></HomeFAQs>
//              {/* <ContactFormHome_page></ContactFormHome_page> */}
           
            
            
            
//         </div>
//     )
// }

// export default Home


import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "../Componants/Home_componants/HeroSection";
import ServicesMarquee from "../Componants/Home_componants/ServicesMarquee";
import AboutInsightsSection from "../Componants/Home_componants/AboutInsightsSection";
import WhyChooseUs from "../Componants/Home_componants/WhyChooseUs";
import AuditInsights from "../Componants/Home_componants/AuditInsights";
import EnterpriseServices from "../Componants/Home_componants/Services";
import HomeFAQs from "../Faqs/FAQs";

const Home = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          SofSecure | IT Audit, Cybersecurity & Compliance Consulting Firm
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure is a global IT audit and cybersecurity consulting firm delivering SOC reports, SOX compliance, enterprise risk management, privacy and regulatory compliance services."
        />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.sofsecure.com/" />

        {/* KEYWORDS (optional but fine) */}
        <meta
          name="keywords"
          content="IT audit services, cybersecurity assessment, SOC reports, SOX compliance, enterprise risk management, ESG sustainability, regulatory compliance"
        />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="SofSecure | IT Audit & Cybersecurity Experts" />
        <meta
          property="og:description"
          content="Trusted IT audit, cybersecurity, SOC reporting and compliance advisory services for enterprises worldwide."
        />
        <meta property="og:url" content="https://www.sofsecure.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.sofsecure.com/og-image.jpg" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SofSecure | IT Audit & Cybersecurity" />
        <meta
          name="twitter:description"
          content="Enterprise-grade IT audit, cybersecurity and compliance consulting services."
        />

        {/* SCHEMA (ORGANIZATION) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SofSecure",
            "url": "https://www.sofsecure.com",
            "logo": "https://www.sofsecure.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/sofsecure"
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <HeroSection />
      <ServicesMarquee />
      <AboutInsightsSection />
      <WhyChooseUs />
      <AuditInsights />
      <EnterpriseServices />
      <HomeFAQs />
    </>
  );
};

export default Home;
