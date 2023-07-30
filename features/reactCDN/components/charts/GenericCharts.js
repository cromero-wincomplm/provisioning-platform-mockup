// ChartComponent.js
export function ChartComponent(props) {
    const { labels, data, label } = props;
    const { useEffect} = React;
    useEffect(() => {
        // Sample data for the chart
        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: label,
                    data: data,
                    backgroundColor: "rgba(75,192,192,0.6)",
                    borderColor: "rgba(75,192,192,1)",
                    borderWidth: 1,
                },
            ],
        };

        // Options for the chart
        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        // Get the canvas element to render the chart
        const ctx = document.getElementById("myChart").getContext("2d");

        // Create the bar chart using Chart.js
        new Chart(ctx, {
            type: "bar",
            data: chartData,
            options: options,
        });
    }, [labels, data, label]);

    return (

        <canvas id="myChart" width="400" height="300"></canvas>

    );
}

