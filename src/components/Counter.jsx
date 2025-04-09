import React, { useEffect, useRef, useState } from 'react';
import { FaUserMd, FaHospital, FaUserNurse, FaSmile } from 'react-icons/fa';
import '../styles/counte.css'; // your custom styles

const MultiCountUp = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const containerRef = useRef(null);

  const stats = [
    { end: 120, title: 'Doctors', subtitle: 'Certified Experts', icon: <FaUserMd size={35} /> },
    { end: 45, title: 'Hospitals', subtitle: 'Partner Facilities', icon: <FaHospital size={35} /> },
    { end: 200, title: 'Nurses', subtitle: 'Qualified Staff', icon: <FaUserNurse size={35} /> },
    { end: 1500, title: 'Happy Patients', subtitle: 'Satisfied Feedback', icon: <FaSmile size={35} /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    let currentCounts = [0, 0, 0, 0];
    const increments = stats.map((stat) => Math.ceil(stat.end / steps));

    const timer = setInterval(() => {
      let updated = currentCounts.map((val, i) => {
        let newVal = val + increments[i];
        return newVal >= stats[i].end ? stats[i].end : newVal;
      });

      setCounts(updated);
      currentCounts = updated;

      if (updated.every((val, i) => val >= stats[i].end)) {
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <div ref={containerRef} className="container py-5">
      <div className="row text-center">
        {stats.map((stat, i) => (
          <div key={i} className="col-md-3 col-sm-6 mb-4">
            <div className="count-card p-4  rounded h-100">
              <h3 className="count-value">{counts[i]}+</h3>
              <p className="count-title text-center fw-bold">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiCountUp;
