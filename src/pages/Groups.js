import React, { useEffect, useState } from "react";

import { groups } from "../data";
import { Landing } from "../components";
import GroupCard from "../components/groups/GroupCard";
import GroupBoxes from "../components/groups/GroupBoxes";

const Groups = () => {
  const [group, setGroup] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentGroupName, setCurrentGroupName] = useState(null);

  return (
    <>
      <Landing />
      <section id="desc">
        <div className="groups">
          <div
            style={{
              backgroundColor: "hsl(0deg 0% 85% / 20%)",
            }}>
            <div className="container" style={{ paddingTop: "20px" }}>
              <h2 className="main-heading">Our Groups</h2>
              <div className="description">
                <p
                  style={{ textAlign: "center" }}
                  data-aos-duration="800"
                  data-aos="zoom-in">
                  {groups.intro}
                </p>
              </div>
            </div>
          </div>
          
          <GroupBoxes 
            groups={groups.groups} 
            setGroup={setGroup} 
            setCurrentGroupName={setCurrentGroupName} 
            setCurrentImage={setCurrentImage}
            />

          {group && (
            <GroupCard
              group={group}
              currentGroupName={currentGroupName}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              setCurrentGroupName={setCurrentGroupName}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Groups;
