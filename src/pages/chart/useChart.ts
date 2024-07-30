import { useEffect, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@src/store'
import { chat as chatSelector } from '@src/store/selectors'
import { fetchChatData } from '@src/store/reducers/actions'

const chat = {
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Dates'
        },
    },
}


export const useChat = () => {
    const dispatch = useAppDispatch()
    const [chatOptions, setChatOptions] = useState<any>()

    const {
        chartData,
        loading,
    } = useSelector(chatSelector)


    const fetchList = useCallback(() => {
        dispatch(
            fetchChatData({})
        )
    }, [
        dispatch,
    ])

    useEffect(() => {
        fetchList()
    }, [fetchList])

    useEffect(() => {
        if (!chatOptions && chartData.length > 0) {
            setChatOptions({
                ...chat,
                series: [{
                    type: 'area',
                    data: chartData,
                    lineColor: '#0d709d',
                    color: '#2993c4',
                    fillOpacity: 0.5,
                }],
            })
        }
    }, [chartData])

    return {
        chatOptions,
        loading,
    }
}