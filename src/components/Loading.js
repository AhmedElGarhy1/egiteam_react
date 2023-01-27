import React, { useEffect, useRef, useState } from "react";
import whiteLogo from "../images/team-logo/Logo-White.png";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loaderWrapper = useRef();

  // control loading section display it and remove it with position
  useEffect(() => {
    setTimeout(() => {
      // after a period move the loading section to the top
      loaderWrapper.current.style.top = "-130%";
      document.body.style.overflowY = "auto";

      // after 2 second delete the loading section from dom
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, 5000);

    // if something happened and the loading didn't disappear
    setTimeout(() => {
      setIsLoading(false);
    }, 12000);
  }, []);

  return (
    <>
      {isLoading && (
        <div ref={loaderWrapper} id="loader-wrapper">
          <div className="loader">
            <img src={whiteLogo} alt="loading" />
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
