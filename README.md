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
- PDCA

getCartItemAmount|    |
-----------------|:--:
P|5min
D|9min
C|简单的逻辑问题
A|加强逻辑训练

getItemInfo|         |
-----------------|:--:
P|4min
D|9min
C|部分js的方法旧没有使用了，有些生疏
A|复习js语法

calculateItemTotalPrice|         |
-----------------|:--:
P|4min
D|3min
C|简单的计算赋值问题
A|

calculateTotalPrice|         |
-----------------|:--:
P|1min
D|2min
C|加减运算问题
A|

formatReceipt|         |
-----------------|:--:
P|2min
D|7min
C|不熟悉反引号的使用
A|学习js反引号的使用

formatReceiptLine|         |
-----------------|:--:
P|1min
D|1min
C|了解了反引号的使用
A|

- context map

![image](https://github.com/islinjj/pos-machine-2020-7-20-13-59-35-216/blob/master/context-map.png)
