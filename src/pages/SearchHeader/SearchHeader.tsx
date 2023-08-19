/* eslint-disable react/no-children-prop */
import { useState, useMemo, useCallback } from 'react'
import { View, Input } from '@tarojs/components'
import { DropdownMenu, AreaPicker, Cascader, Radio } from "@taroify/core"
// import * as _ from "lodash"

import { Close, Search } from "@taroify/icons"
import { useCascader } from "@taroify/hooks"
import { areaList } from "@vant/area-data"
import type { Key } from "react"
import { category, industryOptions } from '../config'
import './SearchHeader.scss'


const SearchHeader = (props) => {
  const {
    deferValue,
    setValue,
    currentCategory,
    setCurrentCategory,
    fieldValue,
    setFieldValue,
    areaPickerTitle,
    setAreaPickerTitle,
    industryValue,
    setindustryValue,
    financing,
    setFinancing
  } = props


  const [dropdownMenuValue, setDropdownMenuValue] = useState<Key | false>()

  const [areaV, setArea] = useState<any>()


  const { columns } = useCascader({ value: industryValue, depth: 2, options: industryOptions })

  const handleOnChange = (v) => {
    console.log(v, 'value')
    setValue(v.detail.value)
  }
  const handleCategory = useCallback(
    (item) => {

      setCurrentCategory(item.value)
    },[setCurrentCategory]
  )

  const getClsActive = useCallback(
    (item) => {
      if (item.value === currentCategory) {
        return 'category_item_active'
      }
      return ''
    }, [currentCategory]
  )


  const RenderCategory = useMemo(() => {
    return category.map((c, i) => {
      return (
        <View key={i} className={`px-4 py-2 text-xs category_item ${getClsActive(c)}`} onClick={() => handleCategory(c)}>
          {c.label}
        </View>
      )
    })
  }, [getClsActive, handleCategory])

  const RenderIndustry = useMemo(
    () => {
      return (
        <Cascader
          className='text-black'
          value={industryValue}
          onSelect={setindustryValue}
          onChange={(values, options) => {
            setDropdownMenuValue(false)
            const _value = options.map(({ children }) => children).join('/')
            console.log(_value, 'options')
            setFieldValue(
              _value
            )
          }}
        >

          {
            columns.map((options, index) => (
              <Cascader.Tab key={index}>
                {
                  options.map((option) => (
                    <Cascader.Option key={option.value} value={option.value}>
                      {option.label}
                    </Cascader.Option>
                  ))
                }
              </Cascader.Tab>
            ))
          }
        </Cascader>
      )
    }, [columns, industryValue, setFieldValue, setindustryValue]
  )

  const TitleCard = (tprops) => {
    const { title, children } = tprops
    return (
      <View className='text-black px-2 py-2 mb-2'>
        <View className=' text-xs font-bold'>
          {title}
        </View>
        <View className=' pt-2'>
          {children}
        </View>
      </View>
    )
  }

  const RenderSeniorSearch = useMemo(
    () => {
      const handleCloseMenu = () => {
        setDropdownMenuValue(false)
      }

      const handleCanselMenu = () => {
        setAreaPickerTitle('地区')
        setDropdownMenuValue(false)
      }

      const handleAreaPicker = (areaPicker, option, options) => {
        console.log(areaPicker)
        setArea(areaPicker)
        setAreaPickerTitle(option.label)
      }

      console.log(fieldValue, 'fieldValue')
      return (
        <View className='senior_wrap'>
          <DropdownMenu className='custom-color text-xs ' value={dropdownMenuValue} onChange={setDropdownMenuValue}>
            <DropdownMenu.Item title={areaPickerTitle} >
              <AreaPicker onChange={handleAreaPicker} depth={2} value={areaV} className='text-black'>
                <AreaPicker.Toolbar>
                  <AreaPicker.Button onClick={handleCanselMenu}>重置</AreaPicker.Button>
                  <AreaPicker.Title>选择地区</AreaPicker.Title>
                  <AreaPicker.Button onClick={handleCloseMenu}>确认</AreaPicker.Button>
                </AreaPicker.Toolbar>
                <AreaPicker.Columns children={areaList} />
              </AreaPicker>
            </DropdownMenu.Item>
            <DropdownMenu.Item title={fieldValue} >
              {RenderIndustry}
            </DropdownMenu.Item>
            <DropdownMenu.Item title='更多筛选'>
              <TitleCard title='融资情况'>
                <Radio.Group value={financing} onChange={setFinancing} direction='horizontal' className='grid grid-cols-3 gap-y-2'>
                  <Radio name='上市'>上市</Radio>
                  <Radio name='未上市'>未上市</Radio>
                  <Radio name='A轮'>A轮</Radio>
                  <Radio name='B轮'>B轮</Radio>
                  <Radio name='C轮'>C轮</Radio>
                  <Radio name='D轮'>D轮</Radio>
                  <Radio name='未融资'>未融资</Radio>
                </Radio.Group>
              </TitleCard>

              <TitleCard title='指标排序'>
                <Radio.Group defaultValue='1' direction='horizontal' className='grid grid-cols-2 gap-y-2'>
                  <Radio name='v1'>销量</Radio>
                  <Radio name='v2'>销售毛利率</Radio>
                  <Radio name='v3'>市盈率</Radio>
                  <Radio name='v4'>营业总收入</Radio>
                  <Radio name='v5'>净利润同比</Radio>
                  <Radio name='v6'>净资产收益</Radio>
                </Radio.Group>
              </TitleCard>
            </DropdownMenu.Item>
          </DropdownMenu>
        </View>
      )
    },
    [fieldValue, dropdownMenuValue, areaPickerTitle, areaV, RenderIndustry, financing, setFinancing, setAreaPickerTitle]
  )

  const CalcRenderSeniorSearch = useMemo(() => {
    if (currentCategory === 'company') {
      return RenderSeniorSearch
    }
    return null
  }, [RenderSeniorSearch, currentCategory])

  return (
    <View className='SearchHeader w-full'>
      <View className=' p-2 search_wrap'>
        <View className='px-2 flex justify-between items-center rounded-sm'>
          <Search className='text-xs mt-1' />
          <Input
            value={deferValue}
            placeholder='搜索'
            className='py-1 pl-2 ml-3 flex-1 text-xs text-white input-bg rounded-md'
            onInput={handleOnChange}
          />
          {
            deferValue && (
              <Close className='text-xs' onClick={() => { setValue(undefined) }} />
            )
          }
        </View>
      </View>
      {/* <View className='px-2 flex justify-start items-center'>
        {RenderCategory}
      </View> */}
      {CalcRenderSeniorSearch}
    </View>
  )
}

export default SearchHeader