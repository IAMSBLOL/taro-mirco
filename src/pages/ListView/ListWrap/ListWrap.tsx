import { View, Text } from '@tarojs/components'
import { Image, Divider, Tag, Rate } from "@taroify/core"
import { PhoneCircleOutlined } from "@taroify/icons"
import img from '../../../asset/image/bg.png'

import './ListWrap.scss'

const ListWrap = (props) => {
  const { dataList } = props
  const Card = (cardProps) => {
    const {
      data: {
        companyName,
        concepts,
        financing,
      },
      // index
    } = cardProps
    // const getIndex = () => {
    //   const _index = index + 1
    //   if (_index === 1) {
    //     return (
    //       <Text className='mr-1 text-red-500 bg-red-500 absolute top-wrap'>
    //         top{_index}
    //       </Text>
    //     )
    //   }
    //   if (_index === 2) {
    //     return (
    //       <Text className='mr-1 text-orange-500 bg-orange-500 absolute top-wrap'>
    //         top{_index}
    //       </Text>
    //     )
    //   }
    //   if (_index === 3) {
    //     return (
    //       <Text className='mr-1 text-amber-500  absolute top-wrap'>
    //         top{_index}
    //       </Text>
    //     )
    //   }

    //   return (
    //     <Text className='mr-1 absolute top-wrap'>
    //       top{_index}
    //     </Text>
    //   )
    // }
    return (
      <View className='ListWrap_Card px-2 py-2 flex rounded-md shadow-md relative'>
        {/* {
          index <= 4 && getIndex()
        } */}
        <View>
          <Image
            shape='circle'
            className=' w-8 h-8'
            src={img}
          />
        </View>
        <View className='flex-1 overflow-hidden text-sm pl-2'>
          <View className='font-bold  flex overflow-hidden'>
            <Text className='truncate'>
              {companyName}
            </Text>
            <Tag className='ml-1 whitespace-nowrap text-xs!'>
              {financing || "未融资"}
            </Tag>
            
            <View></View>
          </View>
          <View className='py-1 text-xs'>
            概念题材：{concepts || '测试概念'}
          </View>
          <View className='flex text-[0.6rem] justify-between'>
            <View >
              法人：张三
            </View>
            <View>
              注册资本：2000万
            </View>
            <View>
              成立日期：23-05-20
            </View>
          </View>
          <View className=' text-xs'>
            <Tag color='primary' className='mr-2'>
              自身风险：6
            </Tag>
            <Tag color='warning'>
              关联风险：6
            </Tag>
          </View>

          <View className=' text-[0.7rem] flex justify-between items-center'>
            <View>
              推荐指数：<Rate className='custom-color' value={Math.round(Math.random() * 5)} />
            </View>
            <View className=' text-base'>
              <PhoneCircleOutlined />
            </View>
          </View>
        </View>
      </View>
    )
  }

  const RenderList = () => {
    // const dataList = Array.from({ length: 50 }, () => ({ a: 1 }))
    return dataList.map((cardItem, index) => {
      return (
        <>
          <Card key={index} data={cardItem} index={index} />
          <Divider className='p-0 h-2 m-0' />
        </>
      )
    })
  }
  return (
    <View className='ListWrap p-2'>
      <RenderList />
    </View>
  )
}

export default ListWrap