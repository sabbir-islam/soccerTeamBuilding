document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerField = document.getElementById('perPlayer')
    const perPlayerStr = perPlayerField.value
    const perPlayer = parseFloat(perPlayerStr)

    const valuCalc = perPlayer * 4;
    
    const displayField = document.getElementById('display-p-ex');
    displayField.innerText = valuCalc;

})

document.getElementById('btn-total').addEventListener('click', function(){
    const managerField = document.getElementById('input-manager')
    const coachField = document.getElementById('input-coach')
    const perPlayerField = document.getElementById('perPlayer')

    const managerFieldStr = managerField.value
    const managerValue = parseFloat(managerFieldStr)

    
    const coachFieldStr = coachField.value
    const coachValue = parseFloat(coachFieldStr)

    const perPlayerStr = perPlayerField.value
    const perPlayer = parseFloat(perPlayerStr)

    const valuCalc = perPlayer * 4;

    const totalCost = valuCalc + managerValue + coachValue


    const displayTotalField = document.getElementById('display-total');
    displayTotalField.innerText = totalCost
})