<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {

        labels: [2015,2016,2017,2018,2019,2020],

        datasets: [{
            data: [1.09525,1.03928,1.17703,1.14082,1.11948,1.133387],
            label: "€ EUR to USD",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [0.9116,0.9618,0.8499,0.8722,0.8929,0.8820],
            label: "$ USD to EUR",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: [1.35655,1.17368,1.12643,1.10936,1.10630,1.11426],
            label: "£ GRP to EUR",
            borderColor: "#3cba9f",
            fill: false
        }],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
</script>