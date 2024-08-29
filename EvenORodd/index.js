

let useInput = document.getElementById('input_user')

let result = document.getElementById('result')

function EvenOrOdd(){
    if(useInput.value === ''){
        alert('please provide number')
        return false   // breke & return 
    }

    console.log('It is passed')
    if(useInput.value % 2 === 0){
        result.innerHTML = 'even number'
    }
    else{
        result.innerHTML = 'Odd number'
    }
}