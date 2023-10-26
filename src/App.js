import "./index.css";
import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  children: PropTypes.string.isRequired,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
};

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

/* 
   The TextExpander component will have the following functionalities:
    - Display collapsed content by default (can be overridden by an expanded prop).
    - Show more content when a "Show more" button is clicked.
    - Show less content when a "Show less" button is clicked.
*/
function TextExpander({
  children, // The text to display.
  collapsedNumWords = 30, // Default number of words to display is 30.
  expandButtonText = "Show more", // Default button text is "Show more".
  collapseButtonText = "Show less", // Default button text is "Show less".
  buttonColor = "blue", // Default button color is blue.
  expanded = false, // Default state is collapsed.
  className = "", // Default class name is an empty string.
}) {
  // Define state to keep track of whether the text is expanded or collapsed.
  // The default state is collapsed.
  const [isExpanded, setIsExpanded] = useState(expanded);

  // Define a variable to hold the number of words to display.
  // If the text is expanded, display all the words.
  // Otherwise, display the first 30 words.
  const displayedContent = isExpanded
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

  // Define a function to toggle the expanded state.
  function toggleExpanded() {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  }

  return (
    <div className={`text-expander ${className}`}>
      <p>{displayedContent}</p>
      <button
        className="text-expander-button"
        onClick={toggleExpanded}
        style={{ backgroundColor: buttonColor, outline: "none" }}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
