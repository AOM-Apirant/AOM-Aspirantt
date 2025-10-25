"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Users,
  Mail,
  Clock,
  CheckCircle,
  XCircle,
  MessageCircle,
  UserCheck,
  RefreshCw,
  Eye,
  Filter,
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
  status: "unread" | "read" | "replied";
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
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

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

  const updateContactStatus = async (
    contactId: string,
    newStatus: "unread" | "read" | "replied"
  ) => {
    try {
      const response = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactId, status: newStatus }),
      });

      if (response.ok) {
        setContacts(
          contacts.map((c) =>
            c._id === contactId ? { ...c, status: newStatus } : c
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
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
    const matchesStatus =
      statusFilter === "all" || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalUsers: users.length,
    totalContacts: contacts.length,
    unreadContacts: contacts.filter((c) => c.status === "unread").length,
    repliedContacts: contacts.filter((c) => c.status === "replied").length,
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
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <UserCheck className="w-10 h-10 text-purple-400" />
                Admin Dashboard
              </h1>
              <p className="text-purple-200">
                Welcome back, {session?.user?.name}
              </p>
            </div>
            <button
              onClick={fetchData}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
            >
              <RefreshCw className="w-5 h-5" />
              Refresh
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">
                    Total Users
                  </p>
                  <p className="text-4xl font-bold text-white mt-2">
                    {stats.totalUsers}
                  </p>
                </div>
                <Users className="w-12 h-12 text-blue-200" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">
                    Total Messages
                  </p>
                  <p className="text-4xl font-bold text-white mt-2">
                    {stats.totalContacts}
                  </p>
                </div>
                <Mail className="w-12 h-12 text-purple-200" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">
                    Unread Messages
                  </p>
                  <p className="text-4xl font-bold text-white mt-2">
                    {stats.unreadContacts}
                  </p>
                </div>
                <MessageCircle className="w-12 h-12 text-orange-200" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">
                    Replied Messages
                  </p>
                  <p className="text-4xl font-bold text-white mt-2">
                    {stats.repliedContacts}
                  </p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
          <div className="flex gap-4 mb-6 border-b border-slate-700 pb-4">
            <button
              onClick={() => setActiveTab("users")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "users"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              <Users className="w-5 h-5" />
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
              <Mail className="w-5 h-5" />
              Contact Messages
              {stats.unreadContacts > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {stats.unreadContacts}
                </span>
              )}
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
            {activeTab === "contacts" && (
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none"
                >
                  <option value="all">All Status</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
              </div>
            )}
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
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
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
                              : contact.status === "read"
                              ? "bg-blue-500 text-white"
                              : "bg-green-500 text-white"
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
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </div>
                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-white font-medium mb-2">
                      Subject: {contact.subject}
                    </p>
                    <p className="text-slate-300 line-clamp-2">
                      {contact.message}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => updateContactStatus(contact._id, "read")}
                      disabled={contact.status === "read"}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg text-sm transition-colors"
                    >
                      Mark as Read
                    </button>
                    <button
                      onClick={() =>
                        updateContactStatus(contact._id, "replied")
                      }
                      disabled={contact.status === "replied"}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg text-sm transition-colors"
                    >
                      Mark as Replied
                    </button>
                    <button
                      onClick={() =>
                        updateContactStatus(contact._id, "unread")
                      }
                      disabled={contact.status === "unread"}
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg text-sm transition-colors"
                    >
                      Mark as Unread
                    </button>
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

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-slate-700 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Message Details</h2>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <XCircle className="w-8 h-8" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-purple-300 text-sm font-medium">
                  Name
                </label>
                <p className="text-white text-lg">{selectedContact.name}</p>
              </div>
              <div>
                <label className="text-purple-300 text-sm font-medium">
                  Email
                </label>
                <p className="text-white text-lg">{selectedContact.email}</p>
              </div>
              <div>
                <label className="text-purple-300 text-sm font-medium">
                  Subject
                </label>
                <p className="text-white text-lg">{selectedContact.subject}</p>
              </div>
              <div>
                <label className="text-purple-300 text-sm font-medium">
                  Message
                </label>
                <p className="text-white text-base leading-relaxed bg-slate-700/50 p-4 rounded-lg">
                  {selectedContact.message}
                </p>
              </div>
              <div>
                <label className="text-purple-300 text-sm font-medium">
                  Status
                </label>
                <p>
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      selectedContact.status === "unread"
                        ? "bg-orange-500 text-white"
                        : selectedContact.status === "read"
                        ? "bg-blue-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {selectedContact.status.toUpperCase()}
                  </span>
                </p>
              </div>
              <div>
                <label className="text-purple-300 text-sm font-medium">
                  Received On
                </label>
                <p className="text-white text-lg">
                  {new Date(selectedContact.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

