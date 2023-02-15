import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

interface Destiny extends AxiosResponse {
  data: {
    attributes: {

      title: string, description: string, isInternational: boolean, publishedAt: string, createdAt: string, updatedAt: string
    }
  }[],
  meta: {
    pagination: {
      page: number,
      pagSize: 25, pageCount: 1, total: 1
    }
  }
}


function App() {
  const [data, setData] = useState<Destiny>()
  console.log(data)

  const fetchDestinies = async () => {

    const res = await axios.get('http://localhost:1337/api/destinies').catch(err => {
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

    </div>
  )
}

export default App
