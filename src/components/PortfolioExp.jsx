import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { data } from './Portfolio'
const PortfolioExp = () => {
    const [datas ,setDatas] = useState(data)
    const [filtered ,setFiltered] = useState([])
    const [ky ,setKey] = useState(null)
    const [activeG,setActiveg] = useState(0)
    console.log({filtered})
    console.log({activeG})

    useEffect(() => {
      if(activeG === 'All'){
        setFiltered(datas)
        return
      }
    const kye = Object.keys(datas).filter(item=>item.includes(activeG))
    // const filtered = Object.values(datas).filter(item=>) 
      setFiltered(filtered)
    }, [activeG])
    
  return (
    <div className=' md:px-20 px-16'>
       <div className="flex justify-center">
       <div className="inline-block space-x-3">
            <button index className='btn' onClick={()=>setActiveg('all')}>All</button>
            <button onClick={()=>setActiveg('Design')} className='btn'>Design</button>
            <button onClick={()=>setActiveg('Brand')} className='btn'>Brand</button>
            <button onClick={()=>setActiveg('Photos')} className='btn'>Photos</button>
        </div>
       </div>
       <div className="grid grid-cols-2 gap-5 mt-10">
        {
            Object.values(datas).map(item=>(
                <div className="space-y-2">
                    {
                        item.map(item=>(
                            <div className="">
                                <img src={item.img[0]} alt="" /></div>
                        ))
                    }
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default PortfolioExp