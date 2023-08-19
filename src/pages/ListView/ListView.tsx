import { View } from '@tarojs/components'
import { useEffect, useMemo, useState } from 'react'
import DefaultView from './DefaultView'
import ListWrap from './ListWrap'
import { getData } from '../config'


const ListView = (props) => {
  const { searchParams } = props
 
  const [dataList, setDataList] = useState<any>([])
  useEffect(() => {
    console.log(searchParams)
    const _dataList = getData(searchParams, 10)
    setDataList(_dataList)

  }, [searchParams, setDataList])


  return (
    <View className=' pt-1'>
      {
        useMemo(() => {
          if (dataList.length > 0) {
            return <ListWrap dataList={dataList} />
          }
          return (
            <DefaultView />
          )
        }, [dataList])
      }
    </View>
  )
}

export default ListView