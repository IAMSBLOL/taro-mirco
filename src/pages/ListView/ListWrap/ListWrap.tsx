import { View } from '@tarojs/components'
import { Image, Divider } from "@taroify/core"
import './ListWrap.scss'

const ListWrap = (props) => {
  const { dataList } = props
  const Card = (cardProps) => {
    const {
      companyName,
      concepts,
      financing,
    } = cardProps
    return (
      <View className='h-24 ListWrap_Card px-6 py-3 flex'>
        <View>
          <Image
            shape='circle'
            className=' w-8 h-8'
            src='../../../asset/image/bg.png'
          />
        </View>
        <View className='flex-1'>
          <View>
            {companyName}
          </View>
          <View>
            {concepts}
          </View>
          <View>
            {financing}
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
          <Card key={index} data={cardItem} />
          <Divider className='p-0 h-2 m-0' />
        </>
      )
    })
  }
  return (
    <View className='ListWrap'>
      <RenderList />
    </View>
  )
}

export default ListWrap