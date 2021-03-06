
import Nav from '../../components/Nav'
import Image from 'next/image'

export const getStaticProps = async ()=>{
  let photos = await fetch("https://jsonplaceholder.typicode.com/photos");
   photos = await photos.json()
   return{
     props:{
        photos
       }
   };
}

const Album = ({photos}) =>{
  
  return (
    <div >
      <Nav />
      <main >
    
       {photos && photos.slice(0,50).map((photo)=>{
         return(
            <div key={photo.id}>
              <Image src={photo.thumbnailUrl} alt={photo.id}/>
              <Image src={photo.url} alt={photo.id}/>
              <h1> {photo.title}</h1>
            </div>
         );
       })
       }
      </main>
    </div>
  )
}

export default Album
