import React from 'react'
import styles from './DiscountsPanel.module.css'

export default function Discount({
    name,
    description,
    category,
    url,
}: {
    name: string
    description: string
    category: string
    url: string
}) {
    // Get favicon from URL
    const urlObject = new URL(url)
    const faviconUrl = `${urlObject.protocol}//${urlObject.hostname}/favicon.ico`

    return (
        <div className={styles.discount} onClick={() => window.open(url)}>
            <div className={styles.discountImage}>
                <img
                    src={faviconUrl}
                    alt="Logo"
                    height={50}
                    width={50}
                />
            </div>
            <div className={styles.discountInfo}>
                <div className={styles.discountTitle}>
                    <b>
                        <span>{name} &#129109;</span>
                    </b>
                </div>
                <div className={styles.discountCategory}>
                    <span>
                        <i>{category}</i>
                    </span>
                </div>
                <div className={styles.discountDescription}>
                    <p>
                        <span>{description}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
