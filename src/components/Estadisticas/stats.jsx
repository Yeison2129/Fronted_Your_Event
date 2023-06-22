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

const Events =  await CountEvents();
const Company =   await CountCompany();
const Users =  await CountUser();




let eventos = Events.data.data[0].eventos;
let empresas = Company.data.respons[0].empresas
let usuarios = Users.data.data[0].users

const pdata = [
  {
    name: "",
    Total: 0,
  },
  {
    name: "Usuarios",
    Total: usuarios,
  },
  {
    name: "Empresas",
    Total: empresas,
  },

  {
    name: "Eventos",
    Total: eventos,
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
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default stats;
