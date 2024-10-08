alert('Working')

document.querySelector('button').addEventListener('click', getDrinkTaste)

async function getDrinkTaste() {
    const drinkTasting = document.querySelector('input').value
    try{
        const res = await fetch(`http://localhost:8000/api/drinks/${drinkTasting}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h2').innerText = data.taste
    }catch(err){
        console.log(err)
    }
    
}