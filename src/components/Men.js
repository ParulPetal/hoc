import React from 'react';
import HocCmp from '../components/HocCmp';
import { IoIosMan ,IoIosAmericanFootball} from 'react-icons/io';
const Men=(props)=>{
return (
<div>
    <h2 className="text-info"> Men <IoIosMan/> </h2>
<h3> Team:{props.team}</h3>
<h4> {props.data}</h4>
<h5> We are {props.Data1} kind of people. Strong.<IoIosAmericanFootball/></h5>
</div>

)
}
export default HocCmp(Men,"Sports");