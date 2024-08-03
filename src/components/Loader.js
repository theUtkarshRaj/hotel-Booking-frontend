import React,{useState,CSSProperties} from 'react'
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div className='flex justify-center items-center  '>
      <div className="sweet-loading text-center">
      <HashLoader
        color='#000'
        loading={loading}
        css=''
        size={80}
        aria-label="Loading Spinner"
      />
    </div>
    </div>
  )
}

export default Loader

