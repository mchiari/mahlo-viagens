import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

interface Destiny extends AxiosResponse {
  data: {
    attributes: {
      title: string,
      description: string,
      isInternational: boolean,
      days: number,
      price: string,
      createdAt: string,
      publishedAt: string,
      updatedAt: string,
      photos: Photos
    }
  }[],
  meta: {
    pagination: {
      page: number,
      pagSize: 25, pageCount: 1, total: 1
    }
  }
}

interface Photos {
  data: {
    id: number,
    attributes: {
      url: string,
    }
  }[]
}

const Destinies = () => {
  const [data, setData] = useState<Destiny>()
  // console.log(data)

  const fetchDestinies = async () => {

    const res = await axios.get('http://localhost:1337/api/destinies?populate=*').catch(err => {
      console.log(err)
    })

    if (res) setData(res.data)

  }

  useEffect(() => {
    if (!data) fetchDestinies()
  }, [])


  return (
    <div className={"relative flex flex-col justify-center items-center py-10 gap-10 w-full mt-[400px]"}>


      <div className='relative flex justify-start items-start w-full text-2xl px-60 font-passion'>
        <span>VEJA OS DESTINOS MAIS POPULARES:</span>
      </div>

      <div className='relative flex justify-items-center gap-10'>

        {data && data.data.map(item => {


          return <div className='flex flex-col justify-center items-center  w-[200px] rounded-xl bg-white shadow-lg cursor-pointer hover:scale-[1.05] transition-all' key={item.attributes.title}>
            <img className='p-2 rounded-xl object-cover aspect-square' src={"http://localhost:1337" + item.attributes.photos.data[0].attributes.url} />


            <div className='flex justify-around w-full h-18 items-center py-2 select-none'>
              <div className='flex flex-col'>
                <p><b>{item.attributes.title}</b></p>
                <p className='font-light'>{item.attributes.isInternational ? 'Internacional' : 'Nacional'}</p>
              </div>

              <div className='flex flex-col items-end'>
                <p className='text-blue-500'><b>R${item.attributes.price}</b></p>
                <p className='font-light'>{item.attributes.days} dias</p>
              </div>

            </div>
            {/* <p>{data?.data[0].attributes.description}</p> */}
            {/* <p>{data?.data[0].attributes.createdAt}</p> */}

          </div>

        })}

      </div>
    </div>
  )
}

export default Destinies