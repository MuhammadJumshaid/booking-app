import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import SearchItem from '../../Components/searchItem/SearchItem'

export default function List() {

  const location = useLocation()
  const [Destination, setDestination] = useState(location.state.Destination)
  const [options, setOptions] = useState(location.state.options)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
 
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input type='text' placeholder='Destination'/>
            </div>
            <div className='lsItem'>
              <label>Check-in-date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate , "MM/dd/yyyy")}  `}</span>
              {openDate && (
              <DateRange 
              onChange={item=>setDate([item.selection]) }
              minDate= {new Date()}
              ranges={date}
               />)}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Min price <small>per night</small></span>
                <input  type='number' className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Max price <small>per night</small></span>
                <input  type='number' className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText' >Adult </span>
                <input  type='number' className='lsOptionInput' min={1}  placeholder = {options.adult}/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'  >Children</span>
                <input  type='number' className='lsOptionInput' min={0} placeholder = {options.children}/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'   >Room</span>
                <input  type='number' className='lsOptionInput' min={1} placeholder = {options.room} />
              </div>
            </div>
            </div>
            <button>Search</button>
          </div>  
          <div className='listResult'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
    </div>
    </div>

  )
}
