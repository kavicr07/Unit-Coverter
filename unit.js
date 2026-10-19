let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let resetBtn = document.getElementById("reset-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meeterToFeet = 3.281
const feetToMeeter = 0.304

const litersToGaloons = 0.264
const gallonsToLiters = 3.785

const kgToPounds = 2.204
const poundsToKg = 0.453

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    lengthEl.textContent= `${baseValue} Meter = ${(baseValue * meeterToFeet).toFixed(2)} Feet | ${baseValue} Feet = ${(baseValue * feetToMeeter).toFixed(2)} Meter `
    volumeEl.textContent= `${baseValue} liters = ${(baseValue * litersToGaloons).toFixed(2)} galoons | ${baseValue} galoons = ${(baseValue * gallonsToLiters).toFixed(2)} liters`
    massEl.textContent =`${baseValue} Kilograms = ${(baseValue * kgToPounds).toFixed(2)} Pounds | ${baseValue} Pounds = ${(baseValue * poundsToKg).toFixed(2)} Kilograms`
})
resetBtn.addEventListener("click" , function(){
    inputEl.value = ""
    lengthEl.textContent =` 0 Meter = 0000 Feet | 0 Feet = 0000 Meter `
    volumeEl.textContent = `0 liters = 0000 galoons | 0 galoons = 0000 liters`
    massEl.textContent = `0 Kilograms = 0000 Pounds | 0 Pounds = 0000 Kilograms`
})