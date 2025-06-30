"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaPhone,
  FaTools,
  FaCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
  FaAngleDoubleRight,
  FaWrench,
  FaScrewdriverWrench,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
  {
    company: "PT Dans Multipro",
    role: "L2 & L3 Application Support Engineer",
    period: "2024 - 2025",
    bullets: [
      "Incident management, performance tuning, automation with Python/Shell, and basic penetration testing (Pentest) to identify security gaps.",
      "CI/CD pipeline setup using GitLab, Github, Jenkins, Docker, Kubernetes, Terraform, Ansible, AWS (EC2, EKS, Lambda, S3, Codecommit), and Azure.",
      "Monitoring with Splunk, Grafana, Prometheus and CloudWatch.",
      "Database administration (DBA) tasks including query optimization and backup management for MySQL and PostgreSQL.",
      "Supported infrastructure provisioning and maintenance to ensure system reliability and scalability.",
      "Lead and manage 30 member of L1 and L2 team member",
    ],
  },
  {
    company: "PT Access Mobile Indonesia",
    role: "DevOps / System Engineer / QA /Senior Technical Support",
    period: "2016 - 2024",
    bullets: [
      "Designed infrastructure on AWS, Docker, and implemented IaC with scripting.",
      "Performed log analysis, troubleshooting and Problem solving issue (Linux, DB, Redis, RabbitMQ).",
      "Handled QA for projects like UniPin, LINE POD, BEFA, XCLIO, Panasonic ads, ERP, and Parastar.",
      "Build, Install and Configure Servers on Prem and Cloud",
      "Make custom script for monitoring transaction using slack bot and telegram bot",
      "Repair and maintenance hardware",
      "Lead and manage 4 member of L1 and L2 team member",
    ],
  },
];

const projects = [
  {
    company: "PT Dans Multipro",
    items: ["Telkomsel Digipos", "Sobi", "Indihome", "Modern Channel", "FMC"],
  },
  {
    company: "PT Access Mobile Indonesia",
    items: [
      "Telkomsel Muslimplus",
      "Telkomsel Maxstream",
      "Telkomsel Dunia Games",
      "Telkomsel Komik Islami",
      "Payment Gateway Line",
      "Payment Gateway Line POD",
      "Payment Gateway Unipin",
      "Website and Dashboard XCLIO beauty clinic",
      "Website Panasonic Ads and Reward",
      "Website, Dashboard and Application Parastar",
    ],
  },
];

const skills = [
  "DevOps",
  "Application Support",
  "System Engineer",
  "Quality Assurance",
  "Database (MySQL, PostgreSQL, Redis)",
  "Monitoring (Grafana, Prometheus, Splunk)",
  "Cloud (AWS, Azure, GCP)",
  "Scripting (Bash, Python)",
  "Linux/Windows Server",
  "Incident Management (L1, L2, L3)",
  "Root Cause Analysis",
  "Performance Tuning",
  "Agile/Scrum",
  "Communication & cross-functional collaboration",
  "Documentation & reporting",
  "Multitasking & prioritization",
  "Management Skills",
  "Creativity",
  "Negotiation",
  "Critical-Thinking",
  "Leadership",
"Problem-Solving",
"Analytical",
"Troubleshooting",
"Smart-Work",
"Dedication",
"Teamwork"

];

const tools = [
    {
    category: "DevOps & CI/CD",
    items: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Ansible"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS (EC2, EKS, Lambda, S3, CodeCommit, CloudFront, CloudWatch)", "Microsoft Azure"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js","Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform", "Ansible", "AWS", "Azure", "GCP"],
  }, 
  {
    category: "Quality Assurance",
    items: ["Selenium", "Katalon", "Jmeter", "Postman"],
  }, 
  {
    category: "Database Administrator",
    items: ["MySQL", "PostgreSQL", "Redis", "Oracle", "MongoDB"],
  },  
  {
    category: "Monitoring & Logging",
    items: ["Grafana", "Prometheus", "Splunk", "Dynatrace", "Kibana", "custom telegram bot and slack bot"],
  },  
  {
    category: "Scripting",
    items: ["Bash", "Python"],
  },   
  {
    category: "Linux/Windows Server",
    items: ["Centos", "Redhat", "Ubuntu", "Kali Linux"],
  },
    {
    category: "Programming Language",
    items: ["Bash", "Python", "Go Lang", "C, C++, C#", "PHP", "HTML", "Java", "Javascript", "Visual Basic", "Foxpro"],
  },  
];

const education = [
  {
    university: "STMIK JAKARTA STI & K",
    degree: "S1 Information System",
    year: "2013 - 2015",
  },
  {
    university: "STMIK JAKARTA STI & K",
    degree: "D3 Computer Technic",
    year: "2009 - 2013",
  },
  {
    university: "SMA YADIKA 6",
    degree: "High School (IPA)",
    year: "2005 - 2008",
  },
  {
    university: "SMP YADIKA 6",
    degree: "Junior School",
    year: "2002 - 2005",
  },
  {
    university: "SDN 4 Ciputat",
    degree: "Elementary School",
    year: "1997 - 2002",
  },
];

