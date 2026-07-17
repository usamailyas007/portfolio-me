import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import codexenix from "../../assets/codexenix.svg";
import libas from "../../assets/libas.svg";
import devconst from "../../assets/devconst.png";
import zysoftec from "../../assets/Untitled design (1).png";
import fuzionDev from "../../assets/Untitled design (3).png";
import "./Skills.scss";

const Experience = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "linear-gradient(135deg, #C6E8A0, #A8D96C)",
        color: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #A8D96C" }}
      date="Oct 2025 - Present"
      icon={
        <div className="expIcon">
          <img src={codexenix} alt="Code Xenix" />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">
        Senior Mobile App Developer
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        Code Xenix - Lahore, Pakistan
      </h4>
      <p>
        Leading development of the Nova Health mobile application using Flutter,
        delivering scalable and user-friendly healthcare features. Integrating
        RESTful APIs and implementing real-time chat and calling features using
        WebSockets and VoIP technologies, while collaborating closely with
        backend and design teams to ensure smooth feature delivery and optimal
        app performance.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "linear-gradient(135deg, #E9D6BC, #D8BE98)",
        color: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #D8BE98" }}
      date="Mar 2025 - June 2025"
      icon={
        <div className="expIcon">
          <img src={libas} alt="LIBAS International FZCO" />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">
        Full Stack Flutter Developer (Part-Time)
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        LIBAS International FZCO - Dubai, UAE
      </h4>
      <p>
        Developed the &ldquo;Libas &ndash; Buy &amp; Sell Preloved&rdquo;
        e-commerce app serving 20,000+ users worldwide. Implemented chat,
        bidding, push notifications, and Firebase Cloud Functions for seamless
        real-time performance, increasing overall revenue by 20% through
        optimized Flutter and Provider state management integration.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "linear-gradient(135deg, #FCE1E7, #F7C2CE)",
        color: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #F7C2CE" }}
      date="Nov 2024 - Oct 2025"
      icon={
        <div className="expIcon">
          <img src={devconst} alt="DevConst" />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">Flutter Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">
        DevConst - Islamabad, Pakistan
      </h4>
      <p>
        Built multiple real-time projects including ride-booking and social
        media applications from design to deployment. Collaborated with senior
        developers in an agile environment, contributing to sprint planning and
        code reviews, and improved team productivity by 30% and app performance
        by 25% through optimized Flutter and Node.js integration.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "linear-gradient(135deg, #a1e22c, #759831)" }}
      contentArrowStyle={{ borderRight: "7px solid  #a1e22c" }}
      date="Jan 2024 - Nov 2024"
      icon={
        <div className="expIcon">
          <img src={zysoftec} alt="Paragon Logics IT Solution & Company" />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">Mobile App Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">
        Paragon Logics IT Solution & Company - Faisalabad, Pakistan
      </h4>
      <p>
        Completed multiple projects integrating RESTful APIs, MySQL, and Node.js
        server-side logic. Contributed to LIGO (Ride Booking App) and Go Duckin
        (Map-based Social App), improving reliability and user engagement while
        enhancing full-stack performance by bridging the Flutter frontend with
        an optimized backend API architecture.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Apr 2023 - Dec 2023"
      icon={
        <div className="expIcon">
          <img src={fuzionDev} alt="FATECH & SOLUTIONS" />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">
        Junior Flutter Developer
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        FATECH & SOLUTIONS - Faisalabad, Pakistan
      </h4>
      <p>
        Built and integrated Flutter applications with backend APIs and
        databases for real-time data processing. Delivered features across
        e-commerce, service-providing, and metaverse application projects,
        developing strong foundations in debugging, code optimization, and
        mobile UI best practices.
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

export default Experience;
