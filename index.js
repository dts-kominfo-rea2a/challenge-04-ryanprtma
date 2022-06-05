// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (date, jumlah) => {
  const dates = date.sort()
  let epochTime = ""
  let epochTimeArr = []

  if (jumlah == 0) {
    epochTime = `${Date.parse(dates[0]) * 0.001}`
  } else if (jumlah == 1) {
    epochTime = `${Date.parse(dates[1]) * 0.001}`
  } else if (jumlah == 2) {
    epochTime = `${Date.parse(dates[2]) * 0.001}`
  } else if (jumlah == 3) {
    epochTime = `${Date.parse(dates[3]) * 0.001}`
  } else if (jumlah == 4) {
    epochTime = `${Date.parse(dates[4]) * 0.001}`
  }
  else {
    for (let i = 0; i <= dates.length - 1; i++) {
      epochTimeArr.push(Date.parse(dates[i]) * 0.001)
      epochTime = epochTimeArr.sort().join('-')
    }
  }

  return epochTime

};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
