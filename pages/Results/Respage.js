/*import styles from "./Respage.module.css"
import { sanityclient } from "../../lib/client";
import { useRouter } from 'next/router'
import Image from "next/image"*/


/*const Info = "*[(_type=='store') && title match '*" +slug+ "*']{ title,slug,description,buttn,purchase,thumbnail{asset->{url}}}"


const {slug}=useRouter()*/

export default function Respage() {


    return (
        <div /*className={styles.Container}*/>

            hello

            {/*<h1 className={styles.h1}>Results:</h1>

            <div className={styles.wrapper}>

                {
                    product && product.map((hi) => (

                        <div key={hi} className={styles.innerwrapper}>

                            <div key={hi} className={styles.wrap}>

                                
                                <Image key={hi} className={styles.img} src={hi.thumbnail.asset.url} alt="" />

                                <h2 key={hi} className={styles.product}>{hi.title}</h2>

                                <div key={hi} style={{ textAlign: "center" }}>
                                <a key={hi} href={hi.purchase} style={{ textDecoration: "none" }} className={styles.btn}>{product[0].buttn}</a>
                                </div>

                                

                            </div>


                        </div>

                    ))
                }

            </div>*/}
        </div>
    )

}

/*export async function getStaticProps() {
    const product = await sanityclient.fetch(Info)
    return {
        props: { product }

    }
}



*/