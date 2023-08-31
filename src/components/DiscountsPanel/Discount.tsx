import React from 'react'
import styles from './DiscountsPanel.module.css'

export default function Discount({
    name,
    description,
    category,
    url,
    favicon
}: {
    name: string
    description: string
    category: string
    url: string
    favicon: string
}) {

    return (
        <div className={styles.discount}>
            <div className={styles.discountImage}>
                <img src={favicon} alt="Logo" height={50} width={50} />
            </div>
            <div className={styles.discountInfo}>
                <div className={styles.discountTitle}>
                    <a href={url} target="_blank" rel="noreferrer">
                        <b>
                            <span>
                                {name}<ExternalIcon />
                            </span>
                        </b>
                    </a>
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

function ExternalIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"
                fill="currentColor"
            />
            <path
                d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"
                fill="currentColor"
            />
        </svg>
    )
}
