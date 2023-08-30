import React from 'react'
import styles from './DiscountsPanel.module.css'
import Discount from './Discount'
import Spinner from 'react-bootstrap/Spinner'
import IDiscount from '../../interfaces/IDiscount'

export default function DiscountsPanel() {
    const [loading, setLoading] = React.useState(true)
    const [discounts, setDiscounts] = React.useState<IDiscount[]>([])
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/jkrahl/discounts/main/discounts.json'
        )
            .then((response) => response.json())
            .then((data) => {
                setDiscounts(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(true)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h1 className={styles.title}>Discounts for university students</h1>
            {loading && (
                <div className={styles.spinner}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {error && (
                <div className={styles.error}>
                    <p>Sorry, something went wrong.</p>
                </div>
            )}
            <div className={styles.discounts}>
                {discounts.map((discount, index) => (
                    <Discount
                        key={index}
                        name={discount.name}
                        description={discount.description}
                        url={discount.url}
                        category={discount.category}
                    />
                ))}
            </div>
        </div>
    )
}
