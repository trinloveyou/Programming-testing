const employees = [
  { name: "Arm", position: "Front End" },
  { name: "Game", position: "Back End" },
];
function displayEmployeeInfo(targetName) {
  const employee = employees.find((emp) => emp.name === targetName);
  if (employee) {
    return `ชื่อ ${employee.name} ตำแหน่ง ${employee.position}`;
  } else {
    return `Employee with name ${targetName} not found.`;
  }
}
//ค้นหาพนักงานจากชื่อ Janny
console.log(displayEmployeeInfo("Janny"));
//ค้นหาพนักงานจากชื่อ Game
console.log(displayEmployeeInfo("Game"));
//ค้นหาพนักงานจากชื่อ Arm
console.log(displayEmployeeInfo("Arm"));
