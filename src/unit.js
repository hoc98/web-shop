import React from 'react'

export default  function formCurr(num){
  return "$" + Number(num.tofixed(1)).toLocaleString() + " "
  
}
