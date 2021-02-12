const cardNum = document.getElementById('Credit Card Number')
const form = document.getElementById('form')
const error1 = document.getElementById('error')

form.addEventListener('submit', (e) =>
 {
    let messages = []
    if(!isNumber(cardNum.value))
    {
        messages.push('Must be a number')
    }

    else if((cardNum.value + '').length < 13 || (cardNum.value + '').length > 16)
    {
        messages.push('Card number 13-16 characters long')
    }

    if(isNumber(cardNum.value))
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