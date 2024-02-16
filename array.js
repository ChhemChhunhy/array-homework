//syntax array
let arr = new Array() //empty array from constructor
let arr1 = [] //empty array literal notation

let student = new Array(10,'lika')
let student1 = ['maa','nija','hu']
console.log(student1[0])
console.log('lenght of student :',student.length)
console.log('last element :',student1[student1.length-1])

let BASE_URL = ""
//array object (use with api)
let products = [
    {
        id: 1,
        title: "iPhone 11 Pro",
        description:"New iMac from USA",
        price: 399,
        thumbnail:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312"
    },
    {
        id: 2,
        title: "iPhone 11 Pro Max",
        description:"New iMac from USA",
        price: 800,
        thumbnail:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290654"
    },
    {
        id: 3,
        title: "iPhone 13",
        description:"New iMac from USA",
        price: 299,
        thumbnail:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HR102?wid=532&hei=582&fmt=png-alpha&.v=1692889294776 "
    },
    {
        id: 4,
        title: "MacBook Pro",
        description:"New iMac from USA",
        price: 999,
        thumbnail:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HR052?wid=532&hei=582&fmt=png-alpha&.v=1692888734736"
    },
    {
        id: 5,
        title: "iMac 2024",
        description:"New iMac from USA",
        price: 300,
        thumbnail:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290559"
    },
    {
        id: 6,
        title: "Mac Book 2024",
        description:"New iMac from USA",
        price: 300,
        thumbnail:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0U3?wid=532&hei=582&fmt=png-alpha&.v=1693000313579"
    },
    {
        id: 7,
        title: "iMac",
        description:"New iMac from USA",
        price: 300,
        thumbnail:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT223?wid=532&hei=582&fmt=png-alpha&.v=1693248280978"
    },
    {
        id: 8,
        title: "iPhone 13",
        description:"New iMac from USA",
        price: 300,
        thumbnail:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4J3?wid=532&hei=582&fmt=png-alpha&.v=1693594197616"
    }


]

console.log(products[0].title)
// products.map(function(product){
//     console.log(product)
// })
let SECTION = document.querySelector('section')
products.map((product)=>{
console.log(product)
SECTION.innerHTML += `

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-8 rounded-t-lg" src=${product.thumbnail} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                </div>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">$ ${product.price}</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 sm:px-5 sm:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
            </div>  
        </div>

`
console.log(product.price)
})