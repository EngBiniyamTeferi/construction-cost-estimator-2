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
let projectN = document.getElementById("Name1")
let roof_covering_type = document.getElementById("roof_covering_type")
let roof_type = document.getElementById("roof_type")
let quality_carpentry = document.getElementById("quality_carpentry");
let window_Door_frame = document.getElementById("window_Door_frame")
let paint_quality = document.getElementById("paint_quality")
let quality_sanitary = document.getElementById("quality_sanitary")
let density_elec_fixtures = document.getElementById("density_elec_fixtures")
let fire_protection = document.getElementById("fire_protection")


let load_per_floor;
let FloorWallFinish;
let floorCost;
let SillCost;
let StairCost;

let Roof_type_factor;


// floor, sills and stairs price by their type
const floortype = {
    "ceramic": 1000,
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

// roof covering type Price

let roof_cover_price = {
    "decra": 4750,
    "CIS": 1150,
    "EGA": 1700,
    "concrete_flat": 3500
}

// price of carpentry by their quality
let quality_carpentry_price = {
    "none": 0,
    "low": 1150,
    "medium": 2250,
    "high": 4500
}

// window and external door frame type price

let aluminum_profile_frame = {
    "window_frame": 14000,
    "door_frame": 16000
}

let steel_LTZ_profile_frame = {
    "window_frame": 8000,
    "door_frame": 10000
}
let lmitation_aluminum_frame = {
    "window_frame": 8000,
    "door_frame": 8000
}



let carpentry_price;
let carpentry_cost;
let roof_price;
let roof_area;
let roof_cost;


let floorRate;
let sillsRate;
let stairRate;


let window_area
let doors
let door_area

let window_frame_rate;
let door_frame_rate;


let paint_quality_rate;
let paint_factor;
let paint_cost;

let HVAC_Rate;
let HVAC_Cost;

let sanitary_price_rate;
let sanitary_factor;
let sanitary_cost;

let density_elec_fixtures_price_rate;
let density_elec_fixtures_factor;
let density_elec_fixtures_usage_factor;
let density_elec_fixtures_cost;

let fire_protection_price;
let fire_protection_factor;
let fire_protection_cost;

let fire_protection_price_rate = {
    "none":0,
    "level_1": 80,
    "level_2":200,
    "level_3": 500,
    "level_4":1000
}

// painting quality price/m squared and their brand
let paint_quality_price = {
    "standard": 200,
    "medium": 325,
    "high": 550
}

// HVAC system scope price floorRate
let HVAC_system_price = {
    "toilet_ventilation": 175,
    "kitchen_ventilation": 225,
    "toilet_kitchen": 375,
    "full_hvac": 4250
}


// price rate for sanitary products
let quality_of_sanitary_rate = {
    "low": 1150,
    "medium": 2250,
    "high": 4000,
    "luxury": 7500
}
// price rate for electrical fixtures
let density_elec_fixtures_rate = {
    "low": 800,
    "medium": 1400,
    "high": 2500,
    "luxury": 4500
}
// factors of electrical fixtures
let density_elec_fixtures_factor_rate = {
    "low": 0.8,
    "medium": 1,
    "high": 1.2,
    "luxury": 1.5
}
const density_elec_fixtures_factor_building_use = {
    "apartment": 1,
    "residential": 0.9,
    "office": 1.2,
    "commercial": 1.3,
    "hotel": 1.4,
    "mixed_use": 1.2,
    "industrial": 1.1,
    "parking": 0.7,
    "storage": 0.8,
    "school": 1.2,
    "hospital": 1.5
}

// sanitary factor by building_use
const sanitary_factor_by_building_use = {
    "apartment": 1,
    "residential": 0.7,
    "office": 1.1,
    "commercial": 0.8,
    "hotel": 1.7,
    "mixed_use": 1.1,
    "industrial": 0.6,
    "parking": 0.3,
    "storage": 0.5,
    "school": 1.2,
    "hospital": 1.8
}
// paint factor by building_use
const paint_factor_by_building_use = {
    "apartment": 3.15,
    "residential": 2.75,
    "office": 2.85,
    "commercial": 4.4,
    "hotel": 3.4,
    "mixed_use": 4.57,
    "industrial": 1.85,
    "parking": 1.6,
    "storage": 1.85,
    "school": 3.1,
    "hospital": 3.6
}
// fire protection factor by building_use
const fire_protection_factor_by_building_use = {
    "apartment": 1,
    "residential": 0.7,
    "office": 1.2,
    "commercial": 1.3,
    "hotel": 1.4,
    "mixed_use": 1.3,
    "industrial": 1.5,
    "parking": 1.1,
    "storage": 1.4,
    "school": 1.2,
    "hospital": 1.6
}

let totalArea;
function basecalculator() {
    switch (roof_type.value) {
        case "Flat_roof":
            Roof_type_factor = 1;
            break;
        case "Slight_slope":
            Roof_type_factor = 1.15;
            break;
        case "Steep_roof":
            Roof_type_factor = 1.3;
            break;

        default:
            break;
    }

    switch (Building_use.value) {
        case "residential":
            load_per_floor = building_use_load_per_floor["residential"]
            paint_factor = paint_factor_by_building_use["residential"]
            sanitary_factor = sanitary_factor_by_building_use["residential"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["residential"]
            fire_protection_factor = fire_protection_factor_by_building_use["residential"]
            break;
        case "apartment":
            load_per_floor = building_use_load_per_floor["apartment"]
            paint_factor = paint_factor_by_building_use["apartment"]
            sanitary_factor = sanitary_factor_by_building_use["apartment"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["apartment"]
            fire_protection_factor = fire_protection_factor_by_building_use["apartment"]
            break;
        case "office":
            load_per_floor = building_use_load_per_floor["office"]
            paint_factor = paint_factor_by_building_use["office"]
            sanitary_factor = sanitary_factor_by_building_use["office"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["office"]
            fire_protection_factor = fire_protection_factor_by_building_use["office"]
            break;
        case "commercial":
            load_per_floor = building_use_load_per_floor["commercial"]
            paint_factor = paint_factor_by_building_use["commercial"]
            sanitary_factor = sanitary_factor_by_building_use["commercial"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["commercial"]
            fire_protection_factor = fire_protection_factor_by_building_use["commercial"]
            break;
        case "hotel":
            load_per_floor = building_use_load_per_floor["hotel"]
            paint_factor = paint_factor_by_building_use["hotel"]
            sanitary_factor = sanitary_factor_by_building_use["hotel"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["hotel"]
            fire_protection_factor = fire_protection_factor_by_building_use["hotel"]
            break;
        case "mixed_use":
            load_per_floor = building_use_load_per_floor["mixed_use"]
            paint_factor = paint_factor_by_building_use["mixed_use"]
            sanitary_factor = sanitary_factor_by_building_use["mixed_use"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["mixed_use"]
            fire_protection_factor = fire_protection_factor_by_building_use["mixed_use"]
            break;
        case "industrial":
            load_per_floor = building_use_load_per_floor["industrial"]
            paint_factor = paint_factor_by_building_use["industrial"]
            sanitary_factor = sanitary_factor_by_building_use["industrial"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["industrial"]
            fire_protection_factor = fire_protection_factor_by_building_use["industrial"]
            break;
        case "parking":
            load_per_floor = building_use_load_per_floor["parking"]
            paint_factor = paint_factor_by_building_use["parking"]
            sanitary_factor = sanitary_factor_by_building_use["parking"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["parking"]
            fire_protection_factor = fire_protection_factor_by_building_use["parking"]
            break;
        case "storage":
            load_per_floor = building_use_load_per_floor["storage"]
            paint_factor = paint_factor_by_building_use["storage"]
            sanitary_factor = sanitary_factor_by_building_use["storage"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["storage"]
            fire_protection_factor = fire_protection_factor_by_building_use["storage"]
            break;
        case "school":
            load_per_floor = building_use_load_per_floor["school"]
            paint_factor = paint_factor_by_building_use["school"]
            sanitary_factor = sanitary_factor_by_building_use["school"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["school"]
            fire_protection_factor = fire_protection_factor_by_building_use["school"]
            break;
        case "hospital":
            load_per_floor = building_use_load_per_floor["hospital"]
            paint_factor = paint_factor_by_building_use["hospital"]
            sanitary_factor = sanitary_factor_by_building_use["hospital"]
            density_elec_fixtures_usage_factor = density_elec_fixtures_factor_building_use["hospital"]
            fire_protection_factor = fire_protection_factor_by_building_use["hospital"]
            break;

        default:
            load_per_floor = ""
            paint_factor = ""
            sanitary_factor = ""
            density_elec_fixtures_usage_factor = ""
            fire_protection_factor = ""
            break;
    }

    switch (roof_covering_type.value) {
        case "decra":
            roof_price = roof_cover_price['decra']
            break
        case "CIS":
            roof_price = roof_cover_price['CIS']
            break
        case "EGA":
            roof_price = roof_cover_price['EGA']
            break
        case "Concerete_flat":
            roof_price = roof_cover_price['concrete_flat']
            break
        default:
            break

    }

    switch (quality_carpentry.value) {
        case "none":
            carpentry_price = quality_carpentry_price["none"]
            break
        case "low":
            carpentry_price = quality_carpentry_price["low"]
            break
        case "medium":
            carpentry_price = quality_carpentry_price["medium"]
            break
        case "high":
            carpentry_price = quality_carpentry_price["high"]
            break
        default:
            break
    }

    switch (window_Door_frame.value) {
        case "aluminium":
            window_frame_rate = aluminum_profile_frame["window_frame"]
            door_frame_rate = aluminum_profile_frame["door_frame"]
            break
        case "steel":
            window_frame_rate = steel_LTZ_profile_frame["window_frame"]
            door_frame_rate = steel_LTZ_profile_frame["door_frame"]
            break
        case "lmit_Aluminum":
            window_frame_rate = lmitation_aluminum_frame["window_frame"]
            door_frame_rate = lmitation_aluminum_frame["door_frame"]
            break
        default:
            break
    }

    switch (paint_quality.value) {
        case "standard":
            paint_quality_rate = paint_quality_price["standard"]
            break
        case "medium":
            paint_quality_rate = paint_quality_price["medium"]
            break
        case "high":
            paint_quality_rate = paint_quality_price["high"]
            break

        default:
            break;
    }

    switch (HVAC.value) {
        case "artificial_toilet":
            HVAC_Rate = HVAC_system_price["toilet_kitchen"]
            break
        case "artificial_kitchen":
            HVAC_Rate = HVAC_system_price["kitchen_ventilation"]
            break
        case "artificial_both":
            HVAC_Rate = HVAC_system_price["toilet_kitchen"]
            break
        case "full_hvac":
            HVAC_Rate = HVAC_system_price["full_hvac"]
            break

        default:
            break;
    }
    switch (quality_sanitary.value) {
        case "low":
            sanitary_price_rate = quality_of_sanitary_rate["low"]
            break
        case "medium":
            sanitary_price_rate = quality_of_sanitary_rate["medium"]
            break
        case "high":
            sanitary_price_rate = quality_of_sanitary_rate["high"]
            break
        case "luxury":
            sanitary_price_rate = quality_of_sanitary_rate["luxury"]
            break

        default:
            break;
    }
    switch (density_elec_fixtures.value) {
        case "low":
            density_elec_fixtures_price_rate = density_elec_fixtures_rate["low"]
            density_elec_fixtures_factor = density_elec_fixtures_factor_rate["low"]
            break
        case "medium":
            density_elec_fixtures_price_rate = density_elec_fixtures_rate["medium"]
            density_elec_fixtures_factor = density_elec_fixtures_factor_rate["medium"]
            break
        case "high":
            density_elec_fixtures_price_rate = density_elec_fixtures_rate["high"]
            density_elec_fixtures_factor = density_elec_fixtures_factor_rate["high"]
            break
        case "luxury":
            density_elec_fixtures_price_rate = density_elec_fixtures_rate["luxury"]
            density_elec_fixtures_factor = density_elec_fixtures_factor_rate["luxury"]
            break

        default:
            break;
    }
    switch (fire_protection.value) {
        case "none":
            fire_protection_price = fire_protection_price_rate["none"]
            break
        case "level_1":
            fire_protection_price = fire_protection_price_rate["level_1"]
            break
        case "level_2":
            fire_protection_price = fire_protection_price_rate["level_2"]
            break
        case "level_3":
            fire_protection_price = fire_protection_price_rate["level_3"]
            break
        case "level_4":
            fire_protection_price = fire_protection_price_rate["level_4"]
            break

        default:
            break;
    }



}


function CalculatePrice() {
    basecalculator()


    if (FloorsAboveGround.value <= 0 || FloorsAboveGround.value == "") {
        totalArea = AverageBuildupArea.value
    } else {
        totalArea = AverageBuildupArea.value * FloorsAboveGround.value
    }

    // formulas

    let Total_Building_Load = AverageBuildupArea.value * FloorsAboveGround.value * load_per_floor
    let TotalLoad = AverageBuildupArea.value * bearingCapacityAmount.value
    let Foundation_area = Total_Building_Load / bearingCapacityAmount.value
    let Volume = AverageBuildupArea.value * AverageFloorHeight.value * (Number(FloorsAboveGround.value) + (Number_of_basements.value * 1.3))
    let BaseCost = Volume * cost_per_squaremeter



    window_area = totalArea * 0.25
    doors = totalArea / 100
    door_area = doors * 2
    let window_cost = window_area * window_frame_rate
    let door_cost = door_area * door_frame_rate
    let window_and_door_cost = window_cost + door_cost

    switch (PrimaryFloorandWall.value) {
        case "ceramic_marble":
            floorRate = floortype["ceramic"];
            sillsRate = sillstype["marble"];
            stairRate = stairstype["marble"];
            break
        case "ceramic_granite":
            floorRate = floortype["ceramic"];
            sillsRate = sillstype["granite"];
            stairRate = stairstype["granite"];
            break
        case "ceramic_terazzo":
            floorRate = floortype["ceramic"];
            sillsRate = sillstype["terazzo"];
            stairRate = stairstype["terazzo"];
            break
        case "porcelin_marble":
            floorRate = floortype["porcelin"];
            sillsRate = sillstype["marble"];
            stairRate = stairstype["marble"];
            break
        case "porcelin_granite":
            floorRate = floortype["porcelin"];
            sillsRate = sillstype["granite"];
            stairRate = stairstype["granite"];
            break
        case "porcelin_terazzo":
            floorRate = floortype["porcelin"];
            sillsRate = sillstype["terazzo"];
            stairRate = stairstype["terazzo"];
            break
        case "marble":
            floorRate = floortype["marble"];
            sillsRate = sillstype["marble"];
            stairRate = stairstype["marble"];
            break
        case "Granite":
            floorRate = floortype["granite"];
            sillsRate = sillstype["granite"];
            stairRate = stairstype["granite"];
            break

    }

    paint_cost = totalArea * paint_factor * paint_quality_rate
    floorCost = totalArea * floorRate
    SillCost = totalArea * 0.1 * sillsRate
    StairCost = totalArea * 0.15 * stairRate
    roof_area = AverageBuildupArea.value * Roof_type_factor
    roof_cost = roof_area * roof_price
    carpentry_cost = totalArea * carpentry_price
    HVAC_Cost = totalArea * HVAC_Rate
    sanitary_cost = totalArea * sanitary_price_rate * sanitary_factor
    density_elec_fixtures_cost = totalArea * density_elec_fixtures_price_rate * density_elec_fixtures_factor * density_elec_fixtures_usage_factor
    fire_protection_cost = totalArea * fire_protection_price * fire_protection_factor

    projectN.innerHTML = fire_protection_cost
    result.innerText = `Door Cost: ${door_cost} \n Window Cost: ${window_cost} \n Primary Floor and Wall: ${floorCost + SillCost + StairCost} \n Foundation Area: ${Foundation_area} \n Volume: ${Volume} \n Total Land Load Capacity: ${TotalLoad} \n Total Building Load: ${Total_Building_Load} \n Average Buildup Area: ${AverageBuildupArea.value} \n cost per square meter: ${cost_per_squaremeter} \n Floors Above Ground: ${FloorsAboveGround.value} \n Number of Basements: ${Number_of_basements.value} \nBase Cost: ${(BaseCost)}`



}
