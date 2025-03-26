const container = document.querySelector('.container');
var showorganic_desc = false;
const organicleaf = `<svg class="organicsvg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1729 1915" style="enable-background:new 0 0 11 11;" xml:space="preserve" width="1729px" height="1915px"><g transform="translate(-1229 -248)"><path d="M1797.55 2133C1778.26 2088.68 1758.96 2044.35 1733.52 2029.58 1708.07 2014.8 1694.11 2069.8 1644.86 2044.35 1595.6 2018.91 1497.09 1992.64 1437.98 1876.9 1378.88 1761.17 1295.55 1506.3 1290.22 1349.94 1284.88 1193.57 1379.7 1022.43 1405.97 938.709 1432.24 854.985 1413.36 814.355 1447.83 847.598 1482.31 880.841 1535.67 1066.35 1612.84 1138.17 1645.68 1190.29 1595.19 1046.65 1644.86 1160.33 1725.72 1321.21 1896.88 1662.67 1933 1812.88" fill="#92E160" fill-rule="evenodd"/><path d="M2734.06 364.739C2822.07 662.317 2910.07 959.894 2918.69 1192.21 2927.3 1424.53 2866.58 1615.39 2785.76 1758.63 2704.94 1901.88 2551.09 1999.57 2433.75 2051.7 2316.41 2103.82 2175.69 2071.81 2081.74 2071.4 1987.79 2070.99 1894.25 2103.41 1870.04 2049.23 1845.84 1995.05 1940.61 1848.11 1936.51 1746.32 1932.4 1644.53 1883.58 1526.32 1845.43 1438.48 1807.27 1350.64 1713.73 1303.44 1707.58 1219.3 1701.42 1135.16 1719.89 1047.32 1808.5 933.626 1897.12 819.93 2090.36 634.817 2239.28 537.129 2388.21 439.441 2545.14 393.471 2702.06 347.5" stroke="#226D46" stroke-width="4.58333" stroke-miterlimit="8" fill="#96E268" fill-rule="evenodd"/><path d="M1906.58 1687C1777.48 1640.23 1648.39 1593.45 1553.84 1519.6 1459.28 1445.75 1361.02 1346.05 1339.23 1243.89 1317.44 1141.72 1336.76 868.469 1423.1 906.626 1509.43 944.783 1777.48 1347.28 1857.24 1472.83 1937 1598.38 1897.94 1628.74 1901.64 1659.92" fill="#BFF28B" fill-rule="evenodd"/><path d="M1810 1396.44C1792.54 1423.14 1775.07 1449.84 1750.83 1460.52 1726.59 1471.2 1698.24 1472.43 1664.55 1460.52 1630.86 1448.61 1578.26 1426.42 1548.68 1389.04 1519.1 1351.66 1496.91 1294.15 1487.05 1236.22 1477.19 1178.3 1488.28 1078.06 1489.51 1041.5 1490.75 1004.94 1494.44 1016.85 1494.44 1016.85L1494.44 1016.85 1810 1396.44Z" fill="#D7F9A5" fill-rule="evenodd"/><path d="M2084.29 641.806C2071.36 704.596 2056.37 758.767 2037.48 841.255 2018.6 923.744 1961.94 1057.94 1970.97 1136.74 1980 1215.53 2067.04 1263.96 2091.68 1314.02 2116.31 1364.09 2115.49 1392.41 2118.78 1437.14 2122.06 1481.87 2050.62 1545.89 2111.39 1582.42 2172.15 1618.94 2359.38 1667.78 2483.38 1656.29 2607.37 1644.8 2786.8 1600.07 2855.36 1513.47 2923.93 1426.88 2914.08 1324.69 2894.78 1136.74 2875.48 948.778 2803.63 540.029 2739.58 385.722 2564.67 361.92 2342.96 496.938 2081.83 683.666" fill="#C2EF8A" fill-rule="evenodd"/><path d="M2858.77 891.058 2876 960 2876 960C2860.82 954.255 2810.36 942.765 2784.93 925.529 2759.49 908.294 2739.8 899.265 2723.39 856.587 2706.98 813.909 2709.85 725.68 2686.47 669.459 2663.09 613.238 2652.42 510.646 2583.09 519.264 2513.76 527.882 2386.99 598.875 2300.02 647.299 2213.05 695.723 2122.8 761.382 2061.26 809.805 1999.73 858.229 1953.37 944.817 1930.81 937.84 1908.24 930.864 1808.97 862.332 1925.88 767.948 2042.8 673.563 2491.19 407.233 2632.32 371.531 2773.44 335.829 2741.03 481.92 2772.62 553.735 2804.21 625.549 2804.41 620.419 2821.85 802.418" fill="#D7F9A5" fill-rule="evenodd"/><path d="M1810.5 2103.5C1854.98 1953.81 1902.35 1831.17 1957.74 1706.51 2013.12 1581.86 2068.85 1494.25 2142.81 1355.56 2216.77 1216.87 2317.83 1043.23 2401.5 850.5" stroke="#236E47" stroke-width="119.167" stroke-linecap="round" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M1598.5 2010.5C1511.31 1937.21 1424.12 1863.93 1373.62 1764.16 1323.12 1664.39 1295.5 1531.37 1295.5 1411.89 1295.5 1292.42 1349.16 1132.7 1373.62 1047.31 1398.08 961.907 1420.17 930.703 1442.27 899.5" stroke="#226D46" stroke-width="132.917" stroke-linecap="round" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M1903.96 1820C1915.88 1767.88 1905.6 1723.15 1884.23 1642.71 1862.85 1562.27 1851.75 1453.52 1775.7 1337.38 1699.66 1221.23 1530.5 1070 1460 904" stroke="#226D46" stroke-width="110" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M1704.5 1212.5C1744.22 1114.14 1782.26 1012.81 1838.93 922.516 1895.59 832.222 1965.14 748.344 2044.47 670.737 2123.79 593.13 2204.62 513.677 2314.86 456.872 2425.11 400.067 2705.92 329.907 2705.92 329.907L2758.5 309.5" stroke="#236E47" stroke-width="122.604" stroke-linecap="round" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M2755.95 323.5C2734.41 498.694 2811.34 673.068 2834.73 808.464 2858.11 943.86 2899.96 990.633 2896.27 1135.88 2892.58 1281.12 2874.94 1542.47 2812.57 1679.92 2750.21 1817.37 2685.79 1892.86 2595.94 1960.56 2506.09 2028.26 2392.03 2068.06 2273.45 2086.11 2154.88 2104.16 1884.5 2044.26 1884.5 2044.26" stroke="#226D46" stroke-width="122.604" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M2869 1167C2799.48 1224.29 2757.85 1260.62 2677.04 1299.08 2596.24 1337.55 2467.45 1380.88 2384.18 1397.77 2300.92 1414.65 2234.27 1424.78 2175 1412.72" stroke="#236E47" stroke-width="134.062" stroke-linecap="round" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/></g></svg>`
const container_progress = document.querySelector('.container_progress');


