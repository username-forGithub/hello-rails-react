import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
import { fetchText } from '../redux/slices/greetingSlice'


const Greeting = () => {
  const dispatch = useDispatch();
  const allgreetings = useSelector(state => state.textobj.greeting)
  if(allgreetings.length === 0){
    dispatch(fetchText());
  }
 
  let title
  if(allgreetings.length != 0){
    title = allgreetings[0].greetings
  }

  const updateText = () => {
    dispatch(fetchText());
  };

  return(
    <div className="row">
      <p class="text-center">Text: {`${title ? title : ''}`}</p>
      <button onClick={updateText}>Change</button>
    </div>
  )
}

export default Greeting