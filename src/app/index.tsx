/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-03-15 19:41:39
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-15 20:05:20
 */
import * as React from 'react';

const Index = () => {
  const [count, setCount] = React.useState(0)
  function handleClick() {
    setCount((c:any) => c + 1);
    // 在合成事件中，享受批处理优化，只会重新渲染一次
  }
  console.log(count, 'count');
  

  return (
    <button onClick={handleClick}>{count}</button>
  )
}

export default Index