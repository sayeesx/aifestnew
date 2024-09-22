import React, { useEffect, useState } from "react";
import styles from "../styles/About.module.css";

const TimelineItem = ({ title, description, isActive, progress }) => (
  <div className={`${styles.timelineItem} ${isActive ? styles.active : ''}`}>
    <div className={`${styles.node} ${progress === 100 ? styles.filled : ''}`}>
      <div 
        className={styles.nodeProgress} 
        style={{ height: `${progress}%` }}
      ></div>
    </div>
    {isActive && (
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    )}
  </div>
);

const About = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [progress, setProgress] = useState(0);

  const timelineEvents = [
    {
      title:  "thanks for visiting our website.",
    },
    {
      title: "incase you havent registered for the ai fest please do it ASAP!!",
    },
    {
      title: "Feel free to report issue/complaints at the contact us page.",
      
    },
    {
      title: "visit us again",
      
    }
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(progressInterval);
        return 100;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [activeNode]);

  useEffect(() => {
    if (progress === 100) {
      const nodeInterval = setTimeout(() => {
        setActiveNode((prevNode) => {
          if (prevNode < timelineEvents.length - 1) {
            setProgress(0);
            return prevNode + 1;
          }
          return prevNode;
        });
      }, 500);

      return () => clearTimeout(nodeInterval);
    }
  }, [progress]);

  const getNodeProgress = (index) => {
    if (index < activeNode) return 100;
    if (index === activeNode) return progress;
    return 0;
  };

  const getLineProgress = () => {
    const baseProgress = (activeNode / (timelineEvents.length - 1)) * 100;
    const currentNodeProgress = (progress / 100) * (100 / (timelineEvents.length - 1));
    return baseProgress + currentNodeProgress;
  };

  return (
    <div className={styles.timeline}>
      <div className={styles.pipe}>
        <div 
          className={styles.greenLine} 
          style={{ height: `${getLineProgress()}%` }}
        ></div>
      </div>
      {timelineEvents.map((event, index) => (
        <TimelineItem 
          key={index}
          {...event}
          isActive={activeNode >= index}
          progress={getNodeProgress(index)}
        />
      ))}
    </div>
  );
};

export default About;