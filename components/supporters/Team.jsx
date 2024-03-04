import Image from "next/image";
import React from "react";

const Team = ({ thumb, name, designation }) => {
  return (
    <div>
      <div className="new-team-members-list">
        <Image src={thumb} alt="images" width={200} height={200} />
        <h3 className="title">{name}</h3>
        <span>{designation}</span>
      </div>
    </div>
  );
};

export default Team;
