"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Users,
  Mail,
  Clock,
  RefreshCw,
  Search,
} from "lucide-react";

interface User {
  _id: string;
  name: string;
  email: string;
  designation?: string;
  department?: string;
  division?: string;
  zone?: string;
  phoneNumber?: string;
  createdAt: string;
  isAdmin: boolean;
}

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read";
  createdAt: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"users" | "contacts">("users");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      fetchData();
    }
  }, [status, router]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [usersRes, contactsRes] = await Promise.all([
        fetch("/api/admin/users"),
        fetch("/api/admin/contacts"),
      ]);

      if (usersRes.ok) {
        const usersData = await usersRes.json();
        setUsers(usersData.users || []);
      }

      if (contactsRes.ok) {
        const contactsData = await contactsRes.json();
        setContacts(contactsData.contacts || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const stats = {
    totalUsers: users.length,
    totalContacts: contacts.length,
    unreadContacts: contacts.filter((c) => c.status === "unread").length,
  };

  if (loading || status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-400 mx-auto mb-4"></div>
          <p className="text-xl text-white">Loading Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold text-white mb-2 flex items-center gap-3">
                Admin Dashboard
              </h1>
              <p className="text-purple-200">
                Welcome back, {session?.user?.name}
              </p>
            </div>
            <button
              onClick={fetchData}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white lg:text-base text-sm px-4 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
            >
              <RefreshCw className="lg:w-5 lg:h-5 w-4 h-4" />
              Refresh
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">
                    Total Users
                  </p>
                  <p className="lg:text-4xl text-2xl font-bold text-white mt-2">
                    {stats.totalUsers}
                  </p>
                </div>
                <Users className="lg:w-12 lg:h-12 w-8 h-8 text-blue-200" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">
                    Total Messages
                  </p>
                  <p className="lg:text-4xl text-2xl font-bold text-white mt-2">
                    {stats.totalContacts}
                  </p>
                </div>
                <Mail className="lg:w-12 lg:h-12 w-8 h-8 text-purple-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl lg:p-6 p-3 shadow-2xl">
          <div className="flex gap-4 mb-6 border-b border-slate-700 pb-4">
            <button
              onClick={() => setActiveTab("users")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "users"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Registered Users
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "contacts"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Contact Messages
              {stats.unreadContacts > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {stats.unreadContacts}
                </span>
              )}
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none"
              />
            </div>
          </div>

          {/* Content */}
          {activeTab === "users" ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
                      Designation
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
                      Division
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {filteredUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          
                          <div>
                            <p className="text-white font-medium">
                              {user.name}
                            </p>
                            {user.isAdmin && (
                              <span className="text-xs bg-yellow-500 text-yellow-900 px-2 py-1 rounded">
                                Admin
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {user.designation || "-"}
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {user.division || "-"}
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {user.phoneNumber || "-"}
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredUsers.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                  No users found
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredContacts.map((contact) => (
                <div
                  key={contact._id}
                  className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {contact.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            contact.status === "unread"
                              ? "bg-orange-500 text-white"
                              : "bg-blue-500 text-white"
                          }`}
                        >
                          {contact.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-purple-300 text-sm mb-1">
                        {contact.email}
                      </p>
                      <p className="text-slate-400 text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {new Date(contact.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-white font-medium mb-2">
                      Subject: {contact.subject}
                    </p>
                    <p className="text-slate-300 line-clamp-2">
                      {contact.message}
                    </p>
                  </div>
                </div>
              ))}
              {filteredContacts.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                  No messages found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      
    </div>
  );
}

