// SPDX-License-Identifier: Apache-2.0
// The hero demo: the Chart.js script shown in the Markdown pane, really run.
import { BarController, BarElement, CategoryScale, Chart, LinearScale, Tooltip } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

const canvas = document.getElementById('revenue');
if (canvas instanceof HTMLCanvasElement) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const font = { family: "'Inter Variable', Inter, system-ui, sans-serif", size: 12 };

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['EU', 'US', 'APAC'],
      datasets: [
        {
          label: 'Q3',
          data: [12, 19, 7],
          backgroundColor: '#1F7A7A',
          hoverBackgroundColor: '#156262',
          borderRadius: 3,
          barThickness: 60,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: reduceMotion ? false : { duration: 700, easing: 'easeOutQuart' },
      plugins: {
        tooltip: {
          backgroundColor: '#141A22',
          titleFont: font,
          bodyFont: font,
          displayColors: false,
          callbacks: { label: (item) => `Q3: ${item.formattedValue}` },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: '#141A22', font },
        },
        y: {
          beginAtZero: true,
          max: 20,
          ticks: { stepSize: 10, color: '#5B6673', font },
          grid: { color: '#DDE1E7' },
          border: { display: false },
        },
      },
    },
  });
}
