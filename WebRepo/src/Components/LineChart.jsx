
import { Line } from "react-chartjs-2";

export default function LineChart({ chartData }) {
    return (
      <div className="chart-container">
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Puntuaciones totales (pts.)"
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
