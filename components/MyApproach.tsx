import React from "react";
import ApproachCard from "./ui/ApproachCard";
import Bouncyballs from "./ui/bouncyballs";
import SectionHeading from "./ui/SectionHeading";

const MyApproach = () => {
  return (
    <div className="relative flex flex-col p-10 gap-20 max-w-7xl mx-auto">
      <SectionHeading
        topOne="top-40"
        topTwo="top-30"
        rightOne="right-20"
        rightTwo="left-20"
        title="My Approach"
        description="Find out how I work to best serve your needs."
      />
      <ApproachCard
        title="Listen First, Advise Second"
        description="Understanding your unique needs and goals is always my starting point. I believe every client has a story, and I take the time to listen before offering any advice."
        details="Whether you're a first-time buyer or seasoned investor, your journey starts with a conversation where you feel heard and understood."
        imageOnRight={false}
        imageSrc="/approach1.jpg"
        imageAlt="Listen First Image"
      />

      <ApproachCard
        title="Real Market Data"
        description="Every decision is backed by comprehensive market analysis and current trends. I use cutting-edge tools and real-time data to give you the complete picture."
        details="No guesswork, no outdated information—just accurate insights that help you make confident decisions in Singapore's dynamic property market."
        imageOnRight={true}
        imageSrc="/approach2.jpg"
        imageAlt="Listen First Image"
      />

      <ApproachCard
        title="Clear Communication"
        description="No jargon, no pressure—just honest guidance every step of the way. I explain complex processes in simple terms and keep you informed throughout your journey."
        details="You'll always know what's happening, what comes next, and why each step matters for achieving your property goals."
        imageOnRight={false}
        imageSrc="/approach2.png"
        imageAlt="Listen First Image"
      />

      <ApproachCard
        title="Personalized Marketing"
        description="Every property gets a tailored strategy to attract the right buyers. From professional photography to targeted digital campaigns, I ensure maximum exposure."
        details="Your property deserves a marketing approach as unique as it is—designed to highlight its best features and reach qualified buyers."
        imageOnRight={true}
        imageSrc="/approach1.jpg"
        imageAlt="Listen First Image"
      />
    </div>
  );
};

export default MyApproach;
