import styles from './VerticalChart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as chartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins
} from 'chart.js'
import { useState, useEffect} from 'react'

chartJS. register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function VerticalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
                label: 'Sale $',
                data: [15234, 224382, 19245, 28356, 14235, 31000],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)'
            }]
        })
        setChartOptions({
            plugins: {
                Legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    })

    return(
        <>
            <Bar data={chartData} options={chartOptions} style={{ width: '500px', height: '300px'}}/>
        </>
    )
}