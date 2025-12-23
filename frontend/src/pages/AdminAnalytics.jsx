import React from 'react'
import AdminLayout from "../layouts/AdminLayout";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const categoryData = [
    { name: "Water", value: 40 },
    { name: "Electricity", value: 30 },
    { name: "Road", value: 25 },
    { name: "Other", value: 15 },
];

const priorityData = [
    { name: "High", value: 20 },
    { name: "Medium", value: 45 },
    { name: "Low", value: 45 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

function AdminAnalytics() {
    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-6">Analytics</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Chart */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">Complaints by Category</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={categoryData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Priority Chart */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">Complaints by Priority</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={priorityData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                            >
                                {priorityData.map((_, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminAnalytics
