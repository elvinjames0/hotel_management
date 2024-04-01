import EmployeeCard from "@/components/manage/employee/cardEmployee";
import React from "react";

const EmployeePage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center font-serif">
        Information of employees
      </h1>
      <div className="grid grid-cols-2 gap-5 my-4">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </>
  );
};

export default EmployeePage;
