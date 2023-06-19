const billTotalInputdiv = document.getElementById('billTotalInput');
const tipInputdiv =  document.getElementById('tipInput')
const numberOfPeoplediv =  document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

let People = Number(numberOfPeoplediv.innerText)

const calculateBill =()=>{
    let percentTip =
    ( Number (tipInputdiv.value) / 100) * Number(billTotalInputdiv.value)
    const totalBill = (Number(billTotalInputdiv.value) + percentTip) / People
    perPersonTotal.innerText = `$${totalBill.toFixed(2).toLocaleString('en-Us')}`
}

const increasePeople = ()=>{
  People += 1

  numberOfPeoplediv.innerText = People
 
  calculateBill()
}


const decreasePeople = () =>{
  if (People <= 1) {
   throw console.log('You cannot have more than one person')
    return
  }
  People -=1

  numberOfPeoplediv.innerText = People
}