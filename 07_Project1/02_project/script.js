const form  = document.querySelector('form')

// const height =parseInt(document.querySelector('#height').value)
//this is give empty value because it give the value when the form is lod 

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height =parseInt(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)
    const result =document.querySelector('#result')

    if (height === '' || height<0 || isNaN(height)) {
        result.innerHTML = `Plese give a valid height ${height}`
    }else if (weight === '' || weight<0 || isNaN(weight)) {
        result.innerHTML = `Plese give a valid weight ${weight}`
    }else{
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)

      if (bmi<18.6) {
        result.innerHTML = `<span>Your BMI is = ${bmi} (UnderWeight)</span>`
        result.style.display = 'block'
        result.style.backgroundColor = "red"
      }
      if (bmi>18.6 && bmi<24.9) {
        result.innerHTML = `<span>Your BMI is = ${bmi} (Good)</span>`
        result.style.display = 'block'
        result.style.backgroundColor = "green"
      }
      if (bmi>24.9) {
        result.innerHTML = `<span>Your BMI is = ${bmi} (OverWeight)</span>`
        result.style.display = 'block'
        result.style.backgroundColor = "red"
      }
    }

})