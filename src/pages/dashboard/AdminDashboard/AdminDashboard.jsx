import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const AdminDashboard = () => {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <main className="flex-1 p-6 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sales Data</h2>
            <Bar data={barData} />
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Revenue Data</h2>
            <Line data={lineData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
