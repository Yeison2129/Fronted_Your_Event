
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const pdata = [
    {
        name: 'X',
        Total: 0,
        Interesados: 0
    },
    {
        name: 'Eventos',
        Total: 11,
        Interesados: 6
    },
    {
        name: 'Usuarios',
        Total: 4,
        Interesados: 12
    },
    {
        name: 'Empresas',
        Total: 5,
        Interesados: 2
    },
];
  
function stats() {
    return (
        <>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="Total" type="monotone"
                        stroke="#8884d8" strokeWidth= "6" activeDot={{ r: 8 }} />
                    <Line dataKey="Interesados" type="monotone"
                        stroke="#82ca9d" strokeWidth= "6" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}




export default stats
