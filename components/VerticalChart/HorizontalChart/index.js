import styles from './HorizontalChart.module.css'
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

export default function HorizontalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'data 1',
                    data: [15234, 224382, 19245, 28356, 14235, 31000],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
                },
                {
                    label: 'data 2',
                    data: [15234, 224382, 19245, 28356, 14235, 31000],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(150, 162, 235, 0.4)'
                },
                {
                    label: 'data 3',
                    data: [15234, 224382, 19245, 28356, 14235, 31000],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(240, 162, 235, 0.4)'
                },
        ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                Legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                },
                maintainAspectRatio: true,
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