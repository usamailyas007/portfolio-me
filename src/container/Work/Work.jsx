/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
// import p1 from '../../assets/about01.png';
import amer from '../../assets/Projects/Blue And White Modern Responsive Website Development Services Instagram Post.png';
import fusco from '../../assets/Projects/1 (2).png';
import Rev from '../../assets/Projects/1 (3).png';
import sub from '../../assets/Projects/1 (4).png';
import nev from '../../assets/Projects/1 (5).png';
import novahealth from '../../assets/Projects/novahealth.png';
import healink from '../../assets/Projects/healink.png';
import mtloob from '../../assets/Projects/mtloob.png';
import flirtmetrics from '../../assets/Projects/flirtmetrics.png';
import rentify from '../../assets/Projects/rentify.png';
// import { urlFor, client } from '../../client';
import './Work.scss';

const works = [
  {
    imgUrl: amer,
    name: 'Libas Collective',
    projectLink: 'https://play.google.com/store/apps/details?id=com.libas.libas&hl=en',
    codeLink: 'https://play.google.com/store/apps/details?id=com.libas.libas&hl=en',
    title: 'Libas Collective',
    description: 'Libas Collective is a luxury fashion marketplace for authenticated pre-owned designer items at discounted prices. I worked as a Flutter developer, building responsive UI and smooth mobile experience for Android and iOS. My role focused on performance optimization and ensuring a clean, user-friendly interface.',
    tags: ['Mobile Apps', 'All'],
    caseStudy: {
      overview: 'Libas Collective is a premium digital marketplace built for the luxury fashion resale market. It connects fashion-conscious buyers with verified sellers of authenticated pre-owned designer pieces from top global brands. The platform makes luxury fashion more accessible by offering genuine items at discounted prices, while giving sellers a simple and professional way to list and manage their products. The app is available on both Android and iOS, providing a smooth and enjoyable shopping experience for users around the world.',
      goal: 'The main goal was to build a shopping experience that feels premium, trustworthy, and easy to use. Buyers needed full confidence that every item they purchase is authentic and fairly priced. Sellers needed a straightforward way to create listings, manage orders, and communicate with buyers directly. The business also needed a scalable platform that could grow with increasing users and products without losing speed or quality.',
      challenge: 'One of the key challenges was building a real-time experience that felt fast and reliable on both Android and iOS. I developed a fully responsive Flutter UI that adapts cleanly to different screen sizes and devices. I integrated real-time push notifications to keep users updated on orders, messages, and activity. I also built an in-app chat system so buyers and sellers could communicate directly within the app. The shopping and order workflows were carefully designed to be smooth and easy, reducing friction at every step. Throughout the project, the codebase was kept clean and well organized so the team could continue adding new features without slowing down.',
      outcome: 'The app was successfully launched on both the Google Play Store and Apple App Store and received over 10,000 downloads with a strong user rating. Performance was optimized to handle high traffic without lag or crashes. The real-time features worked reliably in production, keeping users engaged and coming back regularly. The project was delivered on time and is currently live in production, serving a growing community of luxury fashion buyers and sellers worldwide.',
      stats: [
        { value: '10K+', label: 'Downloads' },
        { value: '2', label: 'Platforms' },
        { value: '⭐ 4.5', label: 'App Rating' },
      ],
      platform: 'Play Store',
    },
  },
  {
    imgUrl: novahealth,
    name: 'Nova Health - Online Pharmacy',
    projectLink: 'https://play.google.com/store/apps/details?id=com.novahealth.app',
    codeLink: 'https://play.google.com/store/apps/details?id=com.novahealth.app',
    title: 'Nova Health - Online Pharmacy',
    description: 'Nova Health is a healthcare e-commerce app that lets users search for medicines, compare prices, and get orders delivered or picked up from nearby pharmacies. I worked as a Full Stack Flutter Developer using Flutter and Django, building the shopping flow, product details, and cart/checkout experience.',
    tags: ['Full Stack Applications', 'Mobile Apps', 'All'],
    caseStudy: {
      overview: 'Nova Health is an online pharmacy platform that makes it easy for users to find and order medicines, health products, and daily essentials from verified local pharmacies. Users can search by drug name, browse detailed product information including usage, side effects, and precautions, and choose between home delivery or in-store pickup. The app is designed to make healthcare shopping as simple and transparent as ordering anything else online.',
      goal: 'The goal was to build a trustworthy medicine ordering experience where users could quickly find the right product, understand exactly what they were buying, and check out with confidence. The platform needed clear product detail pages with dosage and safety information, a flexible delivery-or-pickup flow, and a cart and checkout system that handled discounts, coupons, and shipping calculations accurately.',
      challenge: 'A key challenge was presenting detailed medical product information in a way that felt clear and trustworthy rather than overwhelming. I built the Flutter product detail screens with structured sections for usage instructions, side effects, and precautions, pulling data from the Django backend through REST APIs. I implemented the cart and checkout flow with real-time price, discount, and shipping calculations, along with a delivery-or-pickup toggle that adjusted the checkout summary accordingly. I also worked on the home screen search and category browsing experience so users could find medicines and related products quickly across a large catalog.',
      outcome: 'Nova Health launched on the Google Play Store, giving users a reliable way to order medicines and healthcare products online. The clear product detail layout reduced confusion around dosage and usage, and the flexible delivery/pickup options made the app convenient for different customer needs. The checkout flow handled discounts and coupons accurately from launch, and the app continues to serve as a dependable healthcare shopping platform.',
      stats: [
        { value: 'Flutter', label: 'Frontend' },
        { value: 'Django', label: 'Backend' },
        { value: 'Play Store', label: 'Platform' },
      ],
      platform: 'Play Store',
    },
  },
  {
    imgUrl: healink,
    name: 'Healink - Habit & Wellness Tracker',
    projectLink: 'https://apps.apple.com/pk/app/healink/id6445893464',
    codeLink: 'https://apps.apple.com/pk/app/healink/id6445893464',
    title: 'Healink - Habit & Wellness Tracker',
    description: 'Healink is a mind and body wellness app that helps users build daily health habits and track key biomarkers backed by science. I worked as a Full Stack Flutter Developer, building the habit tracking dashboard, lifestyle score system, and biomarker tracking screens using Flutter and Node.js.',
    tags: ['Full Stack Applications', 'AI-Powered Applications', 'All'],
    caseStudy: {
      overview: 'Healink is a science-based wellness app that helps users improve their mind, body, and overall health through daily habit tracking and biomarker monitoring. Users check off routines like hydration and exercise, watch a personalized lifestyle score respond to their consistency, and track key health biomarkers such as cholesterol ratios and other metrics in one place. The app is built for people who want data-driven insight into their wellness rather than generic advice.',
      goal: 'The goal was to turn everyday health habits into a measurable, motivating experience. The platform needed a daily routine tracker that felt quick to use, a lifestyle score that meaningfully reflected a user\'s recent behavior, and a biomarker tracking system that presented complex health data in a clear, color-coded way. It also had to feel personal, greeting users by name and adapting to their ongoing progress.',
      challenge: 'The most interesting part of this project was building the lifestyle score engine, which combines multiple daily habit inputs into a single, easy-to-understand percentage with supporting breakdown icons. I built the Flutter dashboard with a routine checklist, progress ring, and score trend indicators, backed by Node.js APIs that calculated and updated scores as users completed their daily routine. I also built the biomarker tracking screens, which needed to present multiple health metrics with color-coded status indicators (good, moderate, high risk) in a layout that stayed readable even with dense data. Keeping the UI calm and encouraging, rather than clinical, was an ongoing design and implementation focus throughout.',
      outcome: 'Healink launched on the Apple App Store and gave users a genuinely motivating way to stay on top of their daily health habits. The lifestyle score became the centerpiece of the experience, with users returning daily to see their score improve. The biomarker tracking feature made it easy for users to understand health metrics that are normally buried in lab reports, and the app continues to help users build consistent, science-backed wellness routines.',
      stats: [
        { value: 'Flutter', label: 'Frontend' },
        { value: 'Node.js', label: 'Backend' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  {
    imgUrl: mtloob,
    name: 'Mtloob - Medical B2B Marketplace',
    projectLink: 'https://apps.apple.com/pk/app/%D9%85%D8%B7%D9%84%D9%88%D8%A8-%D8%B7%D8%A8%D9%8A/id6753684200',
    codeLink: 'https://apps.apple.com/pk/app/%D9%85%D8%B7%D9%84%D9%88%D8%A8-%D8%B7%D8%A8%D9%8A/id6753684200',
    title: 'Mtloob - Medical B2B Marketplace',
    description: 'Mtloob is a B2B marketplace connecting healthcare buyers with verified medical suppliers across the region, supporting both English and Arabic. I worked as a Full Stack Flutter Developer building the RFQ (Request for Quote) product selection flow and the medical supplier search and listing experience.',
    tags: ['Full Stack Applications', 'Mobile Apps', 'All'],
    caseStudy: {
      overview: 'Mtloob is a business-to-business marketplace built to connect medical facilities and buyers with verified medical suppliers. Instead of manually contacting multiple vendors, buyers can select the products they need, such as medical items or pharmaceuticals, and submit a Request for Quote (RFQ) that goes out to relevant suppliers. The app also includes a supplier discovery experience, letting buyers search and compare vendors directly. Built with full Arabic and English language support, Mtloob serves the regional healthcare supply market.',
      goal: 'The business needed a streamlined way for medical buyers to source products from multiple suppliers without the inefficiency of individual phone calls or emails. The platform had to support an RFQ workflow where buyers could select multiple product categories and submit a single request, along with a supplier search experience showing vendor details like ratings and product counts at a glance. Full right-to-left Arabic language support was a hard requirement given the target market.',
      challenge: 'Building a bilingual RFQ marketplace introduced layout and localization challenges throughout the app. I built the Flutter product selection screen for the RFQ flow, allowing buyers to browse categories like medical items and pharmaceuticals and add them to a request before submitting. I also built the supplier search and listing screens, displaying vendor cards with ratings, product counts, and quick actions in a clean grid layout. Supporting Arabic required careful handling of RTL layouts alongside the existing LTR English UI, so components had to be built in a way that mirrored correctly without breaking alignment. I worked closely with the backend to ensure RFQ submissions and supplier data stayed in sync in real time.',
      outcome: 'Mtloob launched on the Apple App Store, giving medical buyers a faster way to source products and compare suppliers in one place. The RFQ flow simplified what was previously a manual, time-consuming sourcing process into a few taps. The bilingual Arabic and English experience worked reliably across both layouts, making the app accessible to a wider regional audience. The platform continues to connect medical buyers with its growing supplier network.',
      stats: [
        { value: 'Flutter', label: 'Frontend' },
        { value: 'AR / EN', label: 'Bilingual' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  {
    imgUrl: flirtmetrics,
    name: 'Flirtmetrics - Cold Approach',
    projectLink: 'https://apps.apple.com/us/app/flirtmetrics-cold-approach/id6755988541',
    codeLink: 'https://apps.apple.com/us/app/flirtmetrics-cold-approach/id6755988541',
    title: 'Flirtmetrics - Cold Approach',
    description: 'Flirtmetrics is a self-improvement app that helps users track and analyze their cold approach interactions with data-driven insights. I worked as a Full Stack Flutter Developer, building the leaderboard, analytics dashboard, and location-based discovery features using Flutter and Node.js.',
    tags: ['Full Stack Applications', 'AI-Powered Applications', 'All'],
    caseStudy: {
      overview: 'Flirtmetrics is a performance-tracking app built for men practicing cold approach and social confidence building. Instead of guessing whether they are improving, users log every interaction and see it reflected in a weekly progress ring, a global leaderboard, and a detailed analytics dashboard. The app also includes an "Around Me" map so users can see recent activity nearby, and a logged interaction history with per-person notes like difficulty, closeness, and outcome. It turns an inherently subjective skill into something measurable and gamified.',
      goal: 'The goal was to make consistent practice feel rewarding and competitive rather than vague. Users needed a fast way to log an interaction right after it happened, a leaderboard that ranked users by country and city to create friendly competition, and an analytics view that could reveal patterns over time, such as which days or locations produced the best results. The premium, gold-accented visual identity also had to come through clearly in the UI to match the app\'s confident, high-end positioning.',
      challenge: 'The most engaging part of this build was the leaderboard and analytics system. I built the Flutter leaderboard screen with a podium-style top-three display and filterable rankings by chat, country, and city, backed by Node.js APIs that aggregated interaction counts efficiently as the user base grew. On the analytics side, I built the metrics dashboard with bar-chart visualizations of interaction trends and a scrollable interaction log showing per-person details like approach difficulty and closeness score. I also implemented the "Around Me" map feature using location services to plot nearby activity in real time. Styling every screen to match the dark, gold-accented premium theme while keeping charts and data legible required careful attention to contrast and component design throughout.',
      outcome: 'Flirtmetrics launched on the Apple App Store and gave users a genuinely gamified way to track their social growth. The leaderboard drove real engagement, with users checking rankings regularly to see where they stood. The analytics dashboard made patterns in user behavior visible for the first time, turning subjective practice into trackable data. The app continues to grow its user base around this data-driven approach to self-improvement.',
      stats: [
        { value: 'Flutter', label: 'Frontend' },
        { value: 'Node.js', label: 'Backend' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  {
    imgUrl: rentify,
    name: 'Rentify - Rent & Earn',
    projectLink: 'https://apps.apple.com/pk/app/rentify-rent-earn/id6742651750',
    codeLink: 'https://apps.apple.com/pk/app/rentify-rent-earn/id6742651750',
    title: 'Rentify - Rent & Earn',
    description: 'Rentify is a peer-to-peer rental marketplace that lets users list, discover, and rent items locally with in-app booking and payments. I worked as a Full Stack Flutter Developer using GetX and Node.js, building the product listing, in-app chat, and profile management features.',
    tags: ['Full Stack Applications', 'Mobile Apps', 'All'],
    caseStudy: {
      overview: 'Rentify is a peer-to-peer rental marketplace that lets people earn money by renting out items they already own, from electronics to furniture, instead of letting them sit unused. Renters can browse listings by category, search for specific products, and message owners directly to arrange a rental. Owners get a dedicated renter profile to manage their listed items, track requests, and communicate with renters. The app is designed to make sharing within a community as simple and trustworthy as any standard marketplace.',
      goal: 'The goal was to build a two-sided marketplace that felt equally smooth for people renting items and people listing them. Renters needed an easy way to browse and search available products with clear pricing and availability. Owners needed a simple flow to manage their rental listings and respond to interest without friction. The platform also needed built-in chat so renters and owners could coordinate pickup, condition, and terms directly inside the app, along with a straightforward account and profile management system.',
      challenge: 'Balancing two very different user needs, browsing versus listing management, in one clean interface was the central design and engineering challenge. I built the Flutter product discovery screen with category browsing, search, and a wishlist/favorites system using GetX for reactive state management, keeping the UI responsive as users filtered through listings. I implemented the in-app chat feature so renters and owners could message each other about specific items without leaving the app. I also built the profile and account management screens, including the renter profile, customer support access, and account settings, all wired to Node.js backend APIs for data persistence. Keeping listing data and chat state in sync in real time required careful state management across the GetX controllers as users navigated between screens.',
      outcome: 'Rentify launched on the Apple App Store, giving users a genuine way to earn from items they already own while making rentals more accessible for the community. The in-app chat became a key part of the experience, letting renters and owners settle details quickly without needing outside communication. The listing and browsing flow stayed fast and responsive even as the product catalog grew, and the app continues to grow its base of renters and item owners.',
      stats: [
        { value: 'Flutter', label: 'Frontend' },
        { value: 'GetX', label: 'State Management' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  /*
  {
    imgUrl: dashboard,
    name: 'Dashboard Sky - AI Chatbot for Writing',
    projectLink: 'https://play.google.com/store/apps/details?id=com.foresko.sky',
    codeLink: 'https://play.google.com/store/apps/details?id=com.foresko.sky',
    title: 'Dashboard Sky - AI Chatbot for Writing',
    description: 'Sky is an AI-powered chatbot and writing assistant for content creation and productivity. I worked as a Full Stack Developer on both frontend and backend development. My role included integrating OpenAI GPT-4 API for AI-powered conversations, content generation. I also developed APIs and optimized the overall application performance.',
    tags: ['AI-Powered Applications', 'Full Stack Applications', 'All'],
    caseStudy: {
      overview: 'Dashboard Sky is an AI-powered mobile app that combines a smart chatbot with a writing assistant to help users generate content, improve their productivity, and get instant answers. The app uses the power of GPT-4 to deliver fast, intelligent, and natural conversations. Whether users need help writing emails, social media posts, essays, or creative content, Dashboard Sky provides accurate and helpful results in seconds. It is available on both Android and iOS with a subscription-based model that gives users access to premium AI features.',
      goal: 'The goal was to build a fast, reliable, and easy-to-use AI assistant that delivers real value to users every day. The app needed to handle complex AI conversations smoothly while keeping the user experience simple and enjoyable. A key business requirement was to set up a subscription system that would generate recurring revenue through in-app purchases on both Android and iOS. The platform also needed to be scalable so it could handle a growing number of users without affecting performance or response times.',
      challenge: 'As a Full Stack Flutter Developer, I built the complete Flutter application for both Android and iOS. I integrated the OpenAI GPT-4 API to power the AI chat and content generation features, ensuring fast and accurate responses for users. I developed the backend APIs to manage user data, handle requests, and keep the system running smoothly. I also integrated RevenueCat to handle in-app purchases and subscription management across both platforms, making the payment experience simple and reliable. Throughout the project, I focused on performance optimization to ensure the app loads quickly and responds without delay, even under heavy usage.',
      outcome: 'Dashboard Sky was successfully launched on the Google Play Store and received over 10,000 downloads, showing strong demand for AI-powered writing tools. The subscription system worked reliably from day one, generating consistent revenue for the business. User feedback was positive, with many users appreciating the speed and accuracy of the GPT-4 powered responses. The app continues to grow and is performing well in production, handling real-time AI conversations at scale without any performance issues.',
      stats: [
        { value: '10K+', label: 'Downloads' },
        { value: 'GPT-4', label: 'AI Powered' },
        { value: '2', label: 'Platforms' },
      ],
      platform: 'Play Store',
    },
  },
  */
  {
    imgUrl: fusco,
    name: 'ECG Practice',
    projectLink: 'https://apps.apple.com/il/app/ecg-practice/id6740402133',
    codeLink: 'https://apps.apple.com/il/app/ecg-practice/id6740402133',
    title: 'ECG Practice',
    description: 'ECG Practice is a medical learning app designed to help users understand and practice ECG interpretation in an interactive way. I worked as a Flutter developer, building a responsive and smooth mobile interface for iOS and Android. My contribution focused on UI implementation, performance optimization.',
    tags: ['Mobile Apps', 'AI-Powered Applications', 'Firebase & Supabase', 'All'],
    caseStudy: {
      overview: 'ECG Practice is a specialized medical education app built to help nursing students, medical trainees, and healthcare professionals learn and practice ECG interpretation. Instead of relying on textbooks alone, learners get an interactive environment where they can study real ECG patterns, test their understanding through quizzes, and build confidence before entering clinical settings. The app is available on iOS and Android and is designed to be used both in classrooms and for self-study at any time.',
      goal: 'The goal was to create an app that makes a traditionally difficult and intimidating subject much easier to learn. Medical institutions needed a tool that could supplement classroom teaching with hands-on practice. The platform had to present ECG content in a clear and visually engaging way, track each user\'s progress, and give immediate feedback so students could identify and fix their weak areas quickly. It also needed to be fast and reliable so students could use it during busy hospital rotations.',
      challenge: 'The biggest technical challenge was representing ECG waveforms accurately and smoothly on a mobile screen without losing any important visual detail. I built the Flutter interface with custom rendering for ECG patterns, ensuring every waveform looked clean and medically accurate across different device sizes. I integrated Firebase to handle user accounts, store quiz results, and track learning progress in real time. The quiz engine was designed to randomize questions, prevent repetition, and give detailed explanations with every answer. I also worked on performance to keep loading times fast, since the app needed to open instantly even when used on older devices with limited resources.',
      outcome: 'The app launched successfully on the Apple App Store and received strong feedback from medical students who found the interactive approach far more engaging than traditional study methods. Users reported measurable improvement in their ECG reading confidence after regular practice sessions. Firebase analytics showed consistent daily usage, with many users returning multiple times per week. The app is now actively used by medical learners across multiple countries and continues to receive positive reviews for its accuracy and ease of use.',
      stats: [
        { value: '50+', label: 'ECG Patterns' },
        { value: 'Firebase', label: 'Real-time Data' },
        { value: '2', label: 'Platforms' },
      ],
      platform: 'App Store',
    },
  },
  {
    imgUrl: sub,
    name: 'Aditt - Earn Money',
    projectLink: 'https://apps.apple.com/us/app/aditt-earn-money/id6748659738',
    codeLink: 'https://apps.apple.com/us/app/aditt-earn-money/id6748659738',
    title: 'Aditt - Earn Money',
    description: 'Aditt Earn Money is a fintech app that enables users to earn and withdraw money securely. I worked as a Full Stack Flutter developer using Flutter, Node.js, and MongoDB. My role included payment integration, face verification using Stripe, and secure withdrawal system implementation for safe transactions.',
    tags: ['Full Stack Applications', 'All'],
    caseStudy: {
      overview: 'Aditt Earn Money is a fintech mobile app that allows users to earn real money by completing tasks, watching advertisements, and participating in sponsored campaigns. What makes Aditt stand out is its commitment to security: every user goes through identity verification before they can withdraw funds, ensuring the platform stays safe and fraud-free. The app serves both users who want to earn extra income and businesses that want to reach a verified audience through targeted campaigns.',
      goal: 'The primary business goal was to build a rewards platform that people could genuinely trust with their money. Fintech apps face a high bar for user confidence, especially when real withdrawals are involved. The platform needed a smooth earning experience that kept users engaged, a secure and straightforward withdrawal flow, and a robust identity verification system to protect all parties. The technical team also needed a backend that could scale as the user base grew and handle payment operations safely and reliably.',
      challenge: 'Security and trust were the hardest problems to solve in this project. I integrated Stripe for payment processing and built a face verification system to confirm user identities before any withdrawal could be approved. This required careful handling of sensitive user data, encryption at every step, and clear error handling for failed verification attempts. On the Flutter side, I designed the earning dashboard to clearly show balances, task history, and withdrawal status, keeping users informed at every stage. I developed the full backend using Node.js and MongoDB, building APIs for task management, earning calculations, and payment processing. I also implemented rate limiting and fraud detection logic to prevent abuse of the earning system.',
      outcome: 'Aditt launched on the Apple App Store and quickly built a loyal user base attracted by its transparent earning model and secure payment system. The face verification flow reduced fraudulent withdrawal attempts significantly, giving the business confidence in the platform\'s integrity. Users appreciated the clarity of the earning dashboard and the reliability of the withdrawal process. The backend handled increasing transaction volumes without performance issues, and the app received consistent positive reviews for its honest and secure approach to reward-based earning.',
      stats: [
        { value: 'Stripe', label: 'Payment Secured' },
        { value: 'Face ID', label: 'Verified Users' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  {
    imgUrl: nev,
    name: 'Book Jacks',
    projectLink: 'https://apps.apple.com/us/app/book-jacks/id6743059958',
    codeLink: 'https://apps.apple.com/us/app/book-jacks/id6743059958',
    title: 'Book Jacks',
    description: 'Jacks Marketplace is an on-demand driver platform for personal and business use. I worked as a Full Stack Developer using Flutter, Node.js, and MongoDB, building the driver booking flow and flexible scheduling system. I also developed backend APIs and real-time availability features with secure performance.',
    tags: ['Full Stack Applications', 'All'],
    caseStudy: {
      overview: 'Book Jacks is an on-demand driver booking platform built for both personal use and business needs. It allows users to schedule a driver for a single trip or set up recurring bookings for daily commutes, corporate travel, and special occasions. Unlike standard ride-hailing apps, Book Jacks focuses on flexibility: users can book in advance, choose preferred drivers, and manage multiple bookings from one clean dashboard. The app is designed for professionals, families, and businesses who need reliable transportation on their own schedule.',
      goal: 'The business needed a platform that felt premium and organized compared to typical ride-booking apps. Individual users wanted the ability to schedule rides in advance with full control over timing and driver preferences. Corporate clients needed a way to manage travel for multiple employees without creating separate accounts for each booking. The platform had to be fast, dependable, and easy to use for people of all technical skill levels, while the backend had to handle complex scheduling logic without conflicts or double bookings.',
      challenge: 'The most complex part of this project was building the scheduling and availability system. I developed a booking engine using Node.js and MongoDB that checks driver availability in real time, prevents scheduling conflicts, and supports both instant and pre-booked rides. On the Flutter side, I built a clean booking interface with date and time pickers, driver profile cards, and a live booking status tracker. I also created an admin-facing API layer so the business could manage drivers, view booking reports, and handle cancellations. Real-time notifications were added so both users and drivers received instant updates when a booking was confirmed, modified, or completed.',
      outcome: 'Book Jacks launched on the Apple App Store and received strong interest from both individual users and small businesses looking for reliable driver booking. The scheduling system worked accurately from day one with no double-booking issues reported during the initial rollout. Users praised the advance booking feature for giving them peace of mind when planning important trips. The backend handled concurrent bookings smoothly during peak usage, and the platform has continued to grow its driver network and user base since launch.',
      stats: [
        { value: 'Real-time', label: 'Availability' },
        { value: 'Node.js', label: 'Backend' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  {
    imgUrl: Rev,
    name: 'OGA - On Good Authority',
    projectLink: 'https://apps.apple.com/us/app/oga-i-on-good-authority/id6739505173',
    codeLink: 'https://apps.apple.com/us/app/oga-i-on-good-authority/id6739505173',
    title: 'OGA - On Good Authority',
    description: 'OGA (On Good Authority) is a social app where users share text posts, like, comment, and connect through messages. I worked as a Flutter developer using Firebase, implementing posts, interactions, and real-time updates. My role focused on authentication, feed features, and smooth user engagement.',
    tags: ['Firebase & Supabase', 'All'],
    caseStudy: {
      overview: 'OGA (On Good Authority) is a social networking app built around the idea of trusted, authentic sharing. Users create text posts, engage with others through likes and comments, and build direct connections through private messaging. The app is designed for communities that value genuine conversation over viral content. It gives users a clean, distraction-free space to share thoughts and interact with people they actually know or trust. OGA is available on iOS and runs on a Firebase backend for real-time data handling.',
      goal: 'The vision behind OGA was to create a social platform where quality of conversation matters more than follower counts or trending algorithms. The business wanted an experience that felt personal and safe, where users could share freely without noise or spam. Key goals included building a reliable real-time feed that updates without requiring a manual refresh, a direct messaging system that feels fast and private, and an authentication flow that is simple enough for everyday users while still keeping accounts secure.',
      challenge: 'Building a real-time social feed that feels smooth and responsive was the central technical challenge. I used Firebase Firestore to power live updates for posts, likes, and comments so users see activity immediately without tapping refresh. I implemented Firebase Authentication with multiple sign-in options to make the onboarding flow quick and frictionless. The Flutter UI was designed with a clean feed layout, post composer, and comment thread structure that works well on different screen sizes. I also built the private messaging system using Firestore, with read receipts and real-time message delivery. Managing data efficiently at scale required careful Firestore indexing and query optimization to keep the feed loading fast as content volume grew.',
      outcome: 'OGA launched on the Apple App Store and built an engaged early community of users who appreciated the focused and respectful tone of the platform. Real-time features worked reliably in production, with posts, likes, and messages appearing instantly across connected devices. Firebase analytics showed strong session length and return usage, indicating that users found genuine value in the conversational experience. The team received feedback praising the app\'s clean design and the fact that it stayed fast and responsive even as the community grew.',
      stats: [
        { value: 'Firebase', label: 'Real-time' },
        { value: 'Live Feed', label: 'Instant Updates' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  /*
  {
    imgUrl: yllc,
    name: 'HABO - Habit Tracker',
    projectLink: 'https://play.google.com/store/apps/details?id=com.pavlenko.Habo',
    codeLink: 'https://play.google.com/store/apps/details?id=com.pavlenko.Habo',
    title: 'HABO - Habit Tracker',
    description: 'Habo is a minimalist habit tracker designed to help users build streaks and maintain routines. I worked on updating the application using Flutter and Firebase, enhancing frontend and backend functionality. My contributions included implementing new features, improving workflows, and optimizing app performance.',
    tags: ['Firebase & Supabase', 'All'],
    caseStudy: {
      overview: 'HABO is a minimalist habit tracking app that helps users build consistent daily routines through visual streak tracking and simple check-ins. The app philosophy is that habit building should feel rewarding, not overwhelming, so HABO keeps its interface clean and focused. Users mark habits as done each day, watch their streaks grow, and get gentle reminders to stay on track. I joined the project as a Flutter and Firebase developer to upgrade the app with new features, fix performance issues, and improve the overall experience for its existing user base.',
      goal: 'The original version of HABO had a solid concept but needed significant technical work to meet modern performance and design standards. The goal was to modernize the codebase, introduce new habit management features that users had been requesting, and fix background sync and notification reliability issues that were affecting the user experience. The business also wanted to improve the streak visualization system to make progress feel more motivating and personal, without changing the minimalist identity that users already loved.',
      challenge: 'The main challenge was upgrading an existing production app without breaking features that current users depended on. I refactored the Flutter codebase to improve state management and reduce rebuild cycles that were causing stuttering on low-end devices. I updated the Firebase integration to fix sync issues where habit completions were not saving correctly when the device went offline, using Firestore offline persistence to make the app work reliably in all conditions. I added a new streak visualization feature with animated progress indicators and built a local notification system that sends personalized reminders based on each habit\'s scheduled time. I also improved the habit editing and reordering flows, which had been clunky in the original version.',
      outcome: 'The updated version of HABO was released on the Google Play Store and received a noticeable improvement in user ratings and review sentiment. Users specifically mentioned that the app now felt faster and more reliable. The offline sync fix resolved the most common complaint in previous reviews, where habit completions were sometimes lost after poor network conditions. The new streak visualization received strong positive feedback, with many users saying it made the app feel more motivating. Crash rates dropped significantly after the state management refactor, and daily active users increased following the update.',
      stats: [
        { value: 'Offline', label: 'Sync Enabled' },
        { value: 'Streak', label: 'System Rebuilt' },
        { value: 'Both', label: 'Platforms' },
      ],
      platform: 'Play Store',
    },
  },
  {
    imgUrl: qzeto,
    name: 'Kera Chrom - AI Photo Editor',
    projectLink: 'https://play.google.com/store/apps/details?id=com.kerachrom.app',
    codeLink: 'https://play.google.com/store/apps/details?id=com.kerachrom.app',
    title: 'Kera Chrom - AI Photo Editor',
    description: 'Kera Chrom is an AI-powered photo editing app for background removal and image enhancement. I worked on the backend using Node.js, Express.js, and MongoDB, developing APIs and managing application data. My role also included integrating AI image-processing services for editing and enhancement features.',
    tags: ['AI-Powered Applications', 'All'],
    caseStudy: {
      overview: 'Kera Chrom is an AI-powered photo editing app that makes professional-quality background removal and image enhancement accessible to everyday users. Instead of requiring design software or technical skill, users simply upload a photo and the app handles the rest in seconds. Background removal, color correction, and image enhancement are all powered by AI, delivering results that previously required expensive tools or a skilled editor. The app targets content creators, small business owners, and social media users who need clean and polished images quickly.',
      goal: 'The business goal was to deliver AI photo editing that feels effortless and produces results good enough to use professionally. Users needed to get from upload to finished image in under 10 seconds, with output quality that looked clean on any platform. The platform also needed a scalable backend that could process multiple images at the same time without long wait times, and a straightforward API architecture that would allow new AI features to be added quickly as the product grew.',
      challenge: 'The core challenge was building a backend that could handle AI image processing at speed and scale. I developed the API layer using Node.js and Express.js, creating endpoints for image upload, processing job management, and result retrieval. I integrated third-party AI image processing services for background removal and enhancement, and built a job queue system to handle multiple simultaneous requests without overwhelming the server. MongoDB was used to store user image history, processing metadata, and usage records. One specific problem I had to solve was large file upload handling: the system needed to accept high-resolution images without timing out or causing memory issues, which I addressed through streaming uploads and chunked processing. I also implemented proper error handling so users received clear feedback if a processing step failed, rather than a generic error screen.',
      outcome: 'Kera Chrom launched on the Google Play Store and quickly attracted users who were impressed by the quality and speed of the AI background removal. Processing times consistently stayed under 10 seconds for standard resolution images, meeting the performance target set at the start of the project. The scalable job queue handled concurrent requests smoothly during peak usage without any slowdowns. User reviews praised the accuracy of the AI cutouts, particularly for complex subjects like hair and product shots. The API architecture made it straightforward to integrate additional AI features after launch, allowing the team to ship updates faster.',
      stats: [
        { value: 'Under 10s', label: 'AI Processing' },
        { value: 'Node.js', label: 'API Backend' },
        { value: 'AI Powered', label: 'Editing Engine' },
      ],
      platform: 'Play Store',
    },
  },
  {
    imgUrl: ecommernce,
    name: 'HardLab - Gym Workout Tracker',
    projectLink: 'https://play.google.com/store/apps/details?id=app.hardlab.android',
    codeLink: 'https://play.google.com/store/apps/details?id=app.hardlab.android',
    title: 'HardLab - Gym Workout Tracker',
    description: 'HardLab is a fitness tracking app for workouts, nutrition, and progress monitoring. I worked on both frontend and backend using Flutter, Firebase, and Node.js, developing core tracking features. I also integrated AI-powered fitness insights using the OpenAI API and managing user data through Firebase.',
    tags: ['AI-Powered Applications', 'Firebase & Supabase', 'All'],
    caseStudy: {
      overview: 'HardLab is a comprehensive fitness tracking app built for serious gym users who want more than a simple log. The app lets users track workouts, monitor nutrition, and measure progress over time, all in one place. What sets it apart is an AI-powered insights layer that analyzes a user\'s training data and provides personalized recommendations for recovery, progression, and nutrition. HardLab is designed for people who are committed to improving their fitness and want data-driven guidance to do it more effectively.',
      goal: 'The goal was to create a fitness companion that combines reliable tracking with smart, personalized advice. Users needed a clean and quick way to log exercises, sets, reps, and nutrition, but the business also wanted to go further by offering AI-powered feedback that felt relevant and useful rather than generic. The platform had to store user data securely and make it easy to review historical progress through charts and summaries. A key requirement was that the AI recommendations had to feel personal and specific, not like copy-pasted fitness tips.',
      challenge: 'Combining accurate tracking with useful AI insights in a single app required careful integration work across multiple systems. I built the Flutter frontend with a workout logging interface that is fast to use during an actual gym session, where users do not have time to navigate complex menus. I integrated Firebase for real-time data sync so workouts saved on one device appeared instantly on others. For the AI layer, I connected the OpenAI API and built a prompt engineering system that sends the user\'s recent workout history and nutrition data to GPT, then formats the response as specific, actionable advice. I also developed Node.js backend APIs for aggregating progress data and generating the weekly summary reports that users receive in-app. One challenge was keeping AI response times fast enough to feel natural, which I addressed through background processing and caching common recommendation types.',
      outcome: 'HardLab launched on the Google Play Store and found a strong audience among gym enthusiasts who appreciated the combination of structured logging and intelligent feedback. Users reported that the AI recommendations felt genuinely useful and different from what they expected, with many saying it helped them break through training plateaus. Firebase sync worked reliably across devices, and the app maintained smooth performance even when loading months of historical workout data. The app has continued to grow through word of mouth within fitness communities, and the team has used the scalable API structure to roll out new tracking categories after launch.',
      stats: [
        { value: 'OpenAI', label: 'AI Insights' },
        { value: 'Firebase', label: 'Sync & Storage' },
        { value: 'Both', label: 'Platforms' },
      ],
      platform: 'Play Store',
    },
  },
  */
  /*
  {
    imgUrl: bridge,
    name: 'Chatway - Customer Support',
    projectLink: 'https://play.google.com/store/apps/details?id=com.chatway.mobile',
    codeLink: 'https://play.google.com/store/apps/details?id=com.chatway.mobile',
    title: 'Chatway - Customer Support',
    description: 'Chatway is a customer support platform that helps businesses manage website and customer conversations in real time. I worked on the frontend using Flutter, implementing live chat interfaces, push notifications, and customer interaction features. My focus was on delivering a smooth and responsive support experience for agents.',
    tags: ['Mobile Apps', 'All'],
    caseStudy: {
      overview: 'Chatway is a SaaS-based customer support platform that allows businesses to manage all their customer conversations from a single mobile app. Support agents can handle live chat from website visitors, respond to customer inquiries, and view conversation history all in real time. The platform is designed for small to mid-sized businesses that need professional customer support tools without the complexity or cost of large enterprise software. Chatway makes it easy for teams to stay connected with their customers from anywhere, at any time.',
      goal: 'Businesses using Chatway needed a mobile support experience that felt as capable as a desktop tool. Agents had to be able to respond quickly, see full conversation context, and manage multiple chats at once without missing anything. A key business requirement was reliable push notification delivery so agents would always know when a new message arrived, even when the app was in the background. The platform also needed to support multiple businesses under one system, with proper data separation so each company only sees its own conversations.',
      challenge: 'The most demanding part of building Chatway was getting the real-time chat experience right on mobile. I built the Flutter chat interface with smooth message rendering, typing indicators, and automatic scroll-to-latest behavior, creating an experience that felt responsive and natural for agents handling multiple conversations. Push notification reliability was a significant challenge: I worked on the notification pipeline to ensure messages triggered instant alerts even when the device was locked or the app was in the background, using Firebase Cloud Messaging with proper foreground and background handlers. I also built the multi-tenant conversation list, which needed to load quickly and stay accurate as new messages arrived across multiple customer threads simultaneously. Agent status management and queue assignment logic were added so team leads could see who was available and distribute incoming chats fairly.',
      outcome: 'Chatway launched on the Google Play Store and was adopted by businesses across multiple industries including retail, logistics, and services. Agents reported that the mobile app gave them the flexibility to manage customer support from anywhere, which was especially valuable for small teams without dedicated support staff. Push notification delivery worked reliably, and businesses saw a measurable improvement in their average response times after switching to the platform. The multi-tenant architecture scaled well as new businesses were onboarded, with no data isolation issues reported. The product continues to grow its business client base through referrals from satisfied early customers.',
      stats: [
        { value: 'Real-time', label: 'Live Chat' },
        { value: 'Multi-tenant', label: 'Architecture' },
        { value: 'SaaS', label: 'Platform' },
      ],
      platform: 'Play Store',
    },
  },
  */
  /*
  {
    imgUrl: lawd,
    name: 'Foodour - Food Delivery',
    projectLink: 'https://play.google.com/store/apps/details?id=pk.com.foodour',
    codeLink: 'https://play.google.com/store/apps/details?id=pk.com.foodour',
    title: 'Foodour - Food Delivery',
    description: 'Foodour is a food and grocery delivery platform that enables users to order meals and daily essentials. I worked as a Full Stack Developer using Flutter, Node.js, Express.js, and MongoDB. My role included developing frontend screens and backend APIs. I also implemented order management and real-time tracking features.',
    tags: ['Full Stack Applications', 'All'],
    caseStudy: {
      overview: 'Foodour is a full-featured food and grocery delivery platform built for the Pakistani market. Users can browse local restaurants and grocery stores, build their order from detailed menus, and get their food or essentials delivered to their door. The platform connects customers, restaurants, and delivery riders in a single ecosystem, giving each party their own experience through the app. Foodour was built to serve both individual customers looking for a quick meal and families who do their weekly grocery shopping through the platform.',
      goal: 'The goal was to build a reliable delivery platform that the local market could genuinely trust for daily orders. Restaurants needed an easy way to manage incoming orders and update their menus without calling anyone. Customers needed accurate delivery time estimates and a way to track their order in real time from the moment it was placed. The business also needed a flexible commission and order management system on the backend that could handle different pricing rules for different restaurant partners.',
      challenge: 'Building a three-sided marketplace with customers, restaurants, and riders all interacting in real time required careful system design. I developed the full Flutter customer app with a restaurant discovery screen, menu browsing, cart management, and order placement flow. On the backend, I built the order management APIs in Node.js and Express.js, handling order creation, status updates, and delivery assignment logic. MongoDB was used for flexible data storage across the menu, order, and user collections. The real-time order tracking feature was built using socket connections so customers could see their order move through the stages from restaurant acceptance to pickup to delivery without refreshing. I also built the restaurant-facing order notification system so kitchens received new orders instantly and could accept or reject them within the app.',
      outcome: 'Foodour launched on the Google Play Store and gained adoption from local restaurants and customers in its target market. The real-time tracking feature was the most praised aspect of the app, with users saying it made the waiting experience much less frustrating. Restaurant partners found the order notification system reliable and easy to use, reducing missed or late orders compared to phone-based ordering. The backend handled simultaneous orders during busy meal periods without slowdowns, and the order management APIs performed consistently at scale. Foodour continues to expand its restaurant and grocery store network following a successful initial launch.',
      stats: [
        { value: 'Real-time', label: 'Order Tracking' },
        { value: '3-sided', label: 'Marketplace' },
        { value: 'Full Stack', label: 'Node + Flutter' },
      ],
      platform: 'Play Store',
    },
  },
  {
    imgUrl: aicity,
    name: 'Instant Doctor - Telehealth',
    projectLink: 'https://apps.apple.com/pk/app/instant-doctor-telehealth/id6753775573',
    codeLink: 'https://apps.apple.com/pk/app/instant-doctor-telehealth/id6753775573',
    title: 'Instant Doctor - Telehealth',
    description: 'Instant Doctor Telehealth is a platform for connecting patients with doctors online. I worked as a Full Stack Developer on both frontend and backend development. My role included appointment booking, API integration, and patient management features. I also helped ensure a secure and smooth user experience.',
    tags: ['Full Stack Applications', 'All'],
    caseStudy: {
      overview: 'Instant Doctor is a telehealth platform that connects patients with licensed doctors through their mobile device, removing the barriers of travel, long wait times, and clinic availability. Patients can browse doctor profiles, book video appointments, share medical history, and receive prescriptions or referrals all within the app. The platform serves patients who need quick access to medical advice without visiting a physical clinic, as well as doctors who want to expand their practice through remote consultations.',
      goal: 'The core goal was to make quality medical care available to patients who could not easily reach a clinic, whether due to location, time, or physical limitations. The platform had to make patients feel secure sharing sensitive health information and confident in the credentials of the doctors they consulted. Appointment scheduling needed to be flexible enough to accommodate doctors with varying availability, while still giving patients predictable and reliable booking times. The business also needed a secure data handling system that treated patient privacy as the top priority.',
      challenge: 'Healthcare apps carry a much higher responsibility than typical consumer apps because they handle sensitive personal and medical data. I designed the backend APIs in a way that kept patient data encrypted and access-controlled at every level, ensuring only the assigned doctor could view a patient\'s information during a consultation. I built the Flutter appointment booking flow with real-time calendar availability, so patients always see accurate slots without any double booking risk. The patient profile system allowed users to store their medical history, ongoing medications, and allergy information securely within the app, with data passed to the doctor before each consultation for context. I also integrated push notifications to remind patients of upcoming appointments and notify doctors when new bookings were confirmed. Throughout the project, I worked closely with the team to test edge cases in the booking and consultation flows to ensure nothing would fail during an actual medical interaction.',
      outcome: 'Instant Doctor launched on the Apple App Store in Pakistan and received a strong initial response from patients in areas with limited clinic access. Doctors reported that having patient history available before the call made consultations more efficient and resulted in better quality advice. The appointment booking system worked without errors through the initial launch period, and no data security issues were reported. Patients praised the app for being straightforward to use even for people who are not tech-savvy, which was an important goal given the broad age range of the target audience. The platform has grown its doctor network steadily since launch.',
      stats: [
        { value: 'Encrypted', label: 'Patient Data' },
        { value: 'Live Booking', label: 'Appointments' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  {
    imgUrl: nft,
    name: 'AI Docu Chatbot',
    projectLink: 'https://apps.apple.com/us/app/ai-docu-chatbot/id6749878878',
    codeLink: 'https://apps.apple.com/us/app/ai-docu-chatbot/id6749878878',
    title: 'AI Docu Chatbot',
    description: 'AI Docu Chatbot is an AI-powered assistant for document analysis and intelligent conversations. I worked as a Full Stack Developer, building both frontend and backend functionality. My role included integrating the OpenAI API, developing APIs, and implementing AI-driven chat and document processing features.',
    tags: ['AI-Powered Applications', 'Full Stack Applications', 'All'],
    caseStudy: {
      overview: 'AI Docu Chatbot is an intelligent document assistant that allows users to upload any PDF or text document and have a natural conversation with it. Instead of reading a long report or contract from start to finish, users can simply ask questions in plain language and receive precise, context-aware answers pulled directly from their document. The app is designed for professionals, students, and researchers who work with large volumes of written content and need a faster way to extract key information without missing anything important.',
      goal: 'The product goal was to make documents interactive rather than passive. Businesses dealing with legal contracts, research papers, or lengthy reports needed a way to find information faster without hiring additional staff or spending hours reading. The platform needed to handle various document formats reliably, process them quickly, and deliver answers that were accurate and traceable back to the source document. A key requirement was that the AI should not hallucinate or invent information: every answer had to be grounded in what the document actually contained.',
      challenge: 'The hardest technical challenge was making AI conversations accurate and contextually relevant when a document could be hundreds of pages long. I built a document parsing and chunking system on the backend that breaks uploaded documents into manageable sections, embeds them using OpenAI\'s embedding API, and stores them for fast retrieval. When a user asks a question, the most relevant document sections are retrieved and sent to GPT-4 as context, ensuring answers stay grounded in the actual document content. I developed this backend pipeline using Node.js, handling PDF extraction, embedding generation, and context retrieval in a single request flow. On the Flutter side, I built the document upload interface with progress feedback and a clean chat UI where users can see which part of the document each answer came from. I also implemented conversation memory so follow-up questions worked naturally without the user needing to repeat context.',
      outcome: 'AI Docu Chatbot launched on the Apple App Store and attracted users from legal, academic, and business fields who needed a smarter way to work with documents. The accuracy of the AI answers was the most praised feature: users frequently noted that answers came with correct citations from the original document, which made the tool trustworthy for professional use. Processing times were fast even for large files, and the chat interface felt natural and easy to use. The embedding and retrieval architecture scaled well as the number of stored documents grew, with no degradation in answer quality or response speed.',
      stats: [
        { value: 'GPT-4', label: 'AI Engine' },
        { value: 'Cited', label: 'Answers' },
        { value: 'iOS', label: 'Platform' },
      ],
      platform: 'App Store',
    },
  },
  {
    imgUrl: zimo,
    name: 'One Way Taxi Driver',
    projectLink: 'https://play.google.com/store/apps/details?id=com.gopaytaxi.mobile',
    codeLink: 'https://play.google.com/store/apps/details?id=com.gopaytaxi.mobile',
    title: 'One Way Taxi Driver',
    description: 'This is a ride-hailing platform that enables users to book and manage rides seamlessly. I worked as a Full Stack Developer on both frontend and backend development. My role included developing booking flows, backend APIs, and real-time ride management features. I also focused on performance, scalability, and smooth user experience.',
    tags: ['Full Stack Applications', 'All'],
    caseStudy: {
      overview: 'One Way Taxi Driver is a ride-hailing platform built specifically for one-way intercity and airport transfer bookings. Unlike regular taxi apps that focus on short local rides, this platform serves passengers who need a driver for longer journeys with a fixed start point and destination. Users book their ride in advance, see an upfront price with no surge pricing, and travel knowing the driver is committed to the full journey. The platform serves both the passenger app and the driver-facing management system, covering the full ride lifecycle from booking to completion.',
      goal: 'The business needed a ride platform that felt more predictable and trustworthy than standard on-demand taxi apps for longer trips. Passengers booking airport transfers or intercity rides wanted fixed prices, confirmed drivers, and real-time trip visibility. Drivers needed a clear job list with route details, passenger information, and earnings tracking all in one place. The platform had to handle advance bookings reliably, send reminders to both parties as the trip time approached, and provide a clear record of completed rides for payment reconciliation.',
      challenge: 'The biggest challenge was building a real-time location tracking system that worked reliably over long distances and varying network conditions. I implemented GPS tracking using location services in Flutter, sending position updates to the backend so passengers could follow their driver\'s progress on a live map. I developed the backend booking engine in Node.js to handle advance reservations, driver assignment, and trip state management across the full journey lifecycle. The fare calculation system was built to produce fixed upfront prices based on route distance, so passengers always knew the cost before confirming. I also built the driver\'s job management interface in Flutter, showing scheduled pickups, route details, and turn-by-turn navigation integration. Push notification timing was critical in this app: reminders had to fire at the right intervals before pickup so neither the driver nor the passenger missed their booking.',
      outcome: 'One Way Taxi Driver launched on the Google Play Store and gained strong adoption among passengers who travel regularly for airport transfers and business trips. The fixed pricing model was the biggest selling point: users repeatedly cited it as the reason they preferred the app over competitors. Real-time GPS tracking worked reliably on long routes, and location updates remained consistent even in areas with weaker network coverage due to the efficient update batching I implemented. The booking system handled high volumes during peak travel periods without performance issues, and driver earnings tracking was accurate and transparent. The platform continues to expand its driver network across new cities.',
      stats: [
        { value: 'Fixed Price', label: 'No Surge' },
        { value: 'Live GPS', label: 'Tracking' },
        { value: 'Both', label: 'Platforms' },
      ],
      platform: 'Play Store',
    },
  },
  */

  // Add more static data entries as needed.
];

const Work = () => {
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedWork ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedWork]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works); // Show all works when 'All' is selected.
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="work">
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [-40, 0] }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        className="head-text"
      >
        My Creative <span>Portfolio</span>
      </motion.h2>

      <div className="app__work-filter">
        {['All', 'Full Stack Applications', 'Firebase & Supabase', 'AI-Powered Applications', 'Mobile Apps'].map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: [0, 1], scale: [0.7, 1] }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            viewport={{ once: false, amount: 0.5 }}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <motion.div
            className="app__work-item app__flex"
            key={index}
            whileInView={{ opacity: [0, 1], y: [60, 0] }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.12, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.15 }}
            onClick={() => work.caseStudy && setSelectedWork(work)}
            style={{ cursor: work.caseStudy ? 'pointer' : 'default' }}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>

              {work.caseStudy && (
                <div className="app__work-casebadge">Case Study</div>
              )}
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedWork && selectedWork.caseStudy && (
          <motion.div
            className="app__casestudy-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="app__casestudy-modal"
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header image */}
              <div className="app__casestudy-header">
                <img src={selectedWork.imgUrl} alt={selectedWork.name} />
                <div className="app__casestudy-header-overlay">
                  <h2>{selectedWork.title.trim()}</h2>
                  <div className="app__casestudy-tags">
                    {selectedWork.tags.filter((t) => t !== 'All').map((tag, i) => (
                      <span key={i} className="app__casestudy-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <button className="app__casestudy-close" onClick={() => setSelectedWork(null)}>
                  <HiX />
                </button>
              </div>

              {/* Body */}
              <div className="app__casestudy-body">

                <div className="app__casestudy-section">
                  <div className="app__casestudy-label overview">Overview</div>
                  <p>{selectedWork.caseStudy.overview}</p>
                </div>

                <div className="app__casestudy-section">
                  <div className="app__casestudy-label goal">Business Goal</div>
                  <p>{selectedWork.caseStudy.goal}</p>
                </div>

                <div className="app__casestudy-section">
                  <div className="app__casestudy-label challenge">Challenge & Solution</div>
                  <p>{selectedWork.caseStudy.challenge}</p>
                </div>

                <div className="app__casestudy-section">
                  <div className="app__casestudy-label outcome">Outcome</div>
                  <div className="app__casestudy-stats">
                    {selectedWork.caseStudy.stats.map((stat, i) => (
                      <div key={i} className="app__casestudy-stat">
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <p>{selectedWork.caseStudy.outcome}</p>
                </div>

                <a
                  href={selectedWork.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="app__casestudy-cta"
                >
                  View Live App →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
