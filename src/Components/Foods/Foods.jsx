import React from 'react';
import { useDispatch } from 'react-redux';
import { foodChange } from '../../redux/food/actions';

const Foods = () => {

  const dispatch = useDispatch();


  return (
    <div className="container">
    <div className="row justify-content-center mt-5">
        <div className="col-md-4">
            <div className="card p-2">
               <select className='form-control' name="" id="" onChange={(e) => dispatch(foodChange(e.target.value)) }>
                <option value="">Select</option>
                <option value="Beriani">Beriani</option>
                <option value="Kacchi">Kacchi</option>
                <option value="Sultan">Sultan</option>
               </select>
            </div>
        </div>
    </div>
</div>
  )
}

export default Foods;