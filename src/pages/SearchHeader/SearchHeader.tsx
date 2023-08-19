import { useState, useDeferredValue, useMemo, useCallback } from 'react'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { category } from '../config'
import './SearchHeader.scss'

const SearchHeader = () => {
  const [value, setValue] = useState('')
  const [currentCategory, setCurrentCategory] = useState('company')
  const deferValue = useDeferredValue(value)
  const handleOnChange = (v) => {
    console.log(v, 'value')
    setValue(v)
  }
  const handleCategory = (item) => {

    setCurrentCategory(item.value)
  }

  const getClsActive = useCallback(
    (item) => {
      if (item.value === currentCategory) {
        return 'category_item_active'
      }
      return ''
    },[currentCategory]
  )


  const RenderCategory = useMemo(() => {
    return category.map((c, i) => {
      return (
        <View key={i} className={`px-2 py-2 text-xs category_item ${getClsActive(c)}`} onClick={() => handleCategory(c)}>
          {c.label}
        </View>
      )
    })
  }, [getClsActive])

  const RenderSeniorSearch=()=>{
    return (
      <View className=' grid grid-cols-3 py-1 px-2 bg-slate-100'>
        <View className='px-1 py-[0.2rem] text-[0.5rem] rounded-sm flex justify-center items-center'>
          全国
        </View>
        <View className='px-1 py-[0.2rem] text-[0.5rem] rounded-sm flex justify-center items-center'>
          行业/概念
        </View>
        <View className='px-1 py-[0.2rem] text-[0.5rem] rounded-sm flex justify-center items-center'>
          更多筛选
        </View>
      </View>
    )
  }

  const CalcRenderSeniorSearch=useMemo(()=>{
    if (currentCategory==='company') {
      return <RenderSeniorSearch />
    }
    return null
  },[currentCategory])


  return (
    <View className='SearchHeader py-1'>
      <View className='search_bar_wrap w-full flex justify-center'>
        <AtSearchBar
          className='px-2 w-[90%]'
          showActionButton
          value={deferValue}
          onChange={handleOnChange}
        />
      </View>
      <View className='px-2 flex justify-start items-center'>
        {RenderCategory}
      </View>

      {CalcRenderSeniorSearch}
    </View>
  )
}

export default SearchHeader