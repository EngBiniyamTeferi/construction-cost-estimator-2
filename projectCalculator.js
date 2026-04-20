const result = document.getElementById("result");
const EstimatorForm = document.getElementById("EstimatorForm");

let projectName = document.getElementById("projectName")
let HVAC = document.getElementById("HVAC")
let AverageBuildupArea = document.getElementById("AverageBuildupArea")
let FloorsAboveGround = document.getElementById("FloorsAboveGround")
let bearingCapacityAmount = document.getElementById("bearingCapacityAmount")
let cost_per_squaremeter = 1500;
let Building_use = document.getElementById("Building_use");
let AverageFloorHeight = document.getElementById("AverageFloorHeight")
let Number_of_basements = document.getElementById("Number_of_basements")
let PrimaryFloorandWall = document.getElementById("PrimaryFloorandWall")


 

let totalArea = AverageBuildupArea.value * FloorsAboveGround.value

const floortype = {
    "ceramic" : 1000,
    "porcelin": 1600,
    "terazzo": 1250,
    "marble": 3250,
    "granite": 4000
}

const sillstype = {
    "terazzo": 1000,
    "marble": 3250,
    "granite": 2250
}

const stairstype = {
    "terazzo": 1500,
    "marble": 3250,
    "granite": 4750
}

// SBC for each Building use
const building_use_load_per_floor = {
    "apartment": 15,
    "residential": 12,
    "office": 20,
    "commercial": 25,
    "hotel": 18,
    "mixed_use": 22,
    "industrial": 50,
    "parking": 5,
    "storage": 30,
    "school": 15,
    "hospital": 20
}
let load_per_floor;

    let FloorWallFinish;
    let floorCost;
function basecalculator() {
    switch (Building_use.value) {
        case "residential":
            load_per_floor = building_use_load_per_floor["residential"]
            break;
        case "apartment":
            load_per_floor = building_use_load_per_floor["apartment"]
            break;
        case "office":
            load_per_floor = building_use_load_per_floor["office"]
            break;
        case "commercial":
            load_per_floor = building_use_load_per_floor["commercial"]
            break;
        case "hotel":
            load_per_floor = building_use_load_per_floor["hotel"]
            break;
        case "mixed_use":
            load_per_floor = building_use_load_per_floor["mixed_use"]
            break;
        case "industrial":
            load_per_floor = building_use_load_per_floor["industrial"]
            break;
        case "parking":
            load_per_floor = building_use_load_per_floor["parking"]
            break;
        case "storage":
            load_per_floor = building_use_load_per_floor["storage"]
            break;
        case "school":
            load_per_floor = building_use_load_per_floor["school"]
            break;
        case "hospital":
            load_per_floor = building_use_load_per_floor["hospital"]
            break;

        default:
            load_per_floor = ""
            break;
    }

    switch (PrimaryFloorandWall.value){
        case "ceramic_marble":
            let floorRate = floortype["ceramic"];
            let sillsRate = sillstype["marble"];
            let stairRate = stairstype["marble"];

            floorCost = totalArea * floorRate
            break
    }

}


function CalculatePrice() {
  basecalculator()
       // formulas
    
let Total_Building_Load = AverageBuildupArea.value * FloorsAboveGround.value * load_per_floor
let TotalLoad = AverageBuildupArea.value * bearingCapacityAmount.value
let Foundation_area = Total_Building_Load / bearingCapacityAmount.value
let Volume = AverageBuildupArea.value * AverageFloorHeight.value * (Number(FloorsAboveGround.value) + (Number_of_basements.value * 1.3))
let BaseCost = Volume * cost_per_squaremeter


  

result.innerText = `Primary Floor and Wall ${floorCost} \n Foundation Area: ${Foundation_area} \n Volume: ${Volume} \n Total Land Load Capacity: ${TotalLoad} \n Total Building Load: ${Total_Building_Load} \n Average Buildup Area: ${AverageBuildupArea.value} \n cost per square meter: ${cost_per_squaremeter} \n Floors Above Ground: ${FloorsAboveGround.value} \n Number of Basements: ${Number_of_basements.value} \nBase Cost: ${(BaseCost)}`


}
