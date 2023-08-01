import styles from "./Info.module.css"
import Carousel from 'react-bootstrap/Carousel'
import { sanityclient } from "../../lib/client"


const ham = `*[_type=="information"]{

  title,
  header,
  description,
  slider{asset->{url}},

}`

export default function Info({ yo }) {

  const r = yo.length;

  console.log(r)




  return (

    <div className={styles.Container} >

      <Carousel controls={false} fade className={styles.carcontainer}>

        {yo && yo.map((bye) => (

          <Carousel.Item key={bye} interval={1000} className={styles.change}>
            <img
              key={bye.slider.asset.url}
              className={styles.slider}
              src={bye.slider.asset.url}
              alt="cycle"
            />

            <Carousel.Caption >
              <h1 key={bye.title}>{bye.title}</h1>
            </Carousel.Caption>

          </Carousel.Item>


        ))}

      </Carousel>




      <div >
        <h1 key={yo[0]} className={styles.h1}>{yo[0].header}</h1>
      </div>


      {yo && yo.map((hi) => (
        <>

          <div key={hi} className={styles.listcontainer}>

            <div key={hi.slider.asset.url} className={styles.imgcontainer}>

              <img src={hi.slider.asset.url} className={styles.img} alt="images of the benefits" />

            </div>

            <li key={hi.title} className={styles.list}>{hi.title}</li>

            <p key={hi.description} className={styles.paragraph}>{hi.description}</p>

          </div>
        </>

      ))}

    </div>
  )

}

export async function getStaticProps() {

  const yo = await sanityclient.fetch(ham);

  return {

    props: {

      yo

    }
  }


}

