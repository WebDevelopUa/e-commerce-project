import React from "react";
import {connect} from "react-redux";
import MenuItem from "../menu-item/MenuItem"
import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directorySelectors";
import './Directory.scss'

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(
            ({id, ...restProps}) => <MenuItem key={id} {...restProps} />
        )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)