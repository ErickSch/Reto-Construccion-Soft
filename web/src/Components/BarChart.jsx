import { Bar } from "react-chartjs-2";

export default function BarChart({ chartData }) {
    return (
      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Porcentaje de cursos completados (%)"
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    );
  }
