import React,{ useState, useEffect, useRef } from 'react';


const useScroll = () => {
  const [state, setState] = useState({
    x : 0,
    y : 0
  })
  const onScroll = () =>{
    setState({ y : document.documentElement.scrollTop, x :window.scrollX})
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  return state
}

export default useScroll