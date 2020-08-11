import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectShopCollections,
  selectCollectionForPreview,
} from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";

import "./collections-overview.styles.scss";

const collectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collectionProps }) => (
      <PreviewCollection key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(collectionsOverview);
