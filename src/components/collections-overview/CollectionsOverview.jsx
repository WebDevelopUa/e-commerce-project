import React from "react";
import CollectionPreview from "../collection-preview/CollectionPreview";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shopSelectors";
import './CollectionsOverview.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(
            ({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />
        )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)