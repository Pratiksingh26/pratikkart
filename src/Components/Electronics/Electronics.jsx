import React, {useEffect}from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { useState } from 'react';
import { getData } from '../../Redux/Products/action';
import MediaCard from '../Card/Card';
import { Sorting } from "../Sorting/Sorting"


export const Electronics = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((store) => store.data)
   
      useEffect(() => {
        dispatch(getData())
      }, [dispatch])
      
      const [arr, setArr] = useState([])

      const [change, setChange] = useState(false);
      const handleSort = (sort, value) =>{
        if(sort === 'asc' && value==='title'){
          data.sort((a,b)=> {
            if(a.title>b.title){
              return 1;
            } else {
              return -1;
            }
          })
          setChange(!change)
        }
        if(sort === 'desc' && value==='title'){
          data.sort((a,b)=> {
            if(a.title<b.title){
              return 1;
            } else {
              return -1;
            }
          })
          setChange(!change)
    
        }
        if(sort === 'asc' && value==='price'){
          data.sort((a,b)=> a.price-b.price)
          setChange(!change)
        }
        if(sort === 'desc' && value==='price'){
          data.sort((a,b)=> b.price-a.price)
          setChange(!change)
    
        }
      }
      useEffect(()=>{setArr(data)}, [data])
  return (
       <> 
       <h1>Electronics Page</h1>
       <Sorting  handleSort={handleSort}/>
    <div className="container">
        {arr.map((e, index)=>
          (e.category==="electronics")?<MediaCard key={index.toString()} props={e}/> : <></>
        )}
        
    </div>
    
    </>)
}
