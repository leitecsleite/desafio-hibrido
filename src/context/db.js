

export async function data(){
    const response = await fetch("https://fakestoreapi.com/products/1")
    const result = await response.json(); 
    console.log('data')
    console.log(result)
    return result 
  
}

export const globalData = data(); 