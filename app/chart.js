import {getData} from './requests.js';
import {getGoals} from './totalGoals.js';

const ctx = document.getElementById('myChart').getContext('2d');

export async function createChart(){


const goleadores = await getData();
const goles = await getGoals();

const myChart = new Chart(ctx, {
    
    type: 'bar',
    data: {
        labels: [goleadores[0].name, goleadores[1].name, goleadores[2].name, goleadores[3].name, goleadores[4].name],
        datasets: [{
            label: '# de goles',
            data: [goles[0].goals.total, goles[1].goals.total, goles[2].goals.total, goles[3].goals.total, goles[4].goals.total],
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
