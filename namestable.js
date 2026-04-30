let selected_project_name = document.getElementById("selected_project_name")
let selected_city = document.getElementById("selected_city")
let selected_location = document.getElementById("selected_location")
let selected_capacity_data = document.getElementById("selected_capacity_data")
let selected_buildup_area = document.getElementById("selected_buildup_area")
let selected_floor_height = document.getElementById("selected_floor_height")
let selected_building_use = document.getElementById("selected_building_use")
let selected_basements = document.getElementById("selected_basements")
let selected_floors = document.getElementById("selected_floors")
let selected_floor_wall_finish = document.getElementById("selected_floor_wall_finish")
let selected_roof_type = document.getElementById("selected_roof_type")
let selected_roof_covering = document.getElementById("selected_roof_covering")
let selected_carpentry = document.getElementById("selected_carpentry")
let selected_window_door_frame = document.getElementById("selected_window_door_frame")
let selected_paint_quality = document.getElementById("selected_paint_quality")
let selected_HVAC = document.getElementById("selected_HVAC")
let selected_sanitary_fixture = document.getElementById("selected_sanitary_fixture")
let selected_electrical_fixture = document.getElementById("selected_electrical_fixture")
let selected_fire_protection = document.getElementById("selected_fire_protection")
let selected_emergency_exit = document.getElementById("selected_emergency_exit")


function tables() {
selected_project_name.innerHTML = projectName.value
selected_city.innerHTML = city.value
selected_location.innerHTML = locations.value
selected_capacity_data.innerHTML = bearingCapacityAmount.value
selected_buildup_area.innerHTML = AverageBuildupArea.value
selected_floor_height.innerHTML = AverageFloorHeight.value
selected_building_use.innerHTML = Building_use.value
selected_basements.innerHTML = Number_of_basements.value
selected_floors.innerHTML = projectName.value
selected_floor_wall_finish.innerHTML = projectName.value
selected_roof_type.innerHTML = projectName.value
selected_roof_covering.innerHTML = projectName.value
selected_carpentry.innerHTML = projectName.value
selected_window_door_frame.innerHTML = projectName.value
selected_paint_quality.innerHTML = projectName.value
selected_HVAC.innerHTML = projectName.value
selected_sanitary_fixture.innerHTML = projectName.value
selected_electrical_fixture.innerHTML = projectName.value
selected_fire_protection.innerHTML = projectName.value
selected_emergency_exit.innerHTML = projectName.value

}