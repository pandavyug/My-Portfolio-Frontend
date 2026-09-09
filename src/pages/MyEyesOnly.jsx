import { useEffect, useState } from "react";
import { Mail, RefreshCw, User, Calendar, MessageSquare } from "lucide-react";

import PageHeader from "../components/PageHeader";
import { getData } from "../data/userData";

export default function MyEyesOnly() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadData() {
    try {
      setLoading(true);
      setError("");
      const result = await getData();
      console.log("RESULT:", result);
      setUsers(result.users);
    } catch (err) {
      console.error("Error:", err);
      setError("Unable to load contact data.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="section-shell">
      <PageHeader
        eyebrow="Private Dashboard"
        title="My Eyes Only"
        description="View contact messages and information submitted through your portfolio."
      />

      <div className="mt-10 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Total Messages</p>

          <p className="mt-1 text-2xl font-bold text-white">{users.length}</p>
        </div>

        <button onClick={loadData} disabled={loading} className="primary-btn">
          <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {loading ? (
        <div className="glass mt-8 rounded-2xl p-10 text-center">
          <RefreshCw size={28} className="mx-auto animate-spin text-cyan-300" />

          <p className="mt-4 text-sm text-slate-400">Loading contact data...</p>
        </div>
      ) : (
        <div className="glass mt-8 overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr className="border-b border-white/10 bg-slate-950/40">
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-cyan-300">
                    #
                  </th>

                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-cyan-300">
                    Name
                  </th>

                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-cyan-300">
                    Email
                  </th>

                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-cyan-300">
                    Subject
                  </th>

                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-cyan-300">
                    Message
                  </th>

                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-cyan-300">
                    Created At
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-cyan-400/5"
                  >
                    <td className="px-6 py-5 text-sm text-slate-500">
                      {index + 1}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                          <User size={17} />
                        </span>

                        <span className="font-medium text-slate-200">
                          {item.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-cyan-300" />

                        <a
                          href={`mailto:${item.email}`}
                          className="text-sm text-slate-300 hover:text-cyan-300"
                        >
                          {item.email}
                        </a>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-slate-200">
                        {item.subject}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <p
                        className="max-w-[350px] truncate text-sm text-slate-400"
                        title={item.message}
                      >
                        {item.message}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar size={16} className="text-cyan-300" />

                        {item.createdAt}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!loading && users.length === 0 && (
        <div className="glass mt-8 rounded-2xl p-10 text-center">
          <MessageSquare size={40} className="mx-auto text-slate-600" />

          <h3 className="mt-4 text-lg font-semibold text-white">
            No Messages Yet
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            No contact form submissions have been received yet.
          </p>
        </div>
      )}
    </div>
  );
}
