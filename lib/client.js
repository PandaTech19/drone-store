import {createPortableTextComponent, createClient, createImageUrlBuilder,} from 'next-sanity'


const config = {

  projectId: "wq5gii2q",

  dataset: "production",

  apivVersion: "2021-06-07",

  useCdn: true,
  
}

export const sanityclient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
  
  ...config,

  serializers: {},
  
})

