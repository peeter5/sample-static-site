const menuBtn =document.getElementById('menu-btn');
const closeBtn=document.getElementById('close-btn');
const sideMenu=document.querySelector('aside');
const themeToggler=document.querySelector('.theme-toggler')


//show sideBar
menuBtn.addEventListener("click", function(){
sideMenu.style.display='block';

})
//close sideBar
closeBtn.addEventListener("click",function(){
    sideMenu.style.display='none';
})
//change theme
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
})
Orders.forEach(order=>{
    const tr=document.createElement('tr');
    const trContent=`
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td class="warning">${order.paymentStatus}pending</td>
                <td class="primary">${order.shipping}Details</td>'
                `;
    tr.innerHTML=trContent;
    document.querySelector('table tbody').appendChild(tr);
})
