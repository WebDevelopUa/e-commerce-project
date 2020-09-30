import React, {Component} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {fetchCollectionsStartAsync} from "../../redux/shop/shopActions";
import {collectionsOverviewContainer} from "../../components/collections-overview/collectionOverviewContainer";
import {collectionPageContainer} from "../collection/collectionPageContainer";

class ShopPage extends Component {
    collectionsOverviewContainer;

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync()
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={collectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={collectionPageContainer}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)