
import { View, ScrollView, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { useState } from 'react'
import SearchHeader from '../SearchHeader'

import './index.scss'


const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const vStyleA = {
    height: '150px',

  }
  const vStyleB = {
    height: '150px',
  }
  const vStyleC = {
    height: '150px',

    color: '#333'
  }

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  const getClsActive = (index) => {
    if (activeIndex === index) {
      return 'active-bar'
    }
    return ''
  }

  const RenderItem = () => {
    const options = [
      {
        text: '首页',
        icon: "search"
      },
      {
        text: '关注',
        icon: "heart-2"
      },
      {
        text: '会员',
        icon: "sketch"
      },
      {
        text: '我的',
        icon: "settings"
      }
    ]
    return options.map((o, i) => {
      return (
        <View 
          key={i} 
          className={`flex justify-center flex-col items-center ${getClsActive(i)}`} 
          onClick={() => handleClick(i)}
        >
          <AtIcon size='21' value={o.icon} />
          <Text className='text-[0.5rem] mt-[0.05rem]'>
            {o.text}
          </Text>
        </View>
      )
    })
  }

  return (
    <View className='index'>
      <SearchHeader />
      <ScrollView
       
        className='scrollview pb-12'
        scrollY
        scrollWithAnimation
        scrollTop={0}

        lowerThreshold={20}
        upperThreshold={20}

      >
        <View style={vStyleA}>A</View>
        <View style={vStyleB}>B</View>
        <View style={vStyleC}>C</View>
        <View style={vStyleC}>C</View>
        <View style={vStyleC}>C</View>
        <View style={vStyleC}>C</View>
        <View style={vStyleC}>C</View>
        <View style={vStyleC}>C</View>

      </ScrollView>

      <View className='bottom-0 left-0 save-btm w-full px-2 overflow-hidden text-zinc-500 tabBar'>
        <View className='w-full h-11 grid gap-x-1 grid-cols-4'>
          <RenderItem />
        </View>

      </View>

    </View>
  )
}

export default Index