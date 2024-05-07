import React, {useState, useEffect} from 'react'
function Watch(){
 
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        const interval = setInterval(() =>{
            setTime(new Date());
        }, 1000);
        return(
            clearInterval
        ) 
    }, []);

   function formate(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
   const AmPm = hours >= 12? "PM": "Am";
     hours =  hours % 12 || 12;
   return(`${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${AmPm}`)
}
  function zero(number){
  return(
    ( number < 10? "0": "") + number)
 }

return(<>
<div className="clock-container">
    <div className="clock">
        <span>{formate()}</span>
    </div>
</div>
</>)
}
export default Watch