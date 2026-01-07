import React, { useState } from "react";
import {
  Calendar,
  Hash,
  CheckCircle,
  Briefcase
} from "lucide-react";

const InterviewForm = ({ applicationId }) => {
  const [formData, setFormData] = useState({
    applicationId: applicationId || "",
    scheduleDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Interview Scheduled:", formData);
    // API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-6"
      >
        {/* Header */}
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <Briefcase className="text-teal-500" />
          Schedule Interview
        </h2>

        {/* Application ID */}
        <div>
          <label className="font-medium flex items-center gap-1">
            <Hash size={16} /> Application ID
          </label>
          <input
            type="text"
            value={formData.applicationId}
            disabled
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
          />
        </div>

        {/* Schedule Date */}
        <div>
          <label className="font-medium flex items-center gap-1">
            <Calendar size={16} className="text-teal-500" />
            Interview Date & Time <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            name="scheduleDate"
            value={formData.scheduleDate}
            onChange={handleChange}
            required
            className="w-full p-3 mt-1 border border-gray-400 rounded-lg focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
        >
          <CheckCircle size={18} />
          Schedule Interview
        </button>
      </form>
    </div>
  );
};

export default InterviewForm;
