import router from "./components/router"
import { FaAnglesUp } from "react-icons/fa6";
import { useState } from "react"
import { RouterProvider } from "react-router-dom";
const App = () => {
  const [top , setTop] = useState(false)
  window.onscroll = ()=>{
    if(window.scrollY >= 600){
      setTop(true)
    }else{
      setTop(false)
    }
  }
  return (
    <div>
     <RouterProvider router={router} />
     <button onClick={()=>window.scrollTo(0 ,0)} className={top===false?'top-hide':'topShow'}> <FaAnglesUp /> </button>
    </div>
  )
}

export default App