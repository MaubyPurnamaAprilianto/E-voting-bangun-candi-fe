// src/App.jsx
import React, { useEffect } from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import ChartPilketos from '@/components/Chart/ChartPilketos';
import ChartPiePilketos from '@/components/Chart/ChartPiePilketos';
import axios from 'axios';
import { useRouter } from 'next/router';

const App = () => {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login"); // Redirect to login if token is not found
    }
  }, [router]);

  return (
    <DashboardLayout>
      <div className="bg-gray-100 w-full min-h-screen p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-800">Card 1</h2>
            <p className="text-gray-600">This is the content of card 1.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-gray-800">Card 2</h2>
            <p className="text-gray-600">This is the content of card 2.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-gray-800">Card 3</h2>
            <p className="text-gray-600">This is the content of card 3.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-gray-800">Card 4</h2>
            <p className="text-gray-600">This is the content of card 4.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 mt-6 flex">
          <div className="flex-1 min-w-0">
            <ChartPilketos />
          </div>
          <div>
            <ChartPiePilketos />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default App;
