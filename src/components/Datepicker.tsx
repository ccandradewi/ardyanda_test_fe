"use client";
import { useState } from "react";

const DateDropdown = () => {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [selectedMonth, setSelectedMonth] = useState(0); // Index bulan, 0 = Januari
  const [selectedDay, setSelectedDay] = useState(1);

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    let years = [];
    for (let year = currentYear; year >= 1900; year--) {
      years.push(year);
    }
    return years;
  };

  const generateDayOptions = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="gap-3 flex flex-row">
        <select
          className="border p-2 rounded font-bold"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {generateYearOptions().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded font-bold"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded font-bold"
          value={selectedDay}
          onChange={handleDayChange}
        >
          {generateDayOptions(selectedYear, selectedMonth).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="text-3xl text-center font-bold pt-3">
        {`${selectedDay} ${months[selectedMonth]} ${selectedYear}`}
      </div>
    </div>
  );
};

export default DateDropdown;
