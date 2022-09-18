import React from 'react';
import { useSelector } from 'react-redux';

const Colors = () => {

    const counter = useSelector(state => state.counter);
    
  return (
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card p-2">
                    <button>RED</button>
                    <button>BLUE</button>
                    <button>GRAY</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Colors;