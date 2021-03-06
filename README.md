# Requirement
A cash register (POS) system is used in the store for settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called printReceipt, which can input the data of the specified format as a parameter and then output the text of the receipt in the browser console.

This time, the input will be an array of barcodes (string). For example:
```javascript
[
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
]
```

Then the output should be 
```
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************
```

Suppose that our database is as follows:
```javascript
[
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
]
```

# Principal

1. Please draw context diagram.
2. Please declare all the methods according to your diagram.
3. Please implement the function according to the context diagram
4. Please repeat step 3 until all functions are implemented.

# Homework
### PDCA

getCartItemAmount|    |
-----------------|:--:
P|5min
D|9min
C|Simple logical question
A|Strengthen logic training

getItemInfo|         |
-----------------|:--:
P|4min
D|9min
C|Some js methods have not been used for a long time
A|Review js syntax

calculateItemTotalPrice|         |
-----------------|:--:
P|2min
D|2min
C|Simple calculation and assignment problem
A|none

calculateTotalPrice|         |
-----------------|:--:
P|1min
D|2min
C|Addition and subtraction problem
A|none

formatReceipt|         |
-----------------|:--:
P|2min
D|7min
C|Not familiar with the use of backticks
A|Learn the use of js backticks

formatReceiptLine|         |
-----------------|:--:
P|1min
D|1min
C|Simple format
A|none

### tasking  
- 1、获取item的数量 getCartItemAmount
   - 输入:cartItems:[itemCode:string]
   - 输出:cartItemAmount:{itemCode:int}
- 2、获取item的详细信息 getItemInfo
   - 输入:cartItemAmount:{itemCode:int}
   - 输出:cartItemDetails:[{itemCode:string,itemName:string,quantity:int,unitPrice:int}]
- 3、计算每个item的总价 calculateItemTotalPrice
   - 输入:cartItemDetails:[{itemCode:string,itemName:string,quantity:int,unitPrice:int}]
   - 输出:cartItemDetailsWithTotalPrice:[{itemCode:string,itemName:string,quantity:int,unitPrice:int,subTotalPrice}]
- 4、计算所有商品的总价 calculateTotalPrice
   - 输入:cartItemDetailsWithTotalPrice:[{itemCode:string,itemName:string,quantity:int,unitPrice:int,subTotalPrice}]
   - 输出:totalPrice:int
- 5、格式化单行票据 formatReceiptLine
   - 输入:cartItemDetailsWithTotalPrice:[{itemCode:string,itemName:string,quantity:int,unitPrice:int,subTotalPrice}]
   - 输出:string
- 6、格式化全部票据 formatReceipt
   - 输入:cartItemDetailsWithTotalPrice:[{itemCode:string,itemName:string,quantity:int,unitPrice:int,subTotalPrice}]，totalPrice:int
   - 输出:formatReciept:string
- 7、打印数据
   - 输入:formatReciept:string
   - 输出:string

### context map

![image](https://github.com/islinjj/pos-machine-2020-7-20-13-59-35-216/blob/master/context-map.png)
