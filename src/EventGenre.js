import React, { useEffect,useState } from "react";
import{
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre =((events)=> {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];
    return(
        <ResponsiveContainer>
            <PieChart>
                <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value">
                    
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
export default EventGenre;