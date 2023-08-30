import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <a
                    href="https://forms.gle/crYSqW1gXYFRgFhj6"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Add discounts
                </a>
            </div>
            <div>
                <a
                    href="https://www.instagram.com/jan_krahl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
            </div>
            </div>
    )
}