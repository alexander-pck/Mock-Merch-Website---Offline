
function check_forid_overlap() {

    id_list = []
    for ( const key in produkt_liste) {
        if (id_list.includes(produkt_liste[key].id.slice(0,9))) {
            document.body.innerHTML = "Product-ID overlap. Document will not function properly. Found for:" + produkt_liste[key].id
        }
        id_list.push(produkt_liste[key].id.slice(0,9))
    }
}

check_forid_overlap()