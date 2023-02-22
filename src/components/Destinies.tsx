import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

interface Destiny extends AxiosResponse {
  data: {
    attributes: {
      title: string,
      description: string,
      isInternational: boolean,
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
    console.log(data)
  
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
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-xl font-bold underline text-blue-500">
        Hello Mahlo!
      </h1>

      <div className='flex flex-col justify-center items-center'>

        <p>{data?.data[0].attributes.title}</p>
        <p>{data?.data[0].attributes.description}</p>
        <p>{data?.data[0].attributes.isInternational ? 'internacional' : 'nacional'}</p>
        <p>{data?.data[0].attributes.createdAt}</p>

      </div>

      <img className='w-96' src={"http://localhost:1337" + data?.data[0].attributes.photos.data[0].attributes.url} />

    </div>
  )
}

export default Destinies