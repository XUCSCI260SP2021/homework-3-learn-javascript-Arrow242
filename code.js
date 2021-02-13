const cardNum = document.getElementById('Credit Card Number')
const form = document.getElementById('form')
const error1 = document.getElementById('error')
const success1 = document.getElementById('success')

form.addEventListener('submit', (e) =>
 {
    let messages = []
    error1.innerText=''
    success1.innerText=''

    if(!isNumber(cardNum.value))
    {
        messages.push('Must be a number')
    }

    else if((cardNum.value + '').length < 13 || (cardNum.value + '').length > 16)
    {
        messages.push('Number must be 13-16 characters long')
    }

    else if(isNumber(cardNum.value))
    {
        //let intCard = parseInt(cardNum.value)
        if(!isCardNumber(cardNum.value))
        {
            messages.push('Must be a credit card number')
        }
    }

    if(messages.length > 0)
    {
        e.preventDefault()
        error1.innerText=messages.join(', ') 
    }
    else
    {
        e.preventDefault()
        error1.innerText=''
        success1.innerText='Success!'
    }
})

function isNumber(num)
{
    return !isNaN(num)
}

function isCardNumber(num)
{
    let numArray = num.split('')
    let total = 0
    let tf = false
    for(i=numArray.length-1; i>=0; i--)
    {
        if(tf == false)
        {
            total += parseInt(numArray[i])
            tf = true
        }
        else
        {
            let doubledNum = numArray[i]*2
            if(doubledNum > 9)
            {
                doubledNum = ((doubledNum%10) + ((doubledNum - (doubledNum%10))/10))
            }
            total += parseInt(doubledNum)
            tf = false
        }
    }
    if(total%10 == 0)
    {
        return true
    }
    else
    {
        return false
    }
}