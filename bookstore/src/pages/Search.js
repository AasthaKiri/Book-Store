// import PropTypes from 'prop-types'
import React ,{ useState} from 'react'
import searchlogo from './Style-guide/HTML - TatvaSoft/images/search.svg'

function Search() {

    const [search , setSearch] = useState("")
    console.log(search);

        return (
            <>
                <div className="search">
                    <input type="text" placeholder="What are you looking for..." id='search' onChange={(e) => {setSearch(e.target.value)}} />
                        <div className="btns">
                            <button><img src={searchlogo} alt="" />Search</button>
                            
                        </div>
                </div>
            </>
        )
    }


export default Search