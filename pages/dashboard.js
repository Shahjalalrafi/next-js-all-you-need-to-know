import React, { useEffect, useState } from 'react'

export default function dashboard() {

    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboradData] = useState([null])

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setDashboradData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    }, [])
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    // for (let i = 0; i < dashboardData.length; i++) {
    //     console.log(dashboardData[i].CuisineStyle)
    //     dashboardData[i].CuisineStyle.map
    // }
    return (
        <div>
            <h2>Dashboard</h2>
                {
                    dashboardData.map(data => (
                        // console.log(data)
                        console.log(data.Ranking)
                    ))
                }
            {/* <h2>{dashboardData.likes}</h2>
            <h2>{dashboardData.comment}</h2>
            <h2>{dashboardData.followers}</h2>
            <h2>{dashboardData.following}</h2> */}
        </div>
    )
}
