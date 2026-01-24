import React from "react";
import ServiceLayout from "./ServiceLayout";


const SOCReports = () => {
  return (
    <ServiceLayout
      title="SOC Reports"
      intro="Our SOC Reporting services support organizations in achieving SOC 1, SOC 2, and SOC 3 compliance and assurance."
      image="/services/SOC_report.webp" 
      why="SOC reports are critical for demonstrating trust, security, and control effectiveness to customers and stakeholders."
      approach="We guide organizations through SOC readiness, gap assessments, remediation, and reporting in line with industry standards."
      benefits={[
        "Improved trust with clients and partners",
        "SOC 1, SOC 2, and SOC 3 readiness support",
        "Clear understanding of control effectiveness",
        "Reduced audit and compliance risks",
        "Enhanced transparency and assurance",
      ]}
    />
  );
};

export default SOCReports;
