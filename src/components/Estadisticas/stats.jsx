import { CountCompany, CountEvents, CountUser } from "../../api/App";
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

const Company = await CountCompany()
console.log(Company.data.rows[0].empresas);
const Users = await CountUser()


const pdata = [
  {
    name: "",
    Total: 0,
  },
  {
    name: "Eventos",
    Total:`${Events.data.rows[0].eventos}`,
  },
  {
    name: "Usuarios",
    Total: `${Users.data.rows[0].users}`,
  },
  {
    name: "Empresas",
    Total: `${Company.data.rows[0].empresas}`,
  },
  
];


function stats() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={1.5}>
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
            activeDot={{ r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default stats;
