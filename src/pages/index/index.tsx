
import { View, ScrollView, Text } from '@tarojs/components'
import { SettingOutlined, LikeOutlined, FireOutlined, GemOutlined } from "@taroify/icons"
import { SafeArea } from "@taroify/core"
import { useState, useDeferredValue, useMemo, useCallback } from 'react'

import SearchHeader from '../SearchHeader'
import ListView from '../ListView'

import './index.scss'


const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const [value, setValue] = useState(undefined)
  const [currentCategory, setCurrentCategory] = useState('company')
  const deferValue = useDeferredValue(value)

  const [fieldValue, setFieldValue] = useState()

  const [areaPickerTitle, setAreaPickerTitle] = useState()

  const [industryValue, setindustryValue] = useState<string[]>([])

  const [financing, setFinancing] = useState<string|undefined>(undefined)
  
  const searchParams = useMemo(()=>{
    console.log(deferValue)
    return {
      financing, industryValue, areaPickerTitle, fieldValue, deferValue
    }
    
  },[areaPickerTitle, deferValue, fieldValue, financing, industryValue])


  const handleClick = (index) => {
    setActiveIndex(index)
  }

  const getClsActive = useCallback(
    (index) => {
      if (activeIndex === index) {
        return 'active-bar'
      }
      return ''
    },[activeIndex]
  )

  const RenderItem = useCallback(
    () => {
      const options = [
        {
          text: '主页',
          Icon: FireOutlined
        },
        {
          text: '关注',
          Icon: LikeOutlined
        },
        {
          text: '会员',
          Icon: GemOutlined
        },
        {
          text: '我的',
          Icon: SettingOutlined
        }
      ]
      return options.map((o, i) => {
        return (
          <View
            key={i}
            className={`flex justify-center flex-col items-center ${getClsActive(i)}`}
            onClick={() => handleClick(i)}
          >
            <o.Icon size='21' />
            <Text className='text-[0.5rem] mt-[0.05rem]'>
              {o.text}
            </Text>
          </View>
        )
      })
    },[getClsActive]
  )

  return (
    <View className='index'>
      {
        useMemo(()=>(
          <SearchHeader
            currentCategory={currentCategory}
            deferValue={deferValue}
            fieldValue={fieldValue}
            areaPickerTitle={areaPickerTitle}
            industryValue={industryValue}
            setValue={setValue}
            setCurrentCategory={setCurrentCategory}
            setFieldValue={setFieldValue}
            setAreaPickerTitle={setAreaPickerTitle}
            setindustryValue={setindustryValue}
            setFinancing={setFinancing}
            financing={financing}
          />
        ),[areaPickerTitle, currentCategory, deferValue, fieldValue, financing, industryValue])
      }
      {
        useMemo(() => {
        
          return (
            <ScrollView

              className='scrollview bg-white'
              scrollY
              scrollWithAnimation
              scrollTop={0}

              lowerThreshold={20}
              upperThreshold={20}

            >
              <ListView searchParams={searchParams} />

            </ScrollView>
          )
        }, [searchParams])
      }
      {
        useMemo(
          () => {
            return (
              <>
                <View className='bottom-0 left-0 w-full px-2 overflow-hidden text-zinc-500 tabBar'>
                  <View className='w-full h-11 grid gap-x-1 grid-cols-4'>
                    <RenderItem />
                  </View>
                </View>
                <SafeArea position='bottom' />
                </>
            )
          }, [RenderItem]
        )
      }
    </View>
  )
}

export default Index