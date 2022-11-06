import axios from 'axios'
import Noty from 'noty'

let addToCart=document.querySelectorAll('.add-to-cart')
let cartCounter=document.querySelector('.cartCounter')

function updateCart(menuItems){
    axios.post('/update-cart',menuItems).then(res=>{
        // console.log(res.data.data)
        // console.log(cartCounter)
        cartCounter.innerText=res.data.data   
        new Noty({
            type: 'success',
            timeout: 1000,
            layout: 'topRight',
            text: 'Item added to cart',
            progressBar: false,
        }).show();
    }).catch(err=>{
        new Noty({
            type: 'success',
            timeout: 1000,
            layout: 'topRight',
            text: 'Something Went Wrong',
            progressBar: false,
        }).show();
     })
}

addToCart.forEach((btn) =>{
    btn.addEventListener('click',(e)=>{
        let menuItems=JSON.parse(btn.dataset.menu)
        updateCart(menuItems)
        // console.log(e);
        // console.log(menuItems)
    })
})


