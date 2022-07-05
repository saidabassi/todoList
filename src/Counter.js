import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from './redux/Action'

export const Counter = () => {
    const dispatch = useDispatch()
    const counter= useSelector(state=>state.counter)
  return (
      <div>
          <button onClick={()=>dispatch(Increment() )}>+</button>
          <h3>{ counter}</h3>
          <button onClick={()=>dispatch(Decrement())}>-</button>
    </div>
  )
}
