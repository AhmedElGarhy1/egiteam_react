import React from "react";

const GroupBoxes = ({
  groups,
  setGroup,
  setCurrentGroupName,
  setCurrentImage,
}) => {
  return (
    <div>
      <div className="container">
        <div className="group-boxs">
          {groups.map((box) => (
            <div
              key={box.name}
              data-aos-duration="1000"
              data-aos={box.animation}
              className="group">
              <div style={{ margin: "auto", width: "fit-content" }}>
                <img
                  style={{ maxWidth: "330px" }}
                  src={box.img}
                  alt={box.name}
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  setGroup((prev) => {
                    if (prev && prev.name === box.name) return null;
                    setCurrentImage(box.cards[0].img);
                    setCurrentGroupName(box.cards[0].title);
                    return box;
                  });

                  setTimeout(() => {
                    if (document.getElementById("boxes")) {
                      const y = document.getElementById("boxes").offsetTop;
                      window.scrollTo(0, y - 100);
                    }
                  }, 100);
                }}
                className="btn js-btn">
                {box.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupBoxes;
