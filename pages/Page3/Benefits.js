import styles from './Benefits.module.css'
import { sanityclient } from '../../lib/client'

const ben = `*[_type=="benefits"]{
  title,
  header,
  description,
  background{asset->{url}},
  poster{asset->{url},
}}`

export default function Benefits({ Fits }) {
  return (

    <div className={styles.allcontainer}>

      <div className={styles.background} style={{ background: `url(${Fits[0].background.asset.url})`, backgroundSize: "cover" }}>

      </div>



      <div className={styles.container}>

        <div>
          <h1 key={Fits[0]} className={styles.h1}>{Fits[0].header}</h1>
        </div>

        {
          Fits && Fits.map((hum) => (
            <div key={hum} className={styles.listcontainer}>

              <div key={hum} className={styles.imgcontainer2}>

                <img key={hum.poster} src={hum.poster.asset.url} className={styles.img} alt="images of the benefits" />

              </div>

              <li key={hum.title} className={styles.list}>{hum.title}</li>

              <p key={hum.description} className={styles.paragraph}>{hum.description}</p>

            </div>


          ))}
      </div>
    </div >
  )

}


export async function getStaticProps() {
  const Fits = await sanityclient.fetch(ben)
  return {
    props: { Fits }
  }
}




