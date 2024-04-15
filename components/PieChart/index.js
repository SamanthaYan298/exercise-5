import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'

import {
    Chart as chartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'
import { useState, useEffect} from 'react'

chartJS. register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Bule", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: [
                        'rgb(255, 99, 235, 0.4)',
                        'rgb(53, 162, 25, 0.4)',
                        'rgb(255, 162, 235, 0.4)',
                        'rgb(53, 192, 235, 0.4)',
                        'rgb(33, 162, 35, 0.4)',
                        'rgb(19, 12, 25, 0.4)',
                    ],
                    backgroundColor: [
                        'rgb(255, 99, 235, 0.4)',
                        'rgb(53, 162, 25, 0.4)',
                        'rgb(255, 162, 235, 0.4)',
                        'rgb(53, 192, 235, 0.4)',
                        'rgb(33, 162, 35, 0.4)',
                        'rgb(19, 12, 25, 0.4)',
                    ],
                    borderWidth: 1,

                },
        ]
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
            <Pie data={chartData} options={chartOptions} style={{ width: '500px', height: '300px'}}/>
        </>
    )
}