const portfolios = [
  {
    title: "Portfolio Website",
    description: "A personal web portfolio to showcase my experiences and projects.",
    link: "https://github.com/ervanstwan/ervan-portfolio",
  },
  {
    title: "Monitoring Dashboard",
    description: "Built using Prometheus, Grafana, and custom exporters to monitor microservices.",
    link: "https://github.com/ervanstwan/monitoring-dashboard",
  },
  {
    title: "Blue-Green Deployment",
    description: "Jenkins CI + ArgoCD GitOps on EKS with SonarQube, Trivy, OWASP checks, and self-healing blue-green rollout.",
    link: "https://github.com/ervanstwan/devops-pipeline",
  },
  {
    title: "DevOps GitOps Pipeline",
    description: "GitOps CI/CD with ArgoCD, Terraform, Jenkins & Node.js",
    link: "https://github.com/ervanstwan/devops-gitops-pipeline",
  },
  {
    title: "AWS EKS 3-Tier App Deployment",
    description: "A complete modern infrastructure-as-code project demonstrating how to deploy a containerized Node.js application on AWS",
    link: "https://github.com/ervanstwan/AWS-EKS-3-Tier-App-Deployment",
  },
  {
    title: "Full CI/CD Pipeline",
    description: "Full CI/CD Pipeline with Kubernetes, Helm & Argo CD",
    link: "https://github.com/ervanstwan/full-cicd-pipeline",
  },
  {
    title: "Rock-Paper-Scissors Game CI/CD Pipeline",
    description: "A simple Rock-Paper-Scissors game with a GitLab CI/CD pipeline.",
    link: "https://github.com/ervanstwan/Rock-Paper-Scissors",
  },
  {
    title: "Tic-Tac-Toe Game CI/CD Pipeline",
    description: "A simple Tic-Tac-Toe game with a full GitLab CI/CD pipeline.",
    link: "https://github.com/ervanstwan/Tic-Tac-Toe",
  },
];

const sections = ["Experience", "Projects", "Skills", "Tools", "Education", "Portfolio"];

export default function Page() {
  const [activeSection, setActiveSection] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Experience":
        return (
          <section className="mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <FaCode /> Experience
            </h2>
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-blue-900/70 backdrop-blur p-4 my-4 rounded border border-blue-700">
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <p className="text-sm italic text-gray-300">
                  {exp.role} <span className="not-italic">({exp.period})</span>
                </p>
                <ul className="mt-2 text-sm text-gray-200 space-y-1">
                  {exp.bullets.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaAngleDoubleRight className="text-blue-300" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        );

      case "Projects":
        return (
          <section className="mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <FaProjectDiagram /> Projects
            </h2>
            <div className="bg-blue-900/70 backdrop-blur p-4 my-4 rounded border border-blue-700 text-sm text-gray-200">
              {projects.map((proj, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <FaCode /> {proj.company}
                  </h3>
                  <ul className="ml-6 mt-1 space-y-1">
                    {proj.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FaAngleDoubleRight className="text-green-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );

      case "Skills":
        return (
          <section className="mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <FaWrench /> Skills
            </h2>
            <ul className="bg-blue-900/70 backdrop-blur p-4 my-4 rounded border border-blue-700 text-sm text-gray-200 space-y-1">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaAngleDoubleRight className="text-blue-300" /> {skill}
                </li>
              ))}
            </ul>
          </section>
        );


      case "Tools":
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
        <FaTools /> Tools
      </h2>
      <div className="bg-blue-900/70 backdrop-blur p-4 my-4 rounded border border-blue-700 text-sm text-gray-200 space-y-4">
        {tools.map((group, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 text-white font-semibold">
              <FaAngleDoubleRight className="text-blue-400" /> {group.category}
            </div>
            <ul className="ml-6 mt-2 space-y-1 list-none">
              {group.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-green-400">↳</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );

      case "Education":
        return (
          <section className="mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <FaGraduationCap /> Education
            </h2>
            {education.map((edu, i) => (
              <div key={i} className="bg-blue-900/70 backdrop-blur p-4 my-4 rounded border border-blue-700 text-sm text-gray-200">
                <p className="text-white font-semibold">{edu.university}</p>
                <p className="italic text-gray-300">
                  {edu.degree} ({edu.year})
                </p>
              </div>
            ))}
          </section>
        );

      case "Portfolio":
        return (
          <section className="mt-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white mb-4">
              <FaBriefcase /> Portfolio
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {portfolios.map((item, i) => (
                <div key={i} className="bg-blue-900/70 backdrop-blur p-4 rounded border border-blue-700">
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-blue-300 hover:text-white"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  if (!loaded) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to Ervan Portfolio</h1>
          <p className="text-sm">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <main
      className="min-h-screen px-4 py-8 bg-cover bg-center text-white transition-opacity duration-700 animate-fade"
      style={{ backgroundImage: "url('/bg4.jpg')", backgroundAttachment: "fixed" }}
    >
      <section className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Image
          src="/ervan-profile.jpg"
          alt="Ervan Setiawan"
          width={150}
          height={150}
          className="rounded-full border-4 border-white shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold">Ervan Setiawan</h1>
          <p className="text-md italic font-extrabold text-gray-200 mt-2">
            IT Professional | Application Support L2 an L3 | DevOps | System Engineer | QA <span className="text-blue-200 italic">with over 9+ Years Experience</span>
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
            <a href="/CV-[ERVAN SETIAWAN].pdf" download className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded shadow">
              <FaDownload /> Download CV
            </a>
            <a href="mailto:ervanstwan@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded">
              <FaEnvelope /> Contact
            </a>
            <a href="https://www.linkedin.com/in/ervan-setiawan-58a86b307/" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/ervanstwan" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded">
              <FaGithub /> GitHub
            </a>
            <a href="https://wa.me/6285215439225" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded">
              <FaPhone /> WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-6">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                className={`px-4 py-2 rounded font-bold ${
                  activeSection === sec ? "bg-yellow-400 text-black" : "bg-black text-white"
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.section
          key={activeSection}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderSectionContent()}
        </motion.section>
      </AnimatePresence>
    </main>
  );
}
