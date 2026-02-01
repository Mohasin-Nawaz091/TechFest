import React, { useState } from 'react';
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
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('Overview');
    const [searchTerm, setSearchTerm] = useState('');

    // Clear search term when switching sections
    React.useEffect(() => {
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

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const stats = [
        { label: 'Total Registrations', value: '1,250', icon: Users, growth: '+12%' },
        { label: 'Total Volunteers', value: '210', icon: UserCheck, growth: '+5%' },
        { label: 'Total Sponsors', value: '12', icon: Briefcase, growth: '0%' },
        { label: 'Live Visitors', value: '345', icon: Activity, growth: '+18%' },
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
        <div className="admin-container">
            {/* Sidebar */}
            <aside className={`admin-sidebar ${!isSidebarOpen ? 'collapsed' : ''}`}>
                <div className="sidebar-brand">
                    <LayoutDashboard size={24} color="#2962FF" />
                    <span className="text-gradient">TechFest Admin</span>
                </div>

                <nav className="sidebar-menu">
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
                        <div
                            key={item.name}
                            className={`sidebar-item ${activeSection === item.name ? 'active' : ''}`}
                            onClick={() => setActiveSection(item.name)}
                        >
                            <item.icon size={20} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </nav>

                <div className="logout-container">
                    <button className="logout-btn">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`admin-content ${!isSidebarOpen ? 'expanded' : ''}`}>

                {/* Top Bar */}
                <header className="dashboard-topbar">
                    <div className="topbar-left">
                        <button className="toggle-sidebar-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <Menu size={24} />
                        </button>
                        <h1 className="section-header-title">{activeSection}</h1>
                    </div>

                    <div className="topbar-right">
                        {activeSection !== 'Overview' && activeSection !== 'Announcements' && (
                            <div className="search-bar">
                                <Search size={18} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        )}
                        <button className="icon-btn"><Bell size={20} /></button>
                        <div className="profile-section">
                            <div className="profile-img"><User size={20} /></div>
                            <span>Admin</span>
                        </div>
                    </div>
                </header>

                <div className="content-scrollable">
                    {/* OVERVIEW SECTION */}
                    {activeSection === 'Overview' && (
                        <>
                            {/* Stats Grid */}
                            <div className="stats-grid">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-card">
                                        <div className="stat-header">
                                            <div className="stat-icon">
                                                <stat.icon size={24} />
                                            </div>
                                            <span className="stat-growth">{stat.growth}</span>
                                        </div>
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Chart & Activity Section */}
                            <div className="dashboard-grid">
                                <div className="chart-wrapper">
                                    <div className="chart-container">
                                        <h2 className="section-title">Registration Trends</h2>
                                        <div style={{ width: '100%', height: 300 }}>
                                            <ResponsiveContainer>
                                                <LineChart data={data}>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                                                    <YAxis stroke="rgba(255,255,255,0.5)" />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#0A0A0B', border: '1px solid rgba(255,255,255,0.1)' }}
                                                        itemStyle={{ color: '#fff' }}
                                                        labelStyle={{ color: '#ccc' }}
                                                    />
                                                    <Line type="monotone" dataKey="regs" stroke="#1976D2" strokeWidth={3} dot={{ fill: '#1976D2' }} />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    <div className="chart-container" style={{ marginTop: '1.5rem' }}>
                                        <h2 className="section-title">Participation by Dept</h2>
                                        <div style={{ width: '100%', height: 300 }}>
                                            <ResponsiveContainer>
                                                <PieChart>
                                                    <Pie
                                                        data={pieData}
                                                        cx="50%"
                                                        cy="50%"
                                                        innerRadius={60}
                                                        outerRadius={80}
                                                        paddingAngle={5}
                                                        dataKey="value"
                                                    >
                                                        {pieData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#0A0A0B', border: '1px solid rgba(255,255,255,0.1)' }}
                                                        itemStyle={{ color: '#fff' }}
                                                    />
                                                    <Legend wrapperStyle={{ color: '#fff' }} />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>

                                <div className="activity-container">
                                    <h2 className="section-title">Recent Activity</h2>
                                    <div className="activity-list">
                                        {filterData(activities).map((item, index) => (
                                            <div key={index} className="activity-item">
                                                <div className="activity-avatar">{item.user}</div>
                                                <div className="activity-details">
                                                    <p className="activity-text">{item.text}</p>
                                                    <span className="activity-time">{item.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* REGISTRATIONS SECTION */}
                    {activeSection === 'Registrations' && (
                        <div className="module-container">
                            <h2 className="section-title">Manage Registrations</h2>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Dept</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterData(registrations).map(reg => (
                                        <tr key={reg.id}>
                                            <td>#{reg.id}</td>
                                            <td>{reg.name}</td>
                                            <td>{reg.dept}</td>
                                            <td><span className={`status-badge ${reg.status.toLowerCase()}`}>{reg.status}</span></td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn approve" onClick={() => handleStatusUpdate(reg.id, 'registration', 'Approved')}><CheckCircle size={18} /></button>
                                                    <button className="action-btn reject" onClick={() => handleStatusUpdate(reg.id, 'registration', 'Rejected')}><XCircle size={18} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* VOLUNTEERS SECTION */}
                    {activeSection === 'Volunteers' && (
                        <div className="module-container">
                            <h2 className="section-title">Manage Volunteers</h2>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterData(volunteers).map(vol => (
                                        <tr key={vol.id}>
                                            <td>#{vol.id}</td>
                                            <td>{vol.name}</td>
                                            <td>{vol.role}</td>
                                            <td><span className={`status-badge ${vol.status.toLowerCase()}`}>{vol.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* SPEAKERS SECTION */}
                    {activeSection === 'Speakers' && (
                        <div className="module-container">
                            <div className="section-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 className="section-title" style={{ marginBottom: 0 }}>Manage Speakers</h2>
                                <button className="btn-small" onClick={() => openModal('speaker')}>+ Add Speaker</button>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Topic</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterData(speakers).map(spk => (
                                        <tr key={spk.id}>
                                            <td>#{spk.id}</td>
                                            <td>{spk.name}</td>
                                            <td>{spk.topic}</td>
                                            <td><span className={`status-badge ${spk.status === 'Confirmed' ? 'approved' : 'pending'}`}>{spk.status}</span></td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn approve" onClick={() => handleStatusUpdate(spk.id, 'speaker', 'Confirmed')}><CheckCircle size={18} /></button>
                                                    <button className="action-btn reject" onClick={() => handleStatusUpdate(spk.id, 'speaker', 'Rejected')}><XCircle size={18} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* EVENTS SECTION */}
                    {activeSection === 'Events' && (
                        <div className="module-container">
                            <div className="section-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 className="section-title" style={{ marginBottom: 0 }}>Manage Events</h2>
                                <button className="btn-small" onClick={() => openModal('event')}>+ Add Event</button>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Event Name</th>
                                        <th>Date</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterData(events).map(evt => (
                                        <tr key={evt.id}>
                                            <td>#{evt.id}</td>
                                            <td>{evt.name}</td>
                                            <td>{evt.date}</td>
                                            <td>{evt.location}</td>
                                            <td><span className="status-badge approved">{evt.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* SPONSORS SECTION */}
                    {activeSection === 'Sponsors' && (
                        <div className="module-container">
                            <div className="section-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 className="section-title" style={{ marginBottom: 0 }}>Manage Sponsors</h2>
                                <button className="btn-small" onClick={() => openModal('sponsor')}>+ Add Sponsor</button>
                            </div>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Company</th>
                                        <th>Tier</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterData(sponsors).map(sp => (
                                        <tr key={sp.id}>
                                            <td>#{sp.id}</td>
                                            <td>{sp.name}</td>
                                            <td>{sp.tier}</td>
                                            <td><span className={`status-badge ${sp.status === 'Active' ? 'approved' : 'pending'}`}>{sp.status}</span></td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn approve" onClick={() => handleStatusUpdate(sp.id, 'sponsor', 'Active')}><CheckCircle size={18} /></button>
                                                    <button className="action-btn reject" onClick={() => handleStatusUpdate(sp.id, 'sponsor', 'Rejected')}><XCircle size={18} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* GALLERY UPLOAD SECTION */}
                    {activeSection === 'Gallery' && (
                        <div className="module-container">
                            <h2 className="section-title">Gallery Upload</h2>
                            <div className="upload-zone">
                                <Upload size={48} className="upload-icon" />
                                <h3>Drag & Drop files here</h3>
                                <p>or click to browse photos/videos</p>
                            </div>
                        </div>
                    )}

                    {/* ANNOUNCEMENTS SECTION */}
                    {activeSection === 'Announcements' && (
                        <div className="module-container">
                            <h2 className="section-title">Banner Manager</h2>
                            <div className="banner-control">
                                <div className="banner-info">
                                    <h3>Front Page Banner</h3>
                                    <p>Enable or disable the main announcement banner.</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Banner Message</h3>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <input
                                        type="text"
                                        className="modal-input"
                                        style={{ flex: 1 }}
                                        placeholder="Enter banner announcement..."
                                        defaultValue="Welcome to TechFest 2026! Registrations are now open."
                                    />
                                    <button className="btn-small">Update</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* MODAL */}
                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
                                Add New {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
                            </h3>
                            <div className="modal-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {modalType === 'event' && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Event Name"
                                            className="modal-input"
                                            value={newItem.name || ''}
                                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                        />
                                        <input
                                            type="date"
                                            className="modal-input"
                                            value={newItem.date || ''}
                                            onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Location"
                                            className="modal-input"
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
                                            className="modal-input"
                                            value={newItem.name || ''}
                                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Tier (Gold, Silver, etc.)"
                                            className="modal-input"
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
                                            className="modal-input"
                                            value={newItem.name || ''}
                                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Topic"
                                            className="modal-input"
                                            value={newItem.topic || ''}
                                            onChange={(e) => setNewItem({ ...newItem, topic: e.target.value })}
                                        />
                                    </>
                                )}
                                <div className="modal-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'flex-end' }}>
                                    <button className="btn-small" style={{ background: 'transparent', border: '1px solid #ccc', color: '#ccc' }} onClick={() => setIsModalOpen(false)}>Cancel</button>
                                    <button className="btn-small" onClick={handleAddItem}>Add</button>
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
