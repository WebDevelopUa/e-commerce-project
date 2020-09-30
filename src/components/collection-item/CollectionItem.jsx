import React from "react";
import {CustomButton} from "../custom-button/CustomButton";
import {addItem} from "../../redux/cart/cartActions";
import {connect} from "react-redux";
import './CollectionItem.scss'

const CollectionItem = ({item, addItem}) => {
    const {name, price, image} = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${image})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)}>Add 2 Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
