import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mnjammy007')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    //         .catch(err => console.log(err))
    // }, []);
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >
            <h1 className='p-4'>GitHub Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="Github Image" width={200} />
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mnjammy007')
    return response.json()
}