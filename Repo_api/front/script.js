const getBtn = document.getElementById('getbtn');
const ptag = document.getElementById('getinfo');
const lista = document.getElementById('lista');
const chartDiv = document.getElementById('chartSpace');


const getURL = 'http://localhost:5000/getitems'; //Poner el link del get

getBtn.addEventListener('click', getInfo);


async function getInfo(e){
    e.preventDefault();
    const res = await fetch(getURL,
        {
            method: 'GET'
        });
        
        const data = await res.json();
        console.log(data[0]);
        ptag.innerText = data[0].productname;


        let productNames = "";
        let productNames10 = [];
        let productPrices10 = [];

        for (product of data) {
          productNames += '<li class="list-group-item list-group-item-secondary">' + product.productname + '</li>';
        }

        for (let i = 0; i<10; i++ ){
            productNames10.push(data[i].productname);
            productPrices10.push(data[i].unitprice);
        }

        console.log(productNames10);
        console.log(productPrices10);
      
        lista.innerHTML = productNames;


        new Chart(chartDiv, {
            type: 'bar',
            data: {
              labels: productNames10,
              datasets: [{
                label: 'Products',
                data: productPrices10,
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

};


