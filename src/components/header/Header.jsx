import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import 'react-date-range/dist/styles.css'; // main css file for date range
import 'react-date-range/dist/theme/default.css'; // theme css file for date range
import { DateRange } from 'react-date-range';
import { useState } from "react";
 import {format} from "date-fns";   
/* created after creation of navbar component 
and using font awesome for icons of hotels etc */

const Header = () => {
const [openDate, setOpenDate] = useState(false);

const [date, setDate] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
]);

const [openOptions, setOpenOptions] = useState(false)
const [options, setOptions] = useState(
  {
    adult:1,
    children:0,
    room:1,
  }
)

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon= {faBed}/>
             <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faPlane}/>
             <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faCar}/>
             <span>Car rental</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faBed}/>
             <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faTaxi}/>
             <span>Airport taxi</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faBed}/>
             <span>Stays</span>
            </div>
        </div>
        <h1 className="headerTitle">
          A lifetime of discounts? it's Genius.
        </h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more with free hotelbooking acount 
        </p>
        <button className="headerbtn">Sign/register</button>
        <div className="headerSearch">
           <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text" placeholder="where are you going" className="headerSearchInput" />
           </div>

           <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon"/>
              <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">{/* date {console.log(date[0].startDate,date[0].endDate)} */}
                           {/* {date[0].startDate } to {date[0].endDate } */} 
                     {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}  
            </span>
               {openDate && <DateRange
                   editableDateInputs={true}
                   onChange={item => setDate([item.selection])}
                   moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"/>
               }
           </div>

           <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
              <span className="headerSearchText">{`${options.adult} adults ${options.children} children ${options.room} room `}</span>
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                   <div className="optionCounter">
                      <button className="optionCounterButton">+</button>
                        <span className="optionCounterNumber"> 1 </span>
                      <button className="optionCounterButton">-</button>
                    </div>
                </div>
                
                <div className="optionItem">
                  <span className="optionText">children</span>
                  <div className="optionCounter">
                      <button className="optionCounterButton">+</button>
                        <span className="optionCounterNumber">0</span>
                      <button className="optionCounterButton">-</button>
                   </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">room</span>
                   <div className="optionCounter"> 
                      <button className="optionCounterButton">+</button>
                        <span className="optionCounterNumber">1</span>
                      <button className="optionCounterButton">-</button>
                      </div>  
                </div>
                
              </div>
           </div>
           <div className="headerSearchItem">
              <button className="headerBtn" > search</button>
           </div>
          
        </div>
      </div>

    </div>
  )
}

export default Header