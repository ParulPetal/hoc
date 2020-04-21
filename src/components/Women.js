import React from 'react';
import HocCmp from '../components/HocCmp';
import { IoIosWoman ,IoIosWine} from 'react-icons/io';
const Women=(props)=>{
return (
<div>
    <h2 className="text-info"> Women <IoIosWoman/></h2>
    <h3> Team:{props.team}</h3>
<h4> {props.data}</h4>
<h5> We women loves {props.data1} a lot. <IoIosWine/></h5>
</div>

)
}
export default HocCmp(Women,"Makeup");