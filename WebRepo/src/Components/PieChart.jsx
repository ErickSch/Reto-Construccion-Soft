// src/components/PieChart.js
import { Pie } from "react-chartjs-2";

export default function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Porcentaje de cursos por área (%)"
            }
          }
        }}
      />
    </div>
  );
}
