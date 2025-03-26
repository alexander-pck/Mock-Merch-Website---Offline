var shoppingcart = {}
var orderid = 0
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  
  

function putinternalcart(productjson,stuckzahl,size) {
    // productjson.id,productjson.productname,productjson.price.price_num
    // console.log(productjson.id)
    // console.log(productjson.productname)
    // console.log(productjson.price.price_num)
    // console.log(stuckzahl)
    const orderentry = {
        "itemobj":  productjson,
        "stuckzahl": stuckzahl,
        "grosse": size,
        "erstellt": new Date()
    }

    const uuid = orderid+generateUUID();
    orderid++;
    shoppingcart[uuid] = orderentry
    
    uddatecartcounter()
}



function uddatecartcounter() {
  c = 0
  for (const keys in shoppingcart) {
    c += parseInt(shoppingcart[keys].stuckzahl)
  }
  const cart_num = document.querySelector(".cart_num")
  const cart_filllevel = c
  cart_num.innerHTML = cart_filllevel
  return cart_filllevel
}




