//dolar = document.getElementById("dolar");
let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');
const btnConvertir = document.querySelector("#btnConvertir");
let dolar = document.querySelector("#dolar");
let txtBitcoin = document.querySelector("#txtBitcoin")
let txtColones = document.querySelector("#txtColones") 
const price = document.querySelector('#stock-price');





btnConvertir.addEventListener('click', (e)=>{
    const capturar = dolar.value;
    ws.onmessage = (event) => {
        let stockObject = JSON.parse(event.data);
        let calcular = capturar / stockObject.p
        txtBitcoin.value = calcular 
    }
    let convColones = capturar * 8.75;
     txtColones.value = convColones;
})
