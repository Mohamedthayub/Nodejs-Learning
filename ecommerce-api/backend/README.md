# 🛒 E-Commerce API

A simple backend API built using Node.js, Express, and MongoDB for managing products and orders.

---

## 🚀 Base URL

```
http://localhost:8000/api/v1
```

---

## 📦 Endpoints

### 🔹 Get All Products

* **URL:** `/products`
* **Method:** `GET`

#### ✅ Example Request

```
GET http://localhost:8000/api/v1/products/
```

#### ✅ Response

```json
[
  {
    "_id": "69fe2aa5697bb1f54d1f8327",
    "name": "Oppo",
    "price": 245.67,
    "category": "Mobile Phones"
  }
]
```

---

### 🔹 Get Single Product

* **URL:** `/products/:id`
* **Method:** `GET`

#### ✅ Example Request

```
GET http://localhost:8000/api/v1/products/69fe2aa5697bb1f54d1f8328
```

#### ✅ Response

```json
{
  "_id": "69fe2aa5697bb1f54d1f8328",
  "name": "Samsung Galaxy S21",
  "price": 799.99,
  "category": "Mobile Phones"
}
```

---

### 🔹 Create Order

* **URL:** `/order`
* **Method:** `POST`

#### ✅ Example Request

```
POST http://localhost:8000/api/v1/order/
```

#### ✅ Request Body

```json
[
  {
    "product": "69fe2aa5697bb1f54d1f8327",
    "qty": 2
  },
  {
    "product": "69fe2aa5697bb1f54d1f8328",
    "qty": 1
  }
]
```

#### ✅ Response

```json
{
  "success": true,
  "order": {
    "cartItems": [...],
    "amount": 1291.33,
    "status": "pending"
  }
}
```

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📌 Features

* Fetch all products
* Fetch single product by ID
* Create order
* Auto stock update on order creation

---

## ⚠️ Notes

* Always send product ID as a string (not `$oid`)
* Ensure JSON format is valid in requests
* Stock is updated when an order is created

---

## 🧑‍💻 Author

Thayub

---
