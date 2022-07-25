import React, { useState ,useEffect} from 'react'
import Widget from './Widget'
function PublicIP() {
    const [ip,setIp] =useState('');
    useEffect(() => {
        setIp('10.10.20.1');// will get ip auto
    
     
    }, [ip])
    
   
  return (
    <Widget title="Public IP" >
        <span>{ip}</span>
    </Widget>
  )
}

export default PublicIP