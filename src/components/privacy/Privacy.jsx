"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Sun,
  Moon,
  Shield,
  Lock,
  Eye,
  FileText,
  Bell,
  UserCheck,
  RefreshCw,
  Mail,
} from "lucide-react";

export default function Privacy() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if we're in the browser before accessing document
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const privacySections = [
    {
      id: "information-collection",
      title: "Information Collection",
      icon: <Eye className="h-6 w-6" />,
      content: `
        <p class="mb-4">We collect several types of information from and about users of our Services, including:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Personal Information:</strong> This includes your name, email address, phone number, and other identifiers that you provide when using our Services.</li>
          <li><strong>Usage Data:</strong> We collect information about how you interact with our Services, including the pages you visit, the time spent on those pages, and other diagnostic data.</li>
          <li><strong>Device Information:</strong> We may collect information about your device, including its type, model, operating system, browser type, and IP address.</li>
          <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Services and hold certain information.</li>
        </ul>
        <p>We collect this information when you register on our site, fill out a form, subscribe to our newsletter, respond to a survey, or engage with our Services in any other way.</p>
      `,
    },
    {
      id: "use-of-information",
      title: "Use of Information",
      icon: <FileText className="h-6 w-6" />,
      content: `
        <p class="mb-4">We use the information we collect for various purposes, including:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Providing and Maintaining our Services:</strong> To deliver the features and functionality you request, and to ensure our Services are working as intended.</li>
          <li><strong>Improving our Services:</strong> To understand how users interact with our Services, identify areas for improvement, and develop new features.</li>
          <li><strong>Personalization:</strong> To customize your experience and deliver content and product offerings relevant to your interests.</li>
          <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and send you important updates about our Services.</li>
          <li><strong>Marketing:</strong> With your consent, to inform you about new features, products, or services that may be of interest to you.</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
        </ul>
        <p>We process your information only for the purposes identified above and in accordance with your consent, where required by law.</p>
      `,
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <UserCheck className="h-6 w-6" />,
      content: `
        <p class="mb-4">We may share your information in the following situations:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf.</li>
          <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
          <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
        </ul>
        <p>We do not sell your personal information to third parties. Any sharing of your information is conducted in accordance with this Privacy Policy and applicable data protection laws.</p>
      `,
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Lock className="h-6 w-6" />,
      content: `
        <p class="mb-4">We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Encryption:</strong> We use industry-standard encryption technologies to protect data in transit and at rest.</li>
          <li><strong>Access Controls:</strong> We restrict access to personal information to employees, contractors, and agents who need to know that information to process it for us.</li>
          <li><strong>Regular Audits:</strong> We conduct regular security assessments and audits to ensure our security measures remain effective.</li>
          <li><strong>Incident Response:</strong> We have procedures in place to handle any suspected personal data breach and will notify you and applicable regulators when required by law.</li>
        </ul>
        <p>While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security.</p>
      `,
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking Technologies",
      icon: <Bell className="h-6 w-6" />,
      content: `
        <p class="mb-4">We use cookies and similar tracking technologies to track activity on our Services and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.</p>
        <p class="mb-4">We use the following types of cookies:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.</li>
          <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
          <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
          <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites.</li>
        </ul>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.</p>
      `,
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: <Shield className="h-6 w-6" />,
      content: `
        <p class="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Access:</strong> You have the right to request copies of your personal information.</li>
          <li><strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li><strong>Erasure:</strong> You have the right to request that we erase your personal information, under certain conditions.</li>
          <li><strong>Restriction of Processing:</strong> You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
          <li><strong>Object to Processing:</strong> You have the right to object to our processing of your personal information, under certain conditions.</li>
          <li><strong>Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <p>If you make a request, we have one month to respond to you. To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.</p>
      `,
    },
    {
      id: "policy-updates",
      title: "Updates to This Policy",
      icon: <RefreshCw className="h-6 w-6" />,
      content: `
        <p class="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        <p class="mb-4">We will let you know via email and/or a prominent notice on our Services before the change becomes effective and update the "Last Updated" date at the top of this Privacy Policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      `,
    },
    {
      id: "contact-us",
      title: "Contact Us",
      icon: <Mail className="h-6 w-6" />,
      content: `
        <p class="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>By email:</strong>Santoshrajbgp11@gmail.com</li>
          <li><strong>By phone:</strong>+91 6204786984</li>
          <li><strong>By Visiting:</strong>Bhagalpur Bihar </li>
        </ul>
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity, y: headerY }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800 border-2 border-red-600 hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"></div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Last Updated: May 1, 2023
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10"
          >
            <motion.h2
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-2xl font-bold mb-4"
            >
              Introduction
            </motion.h2>
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="prose dark:prose-invert max-w-none"
            >
              <p className="mb-4">
                Welcome to our Privacy Policy. This document explains how we
                collect, use, and protect your personal information when you use
                our services, including our website, mobile applications, and
                other digital platforms (collectively, our "Services").
              </p>
              <p className="mb-4">
                We respect your privacy and are committed to protecting your
                personal information. This Privacy Policy will help you
                understand what information we collect, how we use it, and what
                choices you have regarding your personal information.
              </p>
              <p>
                By using our Services, you consent to the collection and use of
                information in accordance with this policy. If you do not agree
                with the terms of this policy, please do not use our Services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10"
          >
            <motion.h2
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-2xl font-bold mb-6"
            >
              Table of Contents
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {privacySections.map((section, index) => (
                <motion.a
                  key={section.id}
                  variants={itemVariants}
                  href={`#${section.id}`}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
                >
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
                    {section.icon}
                  </div>
                  <span className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {section.title}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      {privacySections.map((section, index) => (
        <section key={section.id} id={section.id} className="py-8 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Final Note */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            viewport={{ once: true }}
            variants={sectionVariants}
            className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-2xl shadow-lg p-8 md:p-10 text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="mb-4">
              We are committed to protecting your personal information and
              ensuring you have control over your data. If you have any
              questions or concerns about our privacy practices, please don't
              hesitate to contact us.
            </p>
            <p>
              Thank you for trusting us with your personal information. We are
              dedicated to maintaining that trust by being transparent about our
              data practices and respecting your privacy rights.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
