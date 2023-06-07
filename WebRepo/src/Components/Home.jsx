import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

Chart.register(CategoryScale);

export default function MyComponent() {
  // const url = 'http://localhost:5000/getitems';
  const url = 'http://localhost:5000/getpeople';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    updateChartData();
  }, [data]);

  const updateChartData = () => {
    const productNames10 = data.slice(0, 5).map((dataObj) => dataObj.Name);
    const productPrices10 = data.slice(0, 5).map((dataObj) => dataObj.Age);

    const newChartData = {
      labels: productNames10,
      datasets: [
        {
          label: 'Users Gained',
          data: productPrices10,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 2,
        },
      ],
    };

    setChartData(newChartData);
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Users Gained',
        data: [],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'grey',
        borderWidth: 2,
      },
    ],
  });


  return (
    <div className="Home">
        <div className='container-fluid'>
          <h1 className='text-center mb-5'><b>Indicadores de desempeño</b></h1>
          <div className="row">
            <div className="col-6 mb-5">

              <BarChart chartData={chartData} />
            </div>
            <div className="col-6 mb-5">

              <LineChart chartData={chartData} />
            </div>
            <div className="col-6 container-fluid">
              <PieChart chartData={chartData} />
            </div>
          </div>

      </div>
    </div>
  );
}