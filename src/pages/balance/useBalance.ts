import { useEffect, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@src/store'
import { importStatement as importStatementSelector } from '@src/store/selectors'
import { fetchBalanceData } from '@src/store/reducers/actions'

const chat = {
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Dates'
        },
    },
}


export const useBalance = () => {
    const dispatch = useAppDispatch()
    const [balanceOptions, setbalanceOptions] = useState<any>()

    const {
        importStatementData,
    } = useSelector(importStatementSelector)


    const fetchList = useCallback(() => {
        dispatch(
            fetchBalanceData({})
        )
    }, [
        dispatch,
    ])

    useEffect(() => {
        fetchList()
    }, [fetchList])

    useEffect(() => {
        if (!balanceOptions && importStatementData.length > 0) {
            setbalanceOptions({
                ...chat,
                series: [{
                    type: 'area',
                    data: importStatementData,
                    lineColor: '#0d709d',
                    color: '#2993c4',
                    fillOpacity: 0.5,
                }],
            })
        }
    }, [importStatementData])

    return {
        balanceOptions,
    }
}