import DashboardLayout from "@/components/DashboardLayout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";

const Data = () => {
  const [candidates, setCandidates] = useState([]);
  const [editCandidate, setEditCandidate] = useState(null); // Store candidate data for editing
  const [formData, setFormData] = useState({
    name: "",
    vision: "",
    mission: "",
    photo: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      router.push("/admin/login");
    }
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/candidates",
          {
            headers: {
              Authorization: `Bearer ${storedToken}`, // Replace with your token handling
            },
          }
        );
        setCandidates(response.data);
      } catch (err) {
        setError("Failed to fetch candidates");
        console.error(err);
      }
    };

    fetchCandidates();
  }, [router]);

  const handleEdit = (candidate) => {
    // Set the current candidate to be edited
    setEditCandidate(candidate);
    setFormData({
      name: candidate.name,
      vision: candidate.vision,
      mission: candidate.mission,
      photo: candidate.photo,
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5001/api/candidates/${editCandidate.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your token handling
            "Content-Type": "application/json",
          },
        }
      );
      // Update the candidate list after successful update
      setCandidates((prev) =>
        prev.map((candidate) =>
          candidate.id === editCandidate.id
            ? { ...candidate, ...formData }
            : candidate
        )
      );
      setEditCandidate(null); // Close the edit form
    } catch (err) {
      setError("Failed to update candidate");
      console.error(err);
    }
  };

  const handleDelete = (id) => {
    // Logic to handle deleting a candidate
    console.log("Delete candidate with ID:", id);
  };

  return (
    <DashboardLayout>
      <div className="bg-gray-100 w-full min-h-screen p-6">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">
          Candidate List
        </h1>

        {error && <p className="text-red-500">{error}</p>}

        <table className="min-w-full bg-white border border-gray-300 mb-6 text-gray-800">
          <thead>
            <tr>
              <th className="border-b p-4 text-left">ID</th>
              <th className="border-b p-4 text-left">Name</th>
              <th className="border-b p-4 text-left">Vision</th>
              <th className="border-b p-4 text-left">Mission</th>
              <th className="border-b p-4 text-left">Photo</th>
              <th className="border-b p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td className="border-b p-4">{candidate.id}</td>
                <td className="border-b p-4">{candidate.name}</td>
                <td className="border-b p-4">{candidate.vision}</td>
                <td className="border-b p-4">{candidate.mission}</td>
                <td className="border-b p-4">
                  <Image
                    src={`/${candidate.photo}`}
                    alt={candidate.name}
                    width={100}
                    height={100}
                  />
                </td>
                <td className="border-b p-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(candidate)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDelete(candidate.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editCandidate && (
          <div className="bg-white p-4 border border-gray-300 text-gray-800">
            <h2 className="text-lg font-semibold mb-4">Edit Candidate</h2>
            <div className="mb-4">
              <label className="block text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Vision</label>
              <input
                type="text"
                name="vision"
                value={formData.vision}
                onChange={handleFormChange}
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Mission</label>
              <input
                type="text"
                name="mission"
                value={formData.mission}
                onChange={handleFormChange}
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Photo URL</label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleFormChange}
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update Candidate
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Data;
