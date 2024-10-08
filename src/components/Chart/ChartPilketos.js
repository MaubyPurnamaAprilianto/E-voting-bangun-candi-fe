import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';

const ChartPilketos = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/votes/results', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Gunakan token Anda di sini
          },
        });

        const candidates = response.data;

        // Menyusun nama dan jumlah suara
        const categories = candidates.map(candidate => candidate.name);
        const data = candidates.map(candidate => candidate.voteCount);

        // Warna untuk masing-masing kandidat
        const colors = ['#1E90FF', '#6A5ACD', '#32CD32']; // Biru, Ungu, Hijau

        // Membuat data dengan warna untuk masing-masing kandidat
        const seriesData = data.map((voteCount, index) => ({
          y: voteCount,
          color: colors[index % colors.length], // Menggunakan warna dari array
        }));

        // Inisialisasi chart dengan data yang diambil
        Highcharts.chart('container', {
          chart: {
            type: 'column', // Jenis chart
          },
          title: {
            text: 'Jumlah Suara Pilketos 2024', // Judul chart
          },
          xAxis: {
            categories: categories, // Nama kandidat
            title: {
              text: 'Kandidat',
            },
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Jumlah Suara', // Label untuk sumbu Y
            },
          },
          series: [
            {
              name: 'Jumlah Suara', // Label untuk series data
              data: seriesData, // Data jumlah suara dengan warna untuk masing-masing kandidat
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

  return <div id="container" className="w-50 h-96"></div>; // Kontainer untuk chart
};

export default ChartPilketos;
