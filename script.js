const ctx1 = document.getElementById('dataScienceChart').getContext('2d');
const ctx2 = document.getElementById('mlopsChart').getContext('2d');

new Chart(ctx1, {
  type: 'radar',
  data: {
    labels: ['Python', 'SQL', 'R', 'MySQL', 'Data Analysis', 'Data Visualization', 'Data Warehousing', 'ETL'],
    datasets: [{
      label: 'Data Science Skills',
      data: [9, 9, 7, 9, 9, 9, 9, 9],
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'white',
      pointBackgroundColor: 'white'
    }]
  },
  options: {
    scales: {
      r: {
        ticks: { display: false }, // <-- This removes the numbers
        angleLines: { color: '#444' },
        grid: { color: '#333' },
        pointLabels: { color: 'white' },
        suggestedMin: 0,
        suggestedMax: 10
      }
    },
    plugins: {
      legend: {
        labels: { color: 'white' }
      }
    }
  }
});

new Chart(ctx2, {
  type: 'radar',
  data: {
    labels: ['MLOps', 'AWS', 'GCP', 'Azure AI', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'Transformers', 'Docker'],
    datasets: [{
      label: 'MLOps & ML Stack',
      data: [9, 9, 8, 8, 9, 9, 9, 7, 8],
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'white',
      pointBackgroundColor: 'white'
    }]
  },
  options: {
    scales: {
      r: {
        ticks: { display: false }, // <-- This removes the numbers
        angleLines: { color: '#444' },
        grid: { color: '#333' },
        pointLabels: { color: 'white' },
        suggestedMin: 0,
        suggestedMax: 10
      }
    },
    plugins: {
      legend: {
        labels: { color: 'white' }
      }
    }
  }
});
