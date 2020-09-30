import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shopSelectors";
import {withSpinner} from "../../components/with-spinner/withSpinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
    isLoadingWithSpinner: state => !selectIsCollectionsLoaded(state)
})

export const collectionPageContainer = compose(connect(mapStateToProps), withSpinner)(CollectionPage)