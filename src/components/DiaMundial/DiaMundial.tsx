import React, { useEffect } from 'react'
import { useState } from 'react'

interface InternationalDay {
    date: string
    name: string
}

export default function DiaMundial() {
    const [dia, setDia] = useState<string>('')

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/jkrahl/dias-internacionales/main/data.json'
        )
            .then((response) => response.json())
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
                        setDia('Hoy es ' + todayData[0].name)
                        return
                    }
                    const last = todayData.pop() as InternationalDay
                    const result =
                        todayData
                            .map((item: InternationalDay) => item.name)
                            .join(', ') +
                        ' y ' +
                        last.name
                    setDia('Hoy es ' + result)
                } else {
                    setDia('Hoy no es ningún día internacional')
                    return
                }
            })
            .catch((error) => console.error(error))
    }, [])
    return (
        <div
            style={{
                textAlign: 'center',
                backgroundColor: '#D3D3D3',
                padding: '0 15px',
                color: 'black',
            }}
        >
            <span>{new Date().toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'numeric',
                year: '2-digit',
            })}: {dia}</span>
        </div>
    )
}
