import React from "react";
import "./Media.css";
import Tilt from "react-vanilla-tilt";
import Iframe from "react-iframe";
const Media = () => {
  return (
    <div>
      <h1 className="header-text">Know more about Well Being</h1>
      <div className="container mx-auto">
        <Tilt className="card" options={{ speed: 400, max: 25 }}>
          <div className="content">
            <Iframe
              width="auto"
              height="240"
              src="https://www.youtube.com/embed/Aa0mVQgoWLg?si=q3Ea2XqmX9-JTSW1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
            <div className="topic text-lg font-semibold">What Can Schools Do to Support Students' Well-Being? </div>
            <div className="description">

              This talk was given at a TEDx event using the TED conference format but independently organized by a local community
            </div>
            <a
              href="https://www.youtube.com/embed/Aa0mVQgoWLg?si=q3Ea2XqmX9-JTSW1"
              className="text-sm underline underline-offset-2"
            >
              Know More
            </a>
          </div>
        </Tilt>
        <Tilt className="card" options={{ speed: 400, max: 25 }}>
          <div className="content p-2">
            <Iframe
              width="auto"
              height="200"
              src="https://www.youtube.com/embed/_gJ5V525SCk?si=-Eihrp7xzUWzy1Fq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
            <div className="topic text-lg font-semibold">The Five Ways to Wellbeing - boosting mental wellbeing</div>
            <div className="description">
              The Five Ways to Wellbeing - researched and developed by the New Economics Foundation for the Department of Health and Social Care - are five simple things we can implement in our daily lives to improve our mental and physical wellbeing.
            </div>
            <a
              href="https://www.youtube.com/embed/_gJ5V525SCk?si=-Eihrp7xzUWzy1Fq"
              className="text-sm underline underline-offset-2 p-9"
            >
              Know More
            </a>
          </div>
        </Tilt>
        <Tilt className="card" options={{ speed: 400, max: 25 }}>
          <div className="content p-2">
            <Iframe
              width="auto"
              height="240"
              src="https://www.youtube.com/embed/Bk2-dKH2Ta4?si=GPQSpxQmnXP8dPbL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
            <div className="topic text-lg font-semibold">How to Manage Stress as a Student</div>
            <div className="description">
              As a premed or medical student, you’re more than familiar with stress. Whether it’s finances, academic strain, or pressure from family, friends, and peers, you’re not alone. Here’s how to deal with stress as a student. </div>
            <a
              href="https://www.youtube.com/embed/Bk2-dKH2Ta4?si=GPQSpxQmnXP8dPbL"
              className="text-sm underline underline-offset-2"
            >
              Know More
            </a>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Media;