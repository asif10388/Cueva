import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <>
      {/* <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div> */}

      <div class="md:flex md:flex-wrap mt-8 justify-center items-center">
        {" "}
        {sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
