
document.getElementById("downloadBtn").addEventListener("click", () => {
  exportToExcel();
});
function exportToExcel() {

  const inputs = [];
  const labels = [];

//   gather Allthe inputs labels including the select inputs
  let inputForm = EstimatorForm.querySelectorAll("input, select")
  let labelForm = EstimatorForm.querySelectorAll("label")

//   we need each input and labels so we separate them
    inputForm.forEach(element => {
        inputs.push(element.value || 0);
    });
    labelForm.forEach(element => {
        labels.push(element.textContent || 0);
    });

// the main data holder for the excel file
const data = [
  ];

//   the top row of the table
  data.push(["Names", "Inputs"]);
    for (let i = 0; i < labels.length; i++){

        let inputData = inputs[i]
        let labelData = labels[i]
        data.push(  [labelData, inputData]
)
    }
// we need some room for the next table
    data.push([])
    data.push([])
    data.push([])

    data.push(["Construction Measurements","Measurement sizes"])
data.push(

    ["Load per Floor", load_per_floor.toLocaleString()],
    ["Total Area", totalArea.toLocaleString()],
    ["Load Capacity of the Area", TotalLoad.toLocaleString()],
    ["Total Building Load", Total_Building_Load.toLocaleString()],
    ["Foundation Area", Foundation_area.toLocaleString()],
    ["Volume", Volume.toLocaleString()],

)


    data.push([])
    data.push([])
    data.push([])

    data.push(["Reason","Amount"])
data.push(

    ["Base Cost", BaseCost.toLocaleString()],
    ["Floor Cost", floorCost.toLocaleString()],
    ["Sill Cost", SillCost.toLocaleString()],
    ["Stair Cost", StairCost.toLocaleString()],
    ["Carpentry Cost", carpentry_cost.toLocaleString()],
    ["Roof Cost", roof_cost.toLocaleString()],
    ["Painting Cost", paint_cost.toLocaleString()],
    ["HVAC Cost", HVAC_Cost.toLocaleString()],
    ["Sanitary Cost", sanitary_cost.toLocaleString()],
    ["Electric Fixtures Cost", density_elec_fixtures_cost.toLocaleString()],
    ["Fire Protection Cost", fire_protection_cost.toLocaleString()],
    ["Emergency Cost", emergency_exit_cost.toLocaleString()],
    ["Windows Cost", window_cost.toLocaleString()],
    ["Doors Cost", door_cost.toLocaleString()],
    [],
    ["total Cost", totalCost.toLocaleString()],
)

  const worksheet = XLSX.utils.aoa_to_sheet(data);
worksheet["!cols"] = [
  { wch: 40 },
  { wch: 25 }, 
];
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Cost Estimator");

  XLSX.writeFile(workbook, "Cost Estimator.xlsx");
}