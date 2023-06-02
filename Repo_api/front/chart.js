import { hello } from './module.js';
import { getInfo } from './script_SQLEXER.js';
  
  const chartDiv = document.getElementById('chartSpace');
  console.log(data[0].palabra);


    new Chart(chartDiv, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

