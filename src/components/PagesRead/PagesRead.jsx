
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getBooks } from "../utils/index";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesRead = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const booked = getBooks()
        setBooks(booked)
    }
        , [])
    const chartData = books.map(book => ({
        name: ` ${book.bookName}`,
        pages: book.totalPages
    }));
    return (

        <div>
            <h2 className="flex justify-center items-center bg-green-200 py-4 text-2xl font-bold mt-4 rounded-lg mb-4">Bar Chart of Reading Books</h2>
            <ResponsiveContainer width="100%" aspect={1.5}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell - ${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>



    );
};




export default PagesRead;