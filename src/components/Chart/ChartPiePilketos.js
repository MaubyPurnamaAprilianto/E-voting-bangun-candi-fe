import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';

const ChartPiePilketos = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/votes/results', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Use your token here
          },
        });

        const candidates = response.data;

        // Prepare data for pie chart
        const pieData = candidates.map(candidate => ({
          name: candidate.name, // Name of the candidate
          y: candidate.voteCount, // Vote count for the candidate
        }));

        // Inisialisasi chart dengan data yang diambil
        Highcharts.chart('pie-container', {
          chart: {
            type: 'pie', // Jenis chart pie (bulat)
          },
          title: {
            text: 'Persentase Suara Pilketos 2024', // Judul chart
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>', // Format tooltip
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %', // Format label pie
              },
            },
          },
          series: [
            {
              name: 'Suara',
              colorByPoint: true,
              data: pieData, // Use the prepared pie data
            },
          ],
          credits: {
            enabled: false, // Menghilangkan watermark Highcharts.com
          },
        });
      } catch (error) {
        console.error('Error fetching vote results:', error);
      }
    };

    fetchData();
  }, []); // Dependency array is empty to run only once on mount

  return <div id="pie-container" className="w-50 h-96"></div>; // Kontainer untuk chart
};

export default ChartPiePilketos;
