import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {withSpinner} from "../with-spinner/withSpinner";
import CollectionsOverview from "./CollectionsOverview";
import {selectIsCollectionFetching} from "../../redux/shop/shopSelectors";

const mapStateToProps = createStructuredSelector({
    isLoadingWithSpinner: selectIsCollectionFetching
})

export const collectionsOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionsOverview)
