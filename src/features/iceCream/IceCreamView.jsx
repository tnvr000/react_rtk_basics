import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';

export const IceCreamView = () => {
  const [value, setValue] = React.useState(1);
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return(
    <div>
      <h2>Number of ice cream - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>Restock ice cream</button>
    </div>
  )
}