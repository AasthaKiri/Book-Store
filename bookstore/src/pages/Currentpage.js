// import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom';
import currpagelogo from './Style-guide/HTML - TatvaSoft/images/breadcrumb-arrow.svg'

function Currentpage(){
        return (
            <>
                <div className="currentPage">
                    <p><a href="/">Home</a></p>
                    <p>&nbsp;<img src={currpagelogo} alt="" /></p>
                    <p><a href="/" className="current">Login</a></p>
                </div>
            </>
        )
    }


export default Currentpage