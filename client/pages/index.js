import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';

export default function Home() {
  return (
    <div >
      <Head>
        <title>MedHistory</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      <Header/>
      <div className='relative'>
        <img className='object-contain w-full' src = "https://media.istockphoto.com/photos/m-glad-to-see-you-doing-well-picture-id1152844782?k=20&m=1152844782&s=612x612&w=0&h=myHM6mGGAdUZU_EJEMU0dlLJ-ENF0BCJ26WD3OT0uQ4="/>
        
        <button></button>

      </div>

    </main>
    <footer className='m-8 rounded-md shadow-md bg-gray-100'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
            <h1>We care for You</h1>
        </div>
        <img className='h-[220px]' src="https://www.nicepng.com/png/detail/26-260551_femscare-benifits-doctor-image-png-hd.png" />
      </div>
    </footer>
    </div>
  )
}