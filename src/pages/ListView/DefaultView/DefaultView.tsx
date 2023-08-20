import { View, Text } from '@tarojs/components'
import { Tag, Divider } from "@taroify/core"
import { DeleteOutlined } from "@taroify/icons"
import { HOT_OPTIONS } from '../../config'
import './DefaultView.scss'

const DefaultView = () => {
  const Card = (props) => {
    return (
      <View className='bg-white'>
        <View className='title-wrap px-2 text-xs py-1 flex justify-between'>
          <View>
            {
              props.title
            }
          </View>
          {!props.hasIcon && <DeleteOutlined />} 
        </View>
        <View>
          {
            props.children
          }
        </View>
      </View>
    )
  }

  const getIndex = (index) => {
    const _index = index + 1
    if (_index===1) {
      return (
        <Text className='mr-1 text-red-500'>
          {_index}
        </Text>
      )
    }
    if (_index === 2) {
      return (
        <Text className='mr-1 text-orange-500'>
          {_index}
        </Text>
      )
    }
    if (_index === 3) {
      return (
        <Text className='mr-1 text-amber-500'>
          {_index}
        </Text>
      )
    }

    return (
      <Text className='mr-1'>
        {_index}
      </Text>
    ) 
  }

  const HotList = () => {
    return HOT_OPTIONS.map((o, i) => {
      return (
        <View key={i} className='flex items-center'>
          {getIndex(i)}
          <Text>
            {o.label}
          </Text>
        </View>
      )
    })

  }


  return (
    <View className='DefaultView'>
      <Card title='最近搜索'>
        <View className=' flex p-2'>
          <Tag  className='mr-2 p-1'>比亚迪</Tag>
          <Tag  className='mr-2 p-1'>宁德时代</Tag>
        </View>
      </Card>
      <Divider className='py-0 m-0' />
      <Card title='浏览历史'>
        <View className=' flex p-2 '>
          <Tag className='mr-2 p-1'>比亚迪</Tag>
          <Tag className='mr-2 p-1'>宁德时代</Tag>
        </View>
      </Card>
      <Divider className='py-0  m-0' />
      <Card title='热门搜索' hasIcon>

        <View className=' grid grid-cols-2 p-2 text-xs gap-y-1'>
          <HotList />
        </View>
      </Card>
    </View>
  )
}

export default DefaultView