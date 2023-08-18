import { useState } from 'react'
import { View, Text } from '@tarojs/components'


import '@nutui/nutui-react-taro/dist/style.css'
import './index.scss'

const Index =()=>{
  const [current, setCurrent] = useState(0)
  const handleClick = (index) => {
    setCurrent(index)
  }

  return (
    <View className='index'>
      <Text>Hello w1orl111d!</Text>

    </View>
  )
}

export default Index