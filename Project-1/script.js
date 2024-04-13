const searchInput = document.getElementById('searchInput')
const searchMe = document.querySelector('.searchMe')

searchInput.addEventListener('focus', ()=>{
    searchMe.classList.add('focusSearchopt')
})
searchInput.addEventListener('blur', ()=>{
    searchMe.classList.remove('focusSearchopt')
})


const store_forthe_user = document.querySelector('.forthe-user ul')
const image_forthe_user = [
    {img:'https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-common--1--1706616684.gif', title:'Bestsellers'},
    {img:'https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-New-Arrivals-1706616683.jpg', title:'New Arrivals'},
    {img:'https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg', title:'Official Collaborations'},
    {img: 'https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop--1706616685.jpg', title:'Plus Size'},
    {img: 'https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg', title:'Customization'},
    {img: 'https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif', title:'Combos'},
    {img: 'https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg', title:'Vote for Designs'},
    {img: 'https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg', title:'Last Sizes Left'}]


const Forthe_user = (index)=>{
    const litag = document.createElement('li');
    const divtag = document.createElement('div')
    const ptag = document.createElement('p')

    divtag.style.backgroundImage = `url(${image_forthe_user[index].img})`;
    ptag.textContent = image_forthe_user[index].title
    litag.appendChild(divtag)
    litag.appendChild(ptag)
    return litag
}
image_forthe_user.forEach((item, index)=>{
    store_forthe_user.appendChild(Forthe_user(index))
})


const tranding_image = [
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg',
    'https://images.bewakoof.com/uploads/grid/app/unnamed--5--1706513552.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg',
    'https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Casual-Pants-1706509180.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-1706509180.jpg',
    'https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Cargos-1704270812-1706511406.webp',
    'https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Dresses-1704270296-1706511533.webp',
]
const trandingBox1 = document.querySelector('.tranding1')
const trandingBox2 = document.querySelector('.tranding2')

tranding_image.forEach((ele, ind)=>{
    const divtag = document.createElement('div')
    divtag.style.backgroundImage = `url(${ele})`

    if(ind< 6){
        trandingBox1.appendChild(divtag)
    }else{
        trandingBox2.appendChild(divtag)
    }
})


const category_imgae = [
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Shirts-men--1706511997.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Cargos-men-1706511996.jpg',
    'https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-1706514429.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-1707280972.jpg',
    'https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-women-1706514429.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1706509182.jpg',
]
const categriesforme = document.querySelector('.categriesforme')

category_imgae.forEach((ele, ind)=>{
    
    const divtag = document.createElement('div')
    divtag.style.backgroundImage = `url(${ele})`

    categriesforme.appendChild(divtag)
})



const top_accessries_image = [
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Mobile-covers-1705054649.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Sliders-1705043484.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Backpacks-1705043482.jpg',
    'https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Caps-1705043483.jpg',
]

const mainAccessries = document.querySelector('.mainAccessries')

top_accessries_image.forEach((ele, ind)=>{
    const divtag = document.createElement('div')
    divtag.style.backgroundImage = `url(${ele})`

    mainAccessries.appendChild(divtag)
})