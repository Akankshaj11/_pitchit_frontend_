import React, { useState } from "react";
import {
  Briefcase,
  Hash,
  Star,
  CheckCircle
} from "lucide-react";

const ApplicationForm = ({ jobId, studentId }) => {
  const [formData, setFormData] = useState({
    jobId: jobId || "",
    studentId: studentId || "",
    skills: "",
    atsScore: 0,
    status: "APPLIED",
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
    console.log("Application Submitted:", formData);
    // API call goes here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-6"
      >
        {/* Header */}
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <Briefcase className="text-teal-500" />
          Job Application
        </h2>

        {/* Job & Student IDs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-medium flex items-center gap-1">
              <Hash size={16} /> Job ID
            </label>
            <input
              type="text"
              value={formData.jobId}
              disabled
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
            />
          </div>

          <div>
            <label className="font-medium flex items-center gap-1">
              <Hash size={16} /> Student ID
            </label>
            <input
              type="text"
              value={formData.studentId}
              disabled
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="font-medium">
            Skills <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="React, Node, MongoDB"
            className="w-full p-3 border border-gray-400 rounded-lg mt-1 focus:outline-none"
            required
          />
        </div>

        {/* ATS Score */}
        <div>
          <label className="font-medium flex items-center gap-1">
            <Star size={16} className="text-yellow-500" />
            ATS Score
          </label>
          <input
            type="number"
            value={formData.atsScore}
            disabled
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
          />
          <p className="text-xs text-gray-500 mt-1">
            This score will be calculated automatically
          </p>
        </div>

        {/* Status */}
        <div>
          <label className="font-medium">Application Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border border-gray-400 rounded-lg mt-1 focus:outline-none"
          >
            <option value="APPLIED">Applied</option>
            <option value="SHORTLISTED">Shortlisted</option>
            <option value="INTERVIEW_SCHEDULED">Interview Scheduled</option>
            <option value="SELECTED">Selected</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
        >
          <CheckCircle size={18} />
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
