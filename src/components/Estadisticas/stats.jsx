
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
        name: 'MongoDb',
        student: 11,
        fees: 14
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
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
                    <Line dataKey="student" type="monotone"
                        stroke="#8884d8" strokeWidth= "6" activeDot={{ r: 8 }} />
                    <Line dataKey="fees" type="monotone"
                        stroke="#82ca9d" strokeWidth= "6" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
  



export default stats
