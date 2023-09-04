import React from 'react'
import styles from './DiscountsPanel.module.css'
import Discount from './Discount'
import Spinner from 'react-bootstrap/Spinner'
import IDiscount from '../../interfaces/IDiscount'
import { useQuery } from '@tanstack/react-query'

export default function DiscountsPanel() {
    const info = useQuery({
        queryKey: ['discounts'],
        queryFn: () =>
            fetch(
                'https://raw.githubusercontent.com/jkrahl/discounts/main/discounts.json'
            ).then((res) => res.json()),
    })

    return (
        <div>
            <h1 className={styles.title}>Discounts for university students</h1>
            {info.isLoading && (
                <div className={styles.spinner}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {info.isError && (
                <div className={styles.error}>
                    <p>Sorry, something went wrong.</p>
                </div>
            )}
            <div className={styles.discounts}>
                {info.data?.map((discount: IDiscount, index: number) => (
                    <Discount
                        key={index}
                        name={discount.name}
                        description={discount.description}
                        url={discount.url}
                        category={discount.category}
                        favicon={discount.favicon}
                    />
                ))}
            </div>
        </div>
    )
}
