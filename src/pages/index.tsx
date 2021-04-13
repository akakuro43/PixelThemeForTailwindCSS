import React from 'react'
import { Head } from '../modules/utils/Head'

type ContainerProps = {
  className?: string
  article: any,
  revalidate: Number,
}

type Props = {} & ContainerProps

const Home: React.FC<Props> = (props) => {
  const formatDate = (dateStr:String) => {
    return dateStr.substr(0, 10).split('-').join('.')
  }

  return (
    <>
       <Head></Head>
       <section className="w-full relative mt-200px">
         <h1 className={`text-40px font-en text-center font-bold text-dark3 opacity-90`}>Pixel Theme for TailwindCSS</h1>
          <p className={`font-en text-center font-medium text-dark2 opacity-50`}>Can be used with Next.js</p>
       </section>
       <section className="w-full relative mt-100px flex justify-center items-center">
         <div className="w-240px h-240px bg-type1"></div>
         <div className="w-300px h-160px bg-type2 mx-60px"></div>
         <div className="w-200px h-300px bg-type3"></div>
       </section>

    </>
  ) 
}
export default Home


// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const key: Object = {
//     headers: {'X-API-KEY': process.env.API_KEY},
//   };

//   const data = await fetch('https://curiosology.microcms.io/api/v1/blog', key)
//     .then(res => 
//       res.json()
//     )
//     .catch(() => null)
//   return {
//     props: {
//       article: data.contents,
//       revalidate: 300,
//     },
//   }
// }