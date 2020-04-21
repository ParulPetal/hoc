import React from 'react';
const HocCmp = (Human,parameter) => {

    const NewCmp = (props) => {
let x=parameter;
const traits=["Biryani","Love Animes","Mangao all time fav"];
const commonTraits=traits.map((i,index)=>(<li key={index}>{i}</li>));

        return (
          <div>
            
            <Human  data1={x} data={commonTraits} {...props} />
            </div>
        )

    }



    return NewCmp;

}
export default HocCmp;