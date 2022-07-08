// import PropTypes from 'prop-types'
import React from 'react'
import searchlogo from './Style-guide/HTML - TatvaSoft/images/search.svg'

function Search() {


        return (
            <>
                <div className="search">
                    <input type="text" placeholder="What are you looking for..." />
                        <div className="btns">
                            <button><img src={searchlogo} alt="" />Search</button>
                            <button>Cancel</button>
                        </div>
                </div>
            </>
        )
    }


export default Search