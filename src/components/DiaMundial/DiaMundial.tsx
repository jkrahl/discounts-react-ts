import React from 'react'
import { useQuery } from '@tanstack/react-query'

interface InternationalDay {
    date: string
    name: string
}

export default function DiaMundial() {
    const info = useQuery({
        queryKey: ['internationalDays'],
        queryFn: () =>
            fetch(
                'https://raw.githubusercontent.com/jkrahl/dias-internacionales/main/data.json'
            )
                .then((res) => res.json())
                .then((data: InternationalDay[]) => {
                    let today = new Date().toLocaleDateString('es-ES', {
                        month: 'numeric',
                        day: 'numeric',
                    })
                    // Loop through data to find today's international days
                    let todayData = data.filter(
                        (item: InternationalDay) => item.date === today
                    )
                    // If there are any, add them to the page
                    if (todayData.length !== 0) {
                        if (todayData.length === 1) {
                            return 'Hoy es ' + todayData[0].name
                        }
                        const last = todayData.pop() as InternationalDay
                        const result =
                            todayData
                                .map((item: InternationalDay) => item.name)
                                .join(', ') +
                            ' y ' +
                            last.name
                        return 'Hoy es ' + result
                    } else {
                        return 'Hoy no es ningún día internacional'
                    }
                }),
    })

    if (info.isLoading) {
        return <div></div>
    }

    if (info.isError) {
        console.error(info.error)
        return <div></div>
    }

    return (
        <div
            style={{
                textAlign: 'center',
                backgroundColor: '#D3D3D3',
                padding: '0 15px',
                color: 'black',
            }}
        >
            <span>
                {new Date().toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'numeric',
                    year: '2-digit',
                })}
                : {info.data}
            </span>
        </div>
    )
}
