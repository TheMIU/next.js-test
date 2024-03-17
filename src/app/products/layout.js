import styles from "@/app/products/product.module.css"

export default function ProductLayout({ children }) {
    return (

        <div className={styles.product_wrapper}>
            <header className={styles.product_row}>
                <h1>product header</h1>
            </header>

            {children}

            <footer className={styles.product_row}>
                <h1>product footer</h1>
            </footer>
        </div>

    );
}
