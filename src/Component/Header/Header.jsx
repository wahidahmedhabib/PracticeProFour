import React, { useEffect, useState } from 'react'
import "./Header.css"
const Header = ({ searchFood, find, setfind }) => {

    // const [btn, setbtn] = useState('all')
    const [btn, setbtn] = useState(find)



    const typeSearch = (type) => {
        // console.log(type)

        const filtered = find?.filter((food) => {
            // return food.type.toLowerCase().includes(type.toLowerCase())
            return food.type == type
            // setfind(newdata)
            // console.log(newdata)
        })
        setfind(filtered)
    }


    // console.log(find)

    return (
        <div className='header'>
            <div className="h_logoSec">
                <div className='logo' >F<span>oo</span>dy Z<span>o</span>ne</div >
                <div className='h_inp'>
                    <input
                        onChange={searchFood}
                        type="text"
                        placeholder='Search Food...' />
                </div>
            </div>
            <div className="h_btns">
                <div onClick={() => setfind(btn)} className="h_btns_li">All</div>
                <div onClick={() => typeSearch("lunch")} className="h_btns_li">lunch</div>
                <div onClick={() => typeSearch('breakfast')} className="h_btns_li">breakfast</div>
                <div onClick={() => typeSearch('dinner')} className="h_btns_li">dinner</div>
            </div>
        </div>
    )
}

export default Header