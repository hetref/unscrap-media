import React from "react";

const SectionTitle = ({ title, subtitle, classes, excerpt }) => {
  return (
    <div className={classes}>
      <h2 className="text-muted uppercase tracking-wide mb-2">{subtitle}</h2>
      {/* <h1 className="text-5xl font-bold leading-[58px]">{title}</h1> */}
      <h1
        className="title_sec_heading text-[2rem] md:text-[2.7rem] tracking-wide font-bold md:leading-[50px] leading-[40px]"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p>{excerpt}</p>
    </div>
  );
};

export default SectionTitle;
