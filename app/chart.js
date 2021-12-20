import {getData} from './requests.js';

const ctx = document.getElementById('myChart').getContext('2d');

export async function createChart(){


const goleadores = await getData();
const goles = await getData();
console.log(goles);

const myChart = new Chart(ctx, {
    
    type: 'bar',
    data: {
        labels: [goleadores[0].name, goleadores[1].name, goleadores[2].name, goleadores[3].name, goleadores[4].name],
        datasets: [{
            label: '# de votos',
            data: [10, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
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

}