for (let key in produkt_liste) {
    josnproduct = produkt_liste[key]
    var addclass = ""
    if(josnproduct.isinitial) {addclass = "init"}
    organic_dispaly = josnproduct.organic != "" ? "display:block" : "display:none";
    htmlinject = `
    <div class="item box `+addclass+`">
            <div class="mgr_item">
            <div class="productid invisivble">`+josnproduct.id+`</div>
            <div class="productkey invisivble">`+key+`</div>
            <div class="organicicon" style="`+organic_dispaly+`;">`+organicleaf+`
                <div class="organicdesc">`+ josnproduct.organic+`</div>
            </div>
            <div class="product" id="`+josnproduct.id+`"></div>
            <div   class="product_desc">`+josnproduct.productdesc+`</div>

            <div class="underproduct">

            <p   class="product_name">`+josnproduct.productname+`</p>
            <div class="lookfurther">Ansehen</div>
            </div>

            <p   class="preis">`+josnproduct.price.price_str+`</p>
                
            </div>
          </div>
    `
    container.innerHTML = container.innerHTML + htmlinject
    container_progress.innerHTML = container_progress.innerHTML + `<div class="item_progress"></div>`
    const imagediv = document.getElementById(josnproduct.id);
    
    imagediv.style.backgroundImage = josnproduct.productimage.imagebits;
    imagediv.style.backgroundColor = josnproduct.productimage.imagebgc;
    imagediv.style.backgroundSize  = josnproduct.productimage.image_size;



};
container.innerHTML = container.innerHTML + '<div class="invisible-div right"></div>'

const items = container.querySelectorAll('.item');


items.forEach(item => {
    const lookfurther = item.querySelector('.lookfurther');
    const id_el =  item.querySelector('.productid');
    const key_el = item.querySelector('.productkey');
    josnproduct = produkt_liste[key_el.innerHTML]
    

    lookfurther.addEventListener('click',() => openbigview(key_el,id_el))
    if (josnproduct.organic != ""){
        const product_name = item.querySelector(".product_name");

        const organicdesc = item.querySelector(".organicdesc")
        const organicicon = item.querySelector(".organicicon")
        product_name.style.color = "rgb(170 227 135)";

        organicicon.addEventListener("click",e => {eventorganic(organicicon,organicdesc);});

    }
})
var organicpopuptimer;


function eventorganic(organicicon,organicdesc) {
    console.log("Hier ... ")
    showorganic_desc = !showorganic_desc

    organicdesc.style.display =  showorganic_desc ?  "block": "none";

    if (showorganic_desc) {organicpopuptimer = setTimeout(() => {organicicon.click()}, 3000);}
    else {clearTimeout(organicpopuptimer)}
}