import { useEffect, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@src/store'
import { importStatement as importStatementSelector } from '@src/store/selectors'
import { fetchIncomeStatementData } from '@src/store/reducers/actions'

const chat = {
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Dates'
        },
    },
}


export const useIncomeStatement = () => {
    const dispatch = useAppDispatch()
    const [incomeStatementOptions, setIncomeStatementOptions] = useState<any>()

    const {
        importStatementData,
    } = useSelector(importStatementSelector)


    const fetchList = useCallback(() => {
        dispatch(
            fetchIncomeStatementData({})
        )
    }, [
        dispatch,
    ])

    useEffect(() => {
        fetchList()
    }, [fetchList])

    useEffect(() => {
        if (!incomeStatementOptions && importStatementData.length > 0) {
            setIncomeStatementOptions({
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
        incomeStatementOptions,
    }
}