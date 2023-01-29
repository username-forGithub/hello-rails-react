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
    <div className="container">
      <p class="text-center pt-5 textp">{`${title ? title : ''}`}</p>
      <p class="text-center"><button class="neon-button" onClick={updateText}>Click Me</button></p>
    </div>
  )
}

export default Greeting