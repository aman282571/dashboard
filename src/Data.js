let obj = {
  week1: {
    Chinese: [12, 14, 14, 9, 37, 44, 42],
    Briyani: [8, 11, 11, 9, 22, 57, 64],
    "Sandwich & Pizza": [37, 54, 54, 35, 67, 89, 147],
    Juices: [22, 27, 27, 13, 53, 112, 130],
    Desserts: [17, 23, 23, 19, 89, 57, 107],
  },
  week2: {
    Chinese: [23, 19, 17, 23, 57, 107, 57],
    Briyani: [24, 13, 22, 27, 53, 147, 112],
    "Sandwich & Pizza": [54, 35, 37, 11, 89, 65, 89],
    Juices: [11, 9, 12, 54, 57, 43, 44],
    Desserts: [14, 9, 8, 14, 44, 57, 57],
  },
  week3: {
    Chinese: [8, 15, 9, 14, 54, 58, 57],
    Briyani: [12, 12, 14, 11, 47, 45, 107],
    "Sandwich & Pizza": [37, 39, 35, 54, 61, 92, 89],
    Juices: [22, 24, 13, 24, 142, 117, 43],
    Desserts: [19, 16, 19, 23, 102, 51, 57],
  },
  week4: {
    Chinese: [14, 19, 8, 15, 39, 62, 48],
    Briyani: [11, 13, 12, 12, 52, 52, 116],
    "Sandwich & Pizza": [54, 35, 37, 39, 71, 97, 124],
    Juices: [24, 14, 22, 27, 111, 87, 56],
    Desserts: [23, 9, 19, 13, 87, 119, 94],
  },
  week5: {
    Chinese: [19, 23, 13, 19, 74, 97, 54],
    Briyani: [26, 54, 23, 24, 36, 121, 127],
    "Sandwich & Pizza": [67, 68, 15, 45, 104, 81, 136],
    Juices: [11, 15, 24, 23, 86, 62, 51],
    Desserts: [45, 39, 53, 29, 28, 49, 84],
  },
  week6: {
    Chinese: [13, 8, 23, 19, 87, 94, 119],
    Briyani: [27, 12, 24, 9, 111, 56, 87],
    "Sandwich & Pizza": [39, 37, 54, 13, 71, 124, 97],
    Juices: [12, 22, 11, 14, 52, 116, 52],
    Desserts: [15, 19, 14, 35, 39, 48, 62],
  },
  week7: {
    Chinese: [8, 15, 9, 14, 54, 58, 57],
    Briyani: [12, 12, 14, 11, 47, 45, 107],
    "Sandwich & Pizza": [37, 39, 35, 54, 61, 92, 89],
    Juices: [22, 24, 13, 24, 142, 117, 43],
    Desserts: [19, 16, 19, 23, 102, 51, 57],
  },
  week8: {
    Chinese: [19, 23, 13, 19, 74, 97, 54],
    Briyani: [26, 54, 23, 24, 36, 121, 127],
    "Sandwich & Pizza": [67, 68, 15, 45, 104, 81, 136],
    Juices: [11, 15, 24, 23, 86, 62, 51],
    Desserts: [45, 39, 53, 29, 28, 49, 84],
  },
  week9: {
    Chinese: [13, 8, 23, 19, 87, 94, 119],
    Briyani: [27, 12, 24, 9, 111, 56, 87],
    "Sandwich & Pizza": [39, 37, 54, 13, 71, 124, 97],
    Juices: [12, 22, 11, 14, 52, 116, 52],
    Desserts: [15, 19, 14, 35, 39, 48, 62],
  },
  week10: {
    Chinese: [12, 14, 14, 9, 37, 44, 42],
    Briyani: [8, 11, 11, 9, 22, 57, 64],
    "Sandwich & Pizza": [37, 54, 54, 35, 67, 89, 147],
    Juices: [22, 27, 27, 13, 53, 112, 130],
    Desserts: [17, 23, 23, 19, 89, 57, 107],
  },
  week11: {
    Chinese: [114, 19, 8, 15, 39, 62, 48],
    Briyani: [11, 13, 12, 12, 52, 52, 116],
    "Sandwich & Pizza": [54, 35, 37, 39, 71, 97, 124],
    Juices: [24, 14, 22, 27, 111, 87, 56],
    Desserts: [23, 9, 19, 13, 87, 119, 94],
  },
  week12: {
    Chinese: [23, 19, 17, 23, 57, 107, 57],
    Briyani: [24, 13, 22, 27, 53, 147, 112],
    "Sandwich & Pizza": [54, 35, 37, 11, 89, 65, 89],
    Juices: [11, 9, 12, 54, 57, 43, 44],
    Desserts: [14, 9, 8, 14, 44, 57, 57],
  },
};
export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
      display: true,
      text: "Chart Title",
      font: {
        size: "16px",
      },
    },
    legend: {
      display: true,
      labels: {
        font: {
          size: "10px",
        },
      },
    },
  },
};
export const comOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
      display: true,
      text: "Commulative Data",
      font: {
        size: "14px",
      },
    },
    legend: {
      display: true,
      labels: {
        font: {
          size: "10px",
        },
      },
    },
  },
};
// window.addEventListener("resize", reportWindowSize);
// function reportWindowSize() {
//   let wid = window.innerWidth;
//   console.log(window.innerWidth);
//   if (wid < 500) options.plugins.legend.display = false;
// }

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let bgdc = [
  "rgb(0, 191, 255)",
  "rgb(255, 128, 0)",
  "rgb(255, 191, 0)",
  "rgb(0, 255, 0)",
  "rgb(255, 0, 64)",

  "rgb(128, 0, 255)",

  "rgb(0, 255, 255)",
  "rgb(255, 191, 0)",
];
const brands = ["Chinese", "Briyani", "Sandwich & Pizza", "Juices", "Desserts"];
export function allData() {
  let allWeeks = [];
  for (let week in obj) {
    let datasets = [],
      i = 0;
    for (let brand in obj[week]) {
      datasets.push({
        label: brand,
        data: obj[week][brand],
        backgroundColor: bgdc[i],
        borderColor: bgdc[i],
      });
      i++;
    }
    allWeeks.push({
      labels: labels,
      datasets: datasets,
    });
  }
  return allWeeks;
}
export function com() {
  let comarr = [];
  for (let i = 0; i < 5; i++) comarr[i] = [0, 0, 0, 0, 0, 0, 0];
  for (let week in obj) {
    let j = 0;
    for (let brand in obj[week]) {
      for (let i = 0; i < 7; i++) {
        comarr[j][i] += obj[week][brand][i];
      }
      j++;
    }
  }
  let comData = [];
  for (let i = 0; i < 5; i++) {
    comData.push({
      label: brands[i],
      data: comarr[i],
      backgroundColor: bgdc[i],
      borderColor: bgdc[i],
    });
  }

  return {
    labels: labels,
    datasets: comData,
  };
}
