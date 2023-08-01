import styles from "./about.module.css"
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";


export default function About({ das, naf, hep }) {


    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false)
    const view = () => setModalShow(!modalShow);

    const view2 = () => setModalShow2(!modalShow2)



    return (


        <div className={styles.About}>


            <div className={styles.about} >
                <h1 key={das[0]} className={styles.ad}>{das[0].name}</h1>
            </div>

            <div className={styles.cardholder}>




                <div className={styles.wrapper}>

                    <div style={{ background: `url(${das[0].poster.asset.url})`, backgroundSize: "cover" }} className={styles.cardcontainer} >

                        <div key={das[0]}>
                            <h1 className={styles.h1}>{das[0].header}</h1>
                        </div>

                        <div key={das[0]} >
                            <p className={styles.paragraph}>{das[0].title}</p>
                        </div>


                        <div key={das[0]} className={styles.divlearn}>
                            <p onClick={view} className={styles.learn}>{das[0].info}</p>
                        </div>


                        <Modal onClick={view} onHide={() => setModalShow(false)} show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                            <Modal.Header style={{ background: "#1E1C1F", color: "white" }}>

                                <Modal.Title key={naf} className={styles.modalhead} id="contained-modal-title-vcenter">
                                    {naf[0].header}
                                </Modal.Title>

                            </Modal.Header>

                            <Modal.Body className={styles.con}>

                                <div className={styles.imgcontainer}>

                                    <img key={naf[0]} className={styles.img} src={naf[0].poster.asset.url} alt="" />

                                </div>

                                {
                                    naf && naf.map((hi) => (

                                        <div key={hi} className={styles.listcontainer}>

                                            <li className={styles.list}>{hi.reason}</li>

                                            <p className={styles.paragraph2}>{hi.description}</p>

                                        </div>
                                    ))
                                }

                            </Modal.Body>

                        </Modal>
                    </div>

                </div>





                <div className={styles.wrapper}>
                    <div style={{ background: `url(${das[1].poster.asset.url})`, backgroundSize: "cover", backgroundPosition: "center" }} className={styles.cardcontainer} >

                        <div key={das[1]}>
                            <h1 className={styles.h1}>{das[1].header}</h1>
                        </div>

                        <div key={das[1]} >
                            <p className={styles.paragraph}>{das[1].title}</p>
                        </div>


                        <div key={das[1]} className={styles.divlearn}>
                            <p onClick={view2} className={styles.learn}>{das[1].info}</p>
                        </div>


                        <Modal onClick={view2} onHide={() => setModalShow2(false)} show={modalShow2} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                            <Modal.Header style={{ background: "#1E1C1F", color: "white" }}>

                                <Modal.Title key={hep[0]} className={styles.modalhead} id="contained-modal-title-vcenter">
                                    {hep[0].header}
                                </Modal.Title>

                            </Modal.Header>

                            <Modal.Body className={styles.con}>

                                <div className={styles.container}>

                                    <div key={hep[0]} className={styles.imgcontainer}>

                                        <img key={hep[0]} className={styles.img} src={hep[0].poster.asset.url} alt="" />

                                    </div>

                                    {
                                        hep && hep.map((bye) => (

                                            <div key={bye} className={styles.listcontainer}>

                                                <h1 className={styles.list}><a style={{ textDecoration: "none" }} href={bye.url}>{bye.title}</a></h1>

                                                <p className={styles.paragraph2}>{bye.description}</p>


                                            </div>


                                        ))
                                    }



                                </div>

                            </Modal.Body>



                        </Modal>




                    </div>
                </div>
            </div>



        </div>
    )

}
