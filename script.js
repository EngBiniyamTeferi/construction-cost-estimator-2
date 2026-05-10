
// lists of cities in Ethiopia
const cities = [

    "Addis Ababa"
    , "Sheger City"
    , "Adama"
    , "Hawassa"
    , "Dire Dawa"
    , "Harar"
    , "Bahir Dar"
    , "Desse"
]

const city = document.getElementById("city");

const location_in_city = document.getElementById("location_in_city")

// select each city to process independently
cities.forEach(function (site) {
    // for each city create an option (independent)
    let option = document.createElement("option");
    option.value = site;
    option.innerText = site;

    // append the options to the city
    city.appendChild(option);

})

// locations inside each city
const AddisAbabaLocations = [
    "Addis Ketema", "Akaky Kaliti", "Arada"
    , "Bole", "Gullele", "Kirkos", "Kolfe Keraniyo",
    "Lideta", "Nifas Silk", "Lafto", "Yeka",
    "Lemi Kura"
]
const ShegerCityLocations = [
    "Burayu", "Eka Tafo", "Furi", "Gefersa Guji"
    , "Gelan", "Gelan Guda", "Koye", "Kara Gida (Kura Jida)", "Mana Abichu"
    , "Melka Nono", "Sebeta", "Sululta"
]
const AdamaLocation = [
    "Abageda", "Boku", "Dabe", "Bolle", "Lugo", "Dembella"
]

const DireLocation = [
    "Kezira", "Megala"
]

const hararLocation = [
    "Suqul",
    "Hasen-Gey",
    "Dire Teyara",
    "Aboker Muti",
    "Sigicha",
    "Miyay",
    "Erer Weldya",
    "Erer Ulanula",
    "Erer Hawaye",
    "Erer Dodota",
    "Aw Umer",
    "Gelmashira",
    "Aw Berkhedle",
    "Sofi",
    "Harewae",
    "Qile",
    "Burqa"
]

const hawassaLocation = [
    "Addis Ketema",
    "Bahile Adarash",
    "Hayek Dare",
    "Hawela-Tula",
    "Mehal Ketema",
    "Menehariya",
    "Misrak",
    "Tabor"
]

const BahirdarLocation = [
    "Lake Tana",
    "Blue Nile River",
    "Blue Nile Falls"
]

const DesseLocation = [
    "Agew Awi Zone",
    "East Gojjam Zone",
    "North Gondar Zone",
    "North Shewa Zone",
    "North Wollo Zone",
    "Oromia Zone",
    "South Gondar Zone",
    "South Wollo Zone",
    "Wag Hemra Zone",
    "West Gojjam Zone"

]

let bg = document.getElementById("bg");


const locations = document.getElementById("locations")

// update the background and inner HTML when value changes
function cityLocationUpdate() {
    if (city.value == "Addis Ababa") {
        locations.innerHTML = "";
        bg.innerHTML = ""
        AddisAbabaLocations.forEach(function (location) {
            let option = document.createElement("option");
            option.value = location;
            option.innerText = location;
            locations.appendChild(option)
        })

        let img = document.createElement("img");
        img.src = "https://images.unsplash.com/photo-1624314138470-5a2f24623f10?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        bg.appendChild(img)
    }
    else if (city.value == "0") {
        locations.innerHTML = ""
        locations.value = ""
        bg.innerHTML = ""
        location_in_city.innerHTML = "location within(CITY)"


        let img = document.createElement("img");
        img.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        bg.appendChild(img)
    }
    else if (city.value == "Sheger City") {
        locations.innerHTML = ""
        bg.innerHTML = ""
        ShegerCityLocations.forEach(function (location) {
            let option = document.createElement("option");
            option.value = location;
            option.innerText = location;
            locations.appendChild(option)
        })
        let img = document.createElement("img");
        img.src = "https://i.pinimg.com/1200x/35/04/c2/3504c2d448a78e249d81a9a687f40d80.jpg"
        bg.appendChild(img)

    }
    else if (city.value == "Adama") {
        locations.innerHTML = ""
        bg.innerHTML = ""
        AdamaLocation.forEach(function (location) {
            let option = document.createElement("option");
            option.value = location;
            option.innerText = location;
            locations.appendChild(option)
        })
        let img = document.createElement("img");
        img.src = "https://images.unsplash.com/photo-1624781789730-f752a7355510?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bg.appendChild(img)


    }
    else if (city.value == "Hawassa") {
        locations.innerHTML = ""
        bg.innerHTML = ""
        hawassaLocation.forEach(function (location) {
            let option = document.createElement("option");
            option.value = location;
            option.innerText = location;
            locations.appendChild(option)
        })
        let img = document.createElement("img");
        img.src = "  https://images.unsplash.com/photo-1752767420204-9a3e88eb58b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bg.appendChild(img)


    }
    else if (city.value == "Bahir Dar") {
        locations.innerHTML = ""
        bg.innerHTML = ""
        BahirdarLocation.forEach(function (location) {
            let option = document.createElement("option");
            option.value = location;
            option.innerText = location;
            locations.appendChild(option)
        })
        let img = document.createElement("img");
        img.src = "https://images.unsplash.com/photo-1668939581252-470c103ac7da?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bg.appendChild(img)


    }
    else if (city.value == "Harar") {
        locations.innerHTML = ""
        bg.innerHTML = ""
        hararLocation.forEach(function (location) {
            let option = document.createElement("option");
            option.value = location;
            option.innerText = location;
            locations.appendChild(option)
        })
        let img = document.createElement("img");
        img.src = "https://i.pinimg.com/1200x/29/6c/11/296c11e45718664ee98274afacbe9f96.jpg"
        bg.appendChild(img)


    }
    else if (city.value == "Dire Dawa") {
        locations.innerHTML = ""
        bg.innerHTML = ""
        DireLocation.forEach(function (location) {
            let option = document.createElement("option");
            option.value = location;
            option.innerText = location;
            locations.appendChild(option)
        })
        let img = document.createElement("img");
        img.src = "https://i.pinimg.com/1200x/01/71/08/0171081f43c070fcdd428eecac6a9981.jpg"
        bg.appendChild(img)


    }
    else if (city.value == "Desse") {
        locations.innerHTML = ""
        bg.innerHTML = ""
        DesseLocation.forEach(function (location) {
            let option = document.createElement("option");
            option.value = location;
            option.innerText = location;
            locations.appendChild(option)
        })
        let img = document.createElement("img");
        img.src = "https://images.unsplash.com/photo-1573403092240-26095e118918?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bg.appendChild(img)
    }

}

// calls out the cityLocationUpdate everytime city value changes
city.addEventListener("change", function () {
    location_in_city.innerHTML = `location Within (${city.value})`
    cityLocationUpdate()

})

let bearingCapacity = document.getElementById("bearingCapacity");

let bearingCapacityData = document.getElementById("bearingCapacityData");
// bearing capacity input value is disabled unless there is a bearing capacity
bearingCapacity.style.display = "none";

// turn on and off when bearing capacity data changes
bearingCapacityData.addEventListener("change", function () {
    if (bearingCapacityData.value == "yes") {
        bearingCapacity.style.display = "block";
    } else {
        bearingCapacity.style.display = "none";
    }
})
let resetForm = document.getElementById("resetForm")


// reset the whole form
resetForm.addEventListener("click", function () {
    city.value = "0"
    bearingCapacityData.value = "0"
    bearingCapacity.style.display = "none";
    projectName.value = ""
    bearingCapacityAmount.value = ""
    locations.value = "0"
    cityLocationUpdate()
})