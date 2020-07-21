var barcodes = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
];

function getDatas() {
    return [
        {
           barcode: 'ITEM000000',
           name: 'Coca-Cola',
           price: 3
         },
         {
           barcode: 'ITEM000001',
           name: 'Sprite',
           price: 3
         },
         {
           barcode: 'ITEM000002',
           name: 'Apple',
           price: 5
         },
         {
           barcode: 'ITEM000003',
           name: 'Litchi',
           price: 15
         },
         {
           barcode: 'ITEM000004',
           name: 'Battery',
           price: 2
         },
         {
           barcode: 'ITEM000005',
           name: 'Instant Noodles',
           price: 4
         }
     ];
}

function printReceipt(barcodes) {//2m 3m
    let cartItemAmount = getCartItemAmount(cartItems);
    let itemInfo = getItemInfo(cartItemAmount);
    let itemTotalPrice = calculateItemTotalPrice(itemInfo);
    let totalPrice = calculateTotalPrice(itemTotalPrice);
    let result = formatReceipt(itemTotalPrice,totalPrice);

    // return result;
}

function getCartItemAmount(cartItems) {//5m 9m
    let cartItemAmount = {};
    cartItems.forEach(item => {
        if (!cartItemAmount[item]) {
            cartItemAmount[item]=1;
        } else {
            cartItemAmount[item]++;
        }
    });
    return cartItemAmount;
}

function getItemInfo(cartItemAmount) {//4m 9m
    let itemInfo = [];
    let data = getDatas();

    for (const code in cartItemAmount) {
        let cartItem = data.find(item => item.barcode === code);
        itemInfo.push({itemCode:code,itemName:cartItem.name,amount:cartItemAmount[code],unitPrice:cartItem.price});
    }
    return itemInfo;
}

function calculateItemTotalPrice(cartItemDetails) {//4m  3m
    cartItemDetails.forEach(item => {
        let subTotal = item.amount * item.unitPrice;
        item.subTotal = subTotal;
    });
    return cartItemDetails;
}

function calculateTotalPrice(cartItemDetailsWithTotalPrice) {//1m 2m
    let totalPrice = 0;
    cartItemDetailsWithTotalPrice.forEach(itemWithSubtotal => {
        totalPrice += itemWithSubtotal.subTotal;
    });
    return totalPrice;
}

function formatReceipt(cartItemDetailsWithTotalPrice,totalPrice) {//2m 7m
    let receipt = ``;
    let itemDetail = ``;
    cartItemDetailsWithTotalPrice.forEach((itemWithSubtotal,i) => {
        itemDetail += formatReceiptLine(itemWithSubtotal);
        if (i!=cartItemDetailsWithTotalPrice.length-1){
            itemDetail += `\n`;
        }
    });
    receipt += `***<store earning no money>Receipt ***
${itemDetail}
----------------------
Total: ${totalPrice} (yuan)
**********************`
    console.log(receipt);
}

function formatReceiptLine(itemTotalPrice) {//1m 1m
    return `Name: ${itemTotalPrice.itemName}, Quantity: ${itemTotalPrice.amount}, Unit price: ${itemTotalPrice.unitPrice} (yuan), Subtotal: ${itemTotalPrice.subTotal} (yuan)`;
}


module.exports = {
    printReceipt
};