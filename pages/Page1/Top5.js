import styles from './Top5.module.css'
import { sanityclient } from '../../lib/client'
import { PortableText } from '../../lib/client';

const Try = `*[_type=="top5"]{
    title,
    header,
    description,
    year,
    feat,
    features,
    poster{asset->{url}},
    vid{asset->{url},  
}}`

export default function Top5({ hello }) {
    return (

        <div className={styles.allContainer}>
            <div style={{ marginTop: "10vw", display: "flex", flexDirection: "column" }}>
                <div key={hello[0]} className={styles.info}>{hello[0].header}</div>

                {
                    hello && hello.map((hum) => (

                        <div key={hum.id} className={styles.try} >


                            <div key={hum} className={styles.imgcontainer2}>

                                <img key={hum.poster} src={hum.poster.asset.url} className={styles.img} alt="images of the benefits" />

                            </div>



                            <div key={hum.title}><h1 className={styles.title}>{hum.title}</h1></div>

                            <div key={hum.description} className={styles.textcontainer}><PortableText blocks={hum.description} /></div>



                            <h1 className={styles.feat}>Released:</h1>
                            <div key={hum.year}><h1 className={styles.title}>{hum.year}</h1></div>




                            <div className={styles.featurecontainer}>
                                <h1 key={hello[0]} className={styles.feat}>{hello[0].feat}</h1>
                                <ul className={styles.list} style={{ listStyle: "none" }} key={hum.features}>
                                    <li >
                                        <PortableText blocks={hum.features} />
                                    </li>
                                </ul>
                            </div>

                            <video className={styles.Video} width="100%" height="650px" autoPlay={true} muted controls={true}>
                                <source style={{ background: "red" }} src={hum.vid.asset.url} type="video/mp4" />
                            </video>

                        </div>
                    ))
                }


            </div>



        </div>
    )

}

export async function getStaticProps() {
    const hello = await sanityclient.fetch(Try)
    return {
        props: {
            hello
        }
    }
}