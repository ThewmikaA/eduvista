import React from "react";
import "./CourseDetails.css";

function CourseDetails({ title, price, level, numReviews, numSubscribers, publishedDate, addToCart }) {
  let levelClassName = "";
  switch (level.toLowerCase()) {
    case "beginner":
      levelClassName = "beginner-level";
      break;
    case "intermediate":
      levelClassName = "intermediate-level";
      break;
    case "advanced":
      levelClassName = "advanced-level";
      break;
    default:
      levelClassName = "";
  }


  const randomPublishedDate = new Date(
    new Date() - Math.floor(Math.random() * 100) * 24 * 60 * 60 * 1000
  ).toLocaleDateString();
