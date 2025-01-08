import React from "react";
import ReviewCard from "./ReviewCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { marker } from "framer-motion/client";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200 80%",
        end: "bottom 80%",
        scrub: true,
        markers: false,
      },
      x: -1000,
    });
  });
  const reviews = [
    {
      content:
        "Brilliant developer who transformed our vision into reality. The website performance metrics are off the charts!",
      name: "Isabella Kumar",
      imgSrc: "/src/assets/people-1.jpg",
      company: "ByteVision",
    },
    {
      content:
        "Incredible attention to detail in both frontend and backend development. Our e-commerce site has never run smoother.",
      name: "Marcus Chen",
      imgSrc: "/src/assets/people-2.jpg",
      company: "QuantumStack",
    },
    {
      content:
        "From concept to deployment, the entire process was seamless. The responsive design works flawlessly across all devices.",
      name: "Derek Foster",
      imgSrc: "/src/assets/people-3.jpg",
      company: "AlphaSync",
    },
    {
      content:
        "Exceeded our expectations with innovative solutions and cutting-edge technologies. A true professional in every sense.",
      name: "James Fletcher",
      imgSrc: "/src/assets/people-4.jpg",
      company: "InnovateFlow",
    },
    {
      content:
        "Outstanding technical expertise combined with great project management skills. Delivered our platform ahead of schedule.",
      name: "Priya Patel",
      imgSrc: "/src/assets/people-5.jpg",
      company: "FusionLabs",
    },
    {
      content:
        "Remarkable problem-solving abilities and clean, maintainable code. Our web application performance improved by 200%.",
      name: "Jack Keeper",
      imgSrc: "/src/assets/people-6.jpg",
      company: "ApexTech",
    },
  ];
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">What clients say about our work</h2>
        <div className="flex items-stretch gap-3 w-fit scrub-slide">
          {reviews.map(({ content, name, company, imgSrc }, key) => (
            <ReviewCard
              name={name}
              reviews={content}
              company={company}
              img={imgSrc}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
