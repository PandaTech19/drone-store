import styles from '../styles/Home.module.css'
import { sanityclient } from '../lib/client'
import Screen from "../Components/Veiwer/Screen"
import Definition from '../Components/Definition/def';

/****************************************************************************************************/

//this query is for the video screen in the home page 
const hello = `*[_type=='video']{
    title,
    vid{asset->{url},    
}}`


//this query is for the page in the defenition file 
const grape = `*[_type=='definition']{

    title,
    description,
    poster{asset->{url},    
}}`


//this query is for the cards inside the about page 

const flip = `*[_type=="cards"]{

    header,
    name,
    title,
    info, 
    poster{asset->{url},    
}}`

//this query is for the first card for rules in the about page

const flap = `*[_type=="rules"]{
    header,
    reason,
    description,
    poster{asset->{url},  

}}`


//this query is for the second card for bussnies in the about page


const dap = `*[_type=="company"]{

    title,
    header,
    description,
    url,
    poster{asset->{url},    
}}`


/******************************************************************************************************/


export default function Home({ Test, Def, das, naf, hep }) {

    return (
        <div className={styles.container}>


            <Screen Test={Test} />


            <Definition Def={Def} das={das} naf={naf} hep={hep} />


        </div>
    )
}

export async function getStaticProps() {
    const Test = await sanityclient.fetch(hello);
    const Def = await sanityclient.fetch(grape);
    const das = await sanityclient.fetch(flip);
    const naf = await sanityclient.fetch(flap);
    const hep = await sanityclient.fetch(dap);


    return {

        props: { Test, Def, das, naf, hep }

    }

}