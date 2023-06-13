import { CountEvents } from "../../api/App";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


const Events = await CountEvents()
console.log(Events.data.rows[0].eventos);


const pdata = [
  {
    name: "X",
    Total: 0,
  },
  {
    name: "Eventos",
    Total:`${Events.data.rows[0].eventos}`,
  },
  {
    name: "Usuarios",
    Total: 4,
  },
  {
    name: "Empresas",
    Total: 5,
  },
];


function stats() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line
            dataKey="Total"
            type="monotone"
            stroke="#8884d8"
            strokeWidth="6"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default stats;
