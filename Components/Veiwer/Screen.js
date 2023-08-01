import styles from "./screen.module.css"

export default function Screen({ Test }) {

    return (

        <div className={styles.container}>
            {
                Test && Test.map((bite) => (

                    <>
                        <video className={styles.Video} autoPlay={true} loop={true} muted={true} controls={false}>
                            <source src={bite.vid.asset.url} type="video/mp4" />
                        </video>
                    </>
                ))
            }

        </div>
    )
}








