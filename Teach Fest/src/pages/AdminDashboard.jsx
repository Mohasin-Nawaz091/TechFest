import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    Users,
    UserCheck,
    Calendar,
    Settings,
    LogOut,
    Briefcase,
    Activity,
    Menu,
    Search,
    Bell,
    User,
    Upload,
    CheckCircle,
    XCircle,
    Megaphone,
    Image as ImageIcon
} from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('Overview');
    const [searchTerm, setSearchTerm] = useState('');

    // Clear search term when switching sections
    useEffect(() => {
        setSearchTerm('');
    }, [activeSection]);

    // Dummy Data for Graph
    const data = [
        { name: 'Mon', regs: 40 },
        { name: 'Tue', regs: 30 },
        { name: 'Wed', regs: 65 },
        { name: 'Thu', regs: 45 },
        { name: 'Fri', regs: 90 },
        { name: 'Sat', regs: 120 },
        { name: 'Sun', regs: 150 },
    ];

    const pieData = [
        { name: 'Computer Science', value: 400 },
        { name: 'Engineering', value: 300 },
        { name: 'Business', value: 300 },
        { name: 'Arts', value: 200 },
    ];

    const COLORS = ['#2962FF', '#00E5FF', '#8b5cf6', '#F59E0B'];

    const stats = [
        { label: 'Total Registrations', value: '1,250', icon: Users, growth: '+12%', color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Total Volunteers', value: '210', icon: UserCheck, growth: '+5%', color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Total Sponsors', value: '12', icon: Briefcase, growth: '0%', color: 'text-purple-600', bg: 'bg-purple-50' },
        { label: 'Live Visitors', value: '345', icon: Activity, growth: '+18%', color: 'text-orange-600', bg: 'bg-orange-50' },
    ];

    const activities = [
        { user: 'AK', text: 'New registration: Ahmed Khan', time: '2 mins ago' },
        { user: 'Go', text: 'Sponsor added: Google', time: '1 hour ago' },
        { user: 'MR', text: 'Volunteer verified: Muhammad Rizwan', time: '3 hours ago' },
        { user: 'AI', text: 'Workshop "AI Future" updated', time: '5 hours ago' },
    ];

    // State for Data
    const [registrations, setRegistrations] = useState([
        { id: 1, name: 'Ahmed Khan', dept: 'CS', status: 'Pending' },
        { id: 2, name: 'Fatima Ali', dept: 'Eng', status: 'Approved' },
        { id: 3, name: 'Bilal Ahmed', dept: 'Arts', status: 'Rejected' },
        { id: 4, name: 'Zainab Bibi', dept: 'Bus', status: 'Pending' },
        { id: 5, name: 'Usman Malik', dept: 'CS', status: 'Approved' },
    ]);

    const [volunteers, setVolunteers] = useState([
        { id: 1, name: 'Muhammad Rizwan', role: 'Coordinator', status: 'Active' },
        { id: 2, name: 'Ayesha Gul', role: 'Usher', status: 'Inactive' },
        { id: 3, name: 'Hamza Afridi', role: 'Technical', status: 'Active' },
    ]);

    const [events, setEvents] = useState([
        { id: 1, name: 'Hackathon', date: '2026-03-15', location: 'Hall A', status: 'Scheduled' },
        { id: 2, name: 'Robotics War', date: '2026-03-16', location: 'Arena', status: 'Scheduled' },
        { id: 3, name: 'AI Seminar', date: '2026-03-17', location: 'Auditorium', status: 'Completed' },
    ]);

    const [sponsors, setSponsors] = useState([
        { id: 1, name: 'Google', tier: 'Platinum', status: 'Active' },
        { id: 2, name: 'Microsoft', tier: 'Gold', status: 'Active' },
        { id: 3, name: 'IBM', tier: 'Silver', status: 'Pending' },
        { id: 4, name: 'Systems Ltd', tier: 'Check', status: 'Active' },
    ]);

    const [speakers, setSpeakers] = useState([
        { id: 1, name: 'Dr. A. Khan', topic: 'AI Future', status: 'Confirmed' },
        { id: 2, name: 'Sarah J.', topic: 'Cyber Security', status: 'Pending' },
    ]);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(''); // 'event', 'sponsor', 'speaker'
    const [newItem, setNewItem] = useState({});

    const openModal = (type) => {
        setModalType(type);
        setNewItem({});
        setIsModalOpen(true);
    };

    const handleAddItem = () => {
        const id = Date.now(); // Simple ID generation
        if (modalType === 'event') {
            setEvents([...events, { id, status: 'Scheduled', ...newItem }]);
        } else if (modalType === 'sponsor') {
            setSponsors([...sponsors, { id, status: 'Active', ...newItem }]);
        } else if (modalType === 'speaker') {
            setSpeakers([...speakers, { id, status: 'Pending', ...newItem }]);
        }
        setIsModalOpen(false);
    };

    const filterData = (data) => {
        return data.filter(item =>
            Object.values(item).some(val =>
                String(val).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    };

    // Handle Status Updates (Approve/Reject)
    const handleStatusUpdate = (id, type, newStatus) => {
        if (type === 'registration') {
            setRegistrations(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
        } else if (type === 'volunteer') {
            setVolunteers(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
        } else if (type === 'sponsor') {
            setSponsors(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
        } else if (type === 'speaker') {
            setSpeakers(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
        }
    };

    return (
        <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-50
                    ${isSidebarOpen ? 'w-64' : 'w-20'}
                `}
            >
                <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                        <LayoutDashboard size={20} />
                    </div>
                    {isSidebarOpen && (
                        <span className="font-bold text-lg text-gradient">TechFest Admin</span>
                    )}
                </div>

                <nav className="flex-1 flex flex-col gap-1 p-4 overflow-y-auto">
                    {[
                        { name: 'Overview', icon: LayoutDashboard },
                        { name: 'Registrations', icon: Users },
                        { name: 'Volunteers', icon: UserCheck },
                        { name: 'Events', icon: Calendar },
                        { name: 'Speakers', icon: User },
                        { name: 'Sponsors', icon: Briefcase },
                        { name: 'Gallery', icon: ImageIcon },
                        { name: 'Announcements', icon: Megaphone },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
                                ${activeSection === item.name
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                            `}
                            onClick={() => setActiveSection(item.name)}
                            title={!isSidebarOpen ? item.name : ''}
                        >
                            <item.icon size={20} />
                            {isSidebarOpen && <span>{item.name}</span>}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all">
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">

                {/* Top Bar */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-40">
                    <div className="flex items-center gap-4">
                        <button
                            className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <Menu size={20} />
                        </button>
                        <h1 className="text-xl font-bold text-gray-800">{activeSection}</h1>
                    </div>

                    <div className="flex items-center gap-6">
                        {activeSection !== 'Overview' && activeSection !== 'Announcements' && (
                            <div className="relative hidden md:block">
                                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64 transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        )}
                        <button className="relative text-gray-500 hover:text-primary transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white">
                                <User size={18} />
                            </div>
                            <span className="font-medium text-sm hidden md:block">Admin User</span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    {/* OVERVIEW SECTION */}
                    {activeSection === 'Overview' && (
                        <div className="space-y-8">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                                <stat.icon size={22} />
                                            </div>
                                            <span className="px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full">
                                                {stat.growth}
                                            </span>
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Charts & Activity Section */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 space-y-8">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                        <h2 className="text-lg font-bold mb-6">Registration Trends</h2>
                                        <div className="h-[300px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={data}>
                                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                                    />
                                                    <Line type="monotone" dataKey="regs" stroke="#256af4" strokeWidth={3} dot={{ fill: '#256af4', r: 4 }} activeDot={{ r: 6 }} />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                        <h2 className="text-lg font-bold mb-6">Participation by Dept</h2>
                                        <div className="h-[300px] w-full">
                                            <ResponsiveContainer>
                                                <PieChart>
                                                    <Pie
                                                        data={pieData}
                                                        cx="50%"
                                                        cy="50%"
                                                        innerRadius={80}
                                                        outerRadius={110}
                                                        paddingAngle={5}
                                                        dataKey="value"
                                                    >
                                                        {pieData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                                                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit">
                                    <h2 className="text-lg font-bold mb-6">Recent Activity</h2>
                                    <div className="space-y-6">
                                        {filterData(activities).map((item, index) => (
                                            <div key={index} className="flex gap-4 p-2 hover:bg-gray-50 rounded-xl transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 border border-blue-100">
                                                    {item.user}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-800">{item.text}</p>
                                                    <span className="text-xs text-gray-400 mt-1 block">{item.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* REGISTRATIONS SECTION */}
                    {activeSection === 'Registrations' && (
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-lg font-bold">Manage Registrations</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                                        <tr>
                                            <th className="p-4">ID</th>
                                            <th className="p-4">Name</th>
                                            <th className="p-4">Dept</th>
                                            <th className="p-4">Status</th>
                                            <th className="p-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        {filterData(registrations).map(reg => (
                                            <tr key={reg.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">#{reg.id}</td>
                                                <td className="p-4">{reg.name}</td>
                                                <td className="p-4 text-gray-500">{reg.dept}</td>
                                                <td className="p-4">
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                                                    ${reg.status === 'Approved' ? 'bg-green-50 text-green-600' :
                                                            reg.status === 'Rejected' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'}
                                                `}>
                                                        {reg.status}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex justify-end gap-2">
                                                        <button onClick={() => handleStatusUpdate(reg.id, 'registration', 'Approved')} className="p-1 text-green-500 hover:bg-green-50 rounded"><CheckCircle size={18} /></button>
                                                        <button onClick={() => handleStatusUpdate(reg.id, 'registration', 'Rejected')} className="p-1 text-red-500 hover:bg-red-50 rounded"><XCircle size={18} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* VOLUNTEERS SECTION */}
                    {activeSection === 'Volunteers' && (
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-lg font-bold">Manage Volunteers</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                                        <tr>
                                            <th className="p-4">ID</th>
                                            <th className="p-4">Name</th>
                                            <th className="p-4">Role</th>
                                            <th className="p-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        {filterData(volunteers).map(vol => (
                                            <tr key={vol.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">#{vol.id}</td>
                                                <td className="p-4">{vol.name}</td>
                                                <td className="p-4 text-gray-500">{vol.role}</td>
                                                <td className="p-4">
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                                                    ${vol.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}
                                                `}>
                                                        {vol.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* SPEAKERS SECTION */}
                    {activeSection === 'Speakers' && (
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-lg font-bold">Manage Speakers</h2>
                                <button onClick={() => openModal('speaker')} className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
                                    + Add Speaker
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                                        <tr>
                                            <th className="p-4">ID</th>
                                            <th className="p-4">Name</th>
                                            <th className="p-4">Topic</th>
                                            <th className="p-4">Status</th>
                                            <th className="p-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        {filterData(speakers).map(spk => (
                                            <tr key={spk.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">#{spk.id}</td>
                                                <td className="p-4">{spk.name}</td>
                                                <td className="p-4 text-gray-500">{spk.topic}</td>
                                                <td className="p-4">
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                                                    ${spk.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}
                                                `}>
                                                        {spk.status}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex justify-end gap-2">
                                                        <button onClick={() => handleStatusUpdate(spk.id, 'speaker', 'Confirmed')} className="p-1 text-green-500 hover:bg-green-50 rounded"><CheckCircle size={18} /></button>
                                                        <button onClick={() => handleStatusUpdate(spk.id, 'speaker', 'Rejected')} className="p-1 text-red-500 hover:bg-red-50 rounded"><XCircle size={18} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* EVENTS SECTION */}
                    {activeSection === 'Events' && (
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-lg font-bold">Manage Events</h2>
                                <button onClick={() => openModal('event')} className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
                                    + Add Event
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                                        <tr>
                                            <th className="p-4">ID</th>
                                            <th className="p-4">Event Name</th>
                                            <th className="p-4">Date</th>
                                            <th className="p-4">Location</th>
                                            <th className="p-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        {filterData(events).map(evt => (
                                            <tr key={evt.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">#{evt.id}</td>
                                                <td className="p-4">{evt.name}</td>
                                                <td className="p-4 text-gray-500">{evt.date}</td>
                                                <td className="p-4 text-gray-500">{evt.location}</td>
                                                <td className="p-4">
                                                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                                                        {evt.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* SPONSORS SECTION */}
                    {activeSection === 'Sponsors' && (
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-lg font-bold">Manage Sponsors</h2>
                                <button onClick={() => openModal('sponsor')} className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
                                    + Add Sponsor
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                                        <tr>
                                            <th className="p-4">ID</th>
                                            <th className="p-4">Company</th>
                                            <th className="p-4">Tier</th>
                                            <th className="p-4">Status</th>
                                            <th className="p-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        {filterData(sponsors).map(sp => (
                                            <tr key={sp.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">#{sp.id}</td>
                                                <td className="p-4">{sp.name}</td>
                                                <td className="p-4 text-gray-500">{sp.tier}</td>
                                                <td className="p-4">
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                                                    ${sp.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}
                                                `}>
                                                        {sp.status}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex justify-end gap-2">
                                                        <button onClick={() => handleStatusUpdate(sp.id, 'sponsor', 'Active')} className="p-1 text-green-500 hover:bg-green-50 rounded"><CheckCircle size={18} /></button>
                                                        <button onClick={() => handleStatusUpdate(sp.id, 'sponsor', 'Rejected')} className="p-1 text-red-500 hover:bg-red-50 rounded"><XCircle size={18} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* GALLERY UPLOAD SECTION */}
                    {activeSection === 'Gallery' && (
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center max-w-2xl mx-auto mt-10">
                            <h2 className="text-xl font-bold mb-6">Gallery Upload</h2>
                            <div className="border-2 border-dashed border-gray-200 rounded-xl h-64 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer group">
                                <div className="p-4 bg-white rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                    <Upload size={32} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-gray-700">Drag & Drop files here</h3>
                                <p className="text-sm text-gray-500 mt-1">or click to browse photos/videos</p>
                            </div>
                        </div>
                    )}

                    {/* ANNOUNCEMENTS SECTION */}
                    {activeSection === 'Announcements' && (
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-3xl mx-auto mt-10">
                            <h2 className="text-xl font-bold mb-6">Banner Manager</h2>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-6">
                                <div>
                                    <h3 className="font-bold text-gray-800">Front Page Banner</h3>
                                    <p className="text-sm text-gray-500">Enable or disable the main announcement banner.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-gray-100">
                                <h3 className="font-semibold text-gray-800">Banner Message</h3>
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        placeholder="Enter banner announcement..."
                                        defaultValue="Welcome to TechFest 2026! Registrations are now open."
                                    />
                                    <button className="px-6 py-2 bg-gray-900 text-white font-medium rounded-xl hover:bg-black transition-colors">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* MODAL */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
                            <h3 className="text-xl font-bold mb-6">
                                Add New {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {modalType === 'event' && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Event Name"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            value={newItem.name || ''}
                                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                        />
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            value={newItem.date || ''}
                                            onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Location"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            value={newItem.location || ''}
                                            onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
                                        />
                                    </>
                                )}
                                {modalType === 'sponsor' && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            value={newItem.name || ''}
                                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Tier (Gold, Silver, etc.)"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            value={newItem.tier || ''}
                                            onChange={(e) => setNewItem({ ...newItem, tier: e.target.value })}
                                        />
                                    </>
                                )}
                                {modalType === 'speaker' && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Speaker Name"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            value={newItem.name || ''}
                                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Topic"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            value={newItem.topic || ''}
                                            onChange={(e) => setNewItem({ ...newItem, topic: e.target.value })}
                                        />
                                    </>
                                )}
                                <div className="flex gap-3 mt-4 justify-end">
                                    <button
                                        className="px-4 py-2 text-gray-500 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
                                        onClick={handleAddItem}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
