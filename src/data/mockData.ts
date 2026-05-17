export const mockVehicles = [
  {
    id: "1",
    brand: "Porsche",
    model: "911 Carrera S",
    year: 2023,
    price: 155000,
    mileage: 4500,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Coupe",
    color: "White",
    damage: "None",
    owner: "1st Owner",
    location: "Mersin, Yenişehir",
    images: [
      "https://images.unsplash.com/photo-1742501744077-e041d1838b44?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1742501744077-e041d1838b44?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    seller: {
      name: "Mezitli Porsche",
      type: "Dealer",
      verified: true,
      rating: 4.9
    },
    featured: true
  },
  {
    id: "2",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: 89990,
    mileage: 1200,
    fuel: "Electric",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Blue",
    damage: "None",
    owner: "1st Owner",
    location: "İstanbul, Sarıyer",
    images: [
      "https://images.unsplash.com/photo-1716558964076-1abe07448abf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1716558964076-1abe07448abf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    seller: {
      name: "Umut Özkan",
      type: "Private",
      verified: false,
      rating: 4.5
    },
    featured: true
  },
  {
    id: "3",
    brand: "Mercedes-Benz",
    model: "G-Class G 63 AMG",
    year: 2022,
    price: 175000,
    mileage: 12500,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Black",
    damage: "Minor Scratch",
    owner: "2nd Owner",
    location: "Ankara, Söğütler",
    images: [
      "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    seller: {
      name: "Vogue Auto Beytepe",
      type: "Dealer",
      verified: true,
      rating: 4.8
    },
    featured: false
  },
  {
    id: "4",
    brand: "Audi",
    model: "RS e-tron GT",
    year: 2023,
    price: 104900,
    mileage: 3800,
    fuel: "Electric",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Grey",
    damage: "None",
    owner: "1st Owner",
    location: "İzmir, Bayraklı",
    images: [
      "https://images.unsplash.com/photo-1654853976163-7ecedd0dd4d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1654853976163-7ecedd0dd4d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    seller: {
      name: "Doğuş Oto Audi Yetkili Bayi",
      type: "Dealer",
      verified: true,
      rating: 4.7
    },
    featured: true
  },
  {
    id: "5",
    brand: "BMW",
    model: "M4 Competition",
    year: 2023,
    price: 85500,
    mileage: 8500,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Coupe",
    color: "Grey",
    damage: "None",
    owner: "1st Owner",
    location: "Diyarbakır, Çermik",
    images: [
      "https://images.unsplash.com/photo-1660310477229-d03d8565f15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1660310477229-d03d8565f15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    seller: {
      name: "Diyarbakır Performance",
      type: "Dealer",
      verified: true,
      rating: 4.9
    },
    featured: false
  },
  {
    id: "6",
    brand: "Land Rover",
    model: "Range Rover Sport",
    year: 2024,
    price: 92000,
    mileage: 150,
    fuel: "Hybrid",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "White",
    damage: "None",
    owner: "1st Owner",
    location: "Niğde, Ulukışla",
    images: [
      "https://images.unsplash.com/photo-1679506640590-f0152786dff0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1679506640590-f0152786dff0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    seller: {
      name: "Land Rover Niğde",
      type: "Dealer",
      verified: true,
      rating: 4.6
    },
    featured: true
  },
  {
    "id": "7",
    "brand": "Porsche",
    "model": "911 GT3",
    "year": 2024,
    "price": 83247,
    "mileage": 27310,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1723847025868-323e188dbfbe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1723847025868-323e188dbfbe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "İzmir Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.8
    },
    "featured": false
  },
  {
    "id": "8",
    "brand": "Porsche",
    "model": "Cayenne Turbo GT",
    "year": 2022,
    "price": 123215,
    "mileage": 33221,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Black",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1699325974549-fd06639650aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1699325974549-fd06639650aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Lara Cars",
      "type": "Dealer",
      "verified": true,
      "rating": 5
    },
    "featured": false
  },
  {
    "id": "9",
    "brand": "Porsche",
    "model": "Panamera GTS",
    "year": 2024,
    "price": 198435,
    "mileage": 12193,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1611859266720-147cc87658f1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1611859266720-147cc87658f1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "İzmir Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": true
  },
  {
    "id": "10",
    "brand": "Porsche",
    "model": "Macan GTS",
    "year": 2023,
    "price": 63733,
    "mileage": 19349,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Blue",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Istanbul, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1661914132349-095cd34f37aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1661914132349-095cd34f37aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "İstanbul Etiler Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.6
    },
    "featured": true
  },
  {
    "id": "11",
    "brand": "Porsche",
    "model": "Taycan Turbo S",
    "year": 2024,
    "price": 163083,
    "mileage": 8939,
    "fuel": "Electric",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Red",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1708885959562-8fd3be5f4036?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1708885959562-8fd3be5f4036?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Lara",
      "type": "Dealer",
      "verified": true,
      "rating": 4.6
    },
    "featured": true
  },
  {
    "id": "12",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2021,
    "price": 136302,
    "mileage": 27667,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Green",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1699325413806-48286e94351c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1699325413806-48286e94351c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Izmir Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.9
    },
    "featured": true
  },
  {
    "id": "13",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2023,
    "price": 63935,
    "mileage": 1210,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Blue",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Ankara, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1601278840447-9af5ac4ed157?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1601278840447-9af5ac4ed157?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Ankara Motors",
      "type": "Dealer",
      "verified": true,
      "rating": 4.9
    },
    "featured": false
  },
  {
    "id": "14",
    "brand": "Porsche",
    "model": "Cayenne S",
    "year": 2022,
    "price": 163537,
    "mileage": 16955,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Istanbul, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1654159866298-e3c8ee93e43b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1654159866298-e3c8ee93e43b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "İstanbul Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": false
  },
  {
    "id": "15",
    "brand": "Porsche",
    "model": "Panamera 4S",
    "year": 2024,
    "price": 155328,
    "mileage": 29909,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Istanbul, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1611157816773-5491e8b19a15?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1611157816773-5491e8b19a15?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "İstanbul Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.9
    },
    "featured": false
  },
  {
    "id": "16",
    "brand": "Porsche",
    "model": "Taycan Cross Turismo",
    "year": 2021,
    "price": 152745,
    "mileage": 37883,
    "fuel": "Electric",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Green",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1699324637558-7d9f469b956f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1699324637558-7d9f469b956f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "İzmir Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": false
  },
  {
    "id": "17",
    "brand": "Mercedes-Benz",
    "model": "AMG GT Black Series",
    "year": 2021,
    "price": 87132,
    "mileage": 39996,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Orange",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "İzmir Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": true
  },
  {
    "id": "18",
    "brand": "Mercedes-Benz",
    "model": "S-Class S 580",
    "year": 2024,
    "price": 292312,
    "mileage": 35004,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "White",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Izmir Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.9
    },
    "featured": true
  },
  {
    "id": "19",
    "brand": "Mercedes-Benz",
    "model": "GLE 63 S AMG",
    "year": 2023,
    "price": 283140,
    "mileage": 37413,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Yellow",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Ankara, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1577615792595-d38014354328?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1577615792595-d38014354328?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Ankara Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.5
    },
    "featured": true
  },
  {
    "id": "20",
    "brand": "Mercedes-Benz",
    "model": "C 63 S AMG",
    "year": 2024,
    "price": 108787,
    "mileage": 5077,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Ankara, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1616875491585-8e2464195d5f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1616875491585-8e2464195d5f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": true
  },
  {
    "id": "21",
    "brand": "Mercedes-Benz",
    "model": "SL 63 AMG",
    "year": 2024,
    "price": 112401,
    "mileage": 15503,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Blue",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Ankara, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1692632061047-83b215e63d0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1692632061047-83b215e63d0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Ankara Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": true
  },
  {
    "id": "22",
    "brand": "Mercedes-Benz",
    "model": "E 63 S AMG",
    "year": 2022,
    "price": 51932,
    "mileage": 23740,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1612945789141-802278191556?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1612945789141-802278191556?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": false
  },
  {
    "id": "23",
    "brand": "Mercedes-Benz",
    "model": "G 500",
    "year": 2021,
    "price": 264111,
    "mileage": 16822,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Black",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Istanbul, Turkey",
    "images": [
      "https://images.pexels.com/photos/9927970/pexels-photo-9927970.jpeg", "https://images.pexels.com/photos/9927970/pexels-photo-9927970.jpeg"],
    "seller": {
      "name": "İstanbul Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": false
  },
  {
    "id": "24",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2022,
    "price": 175319,
    "mileage": 16663,
    "fuel": "Electric",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Silver",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1668248835473-c2f28c752663?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1668248835473-c2f28c752663?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.8
    },
    "featured": false
  },
  {
    "id": "25",
    "brand": "Mercedes-Benz",
    "model": "GLS 600 Maybach",
    "year": 2022,
    "price": 77465,
    "mileage": 17461,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Black",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Istanbul, Turkey",
    "images": [
      "https://images.pexels.com/photos/14284503/pexels-photo-14284503.jpeg", "https://images.pexels.com/photos/14284503/pexels-photo-14284503.jpeg"],
    "seller": {
      "name": "Istanbul Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.8
    },
    "featured": true
  },
  {
    "id": "26",
    "brand": "Mercedes-Benz",
    "model": "A 45 S AMG",
    "year": 2022,
    "price": 193858,
    "mileage": 18781,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1682594232758-b9d0877813eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1682594232758-b9d0877813eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.5
    },
    "featured": false
  },
  {
    "id": "27",
    "brand": "BMW",
    "model": "M5 Competition",
    "year": 2021,
    "price": 165545,
    "mileage": 29967,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Purple",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1714434087915-27cfbdd3b048?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1714434087915-27cfbdd3b048?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.6
    },
    "featured": false
  },
  {
    "id": "28",
    "brand": "BMW",
    "model": "X5 M Competition",
    "year": 2021,
    "price": 91735,
    "mileage": 8882,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.pexels.com/photos/36988189/pexels-photo-36988189.jpeg", "https://images.pexels.com/photos/36988189/pexels-photo-36988189.jpeg"],
    "seller": {
      "name": "Izmir Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.6
    },
    "featured": true
  },
  {
    "id": "29",
    "brand": "BMW",
    "model": "M8 Gran Coupe",
    "year": 2021,
    "price": 69939,
    "mileage": 21195,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Ankara, Turkey",
    "images": [
      "https://images.pexels.com/photos/36159609/pexels-photo-36159609.jpeg", "https://images.pexels.com/photos/36159609/pexels-photo-36159609.jpeg"],
    "seller": {
      "name": "Ankara Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.5
    },
    "featured": false
  },
  {
    "id": "30",
    "brand": "BMW",
    "model": "i4 M50",
    "year": 2023,
    "price": 136800,
    "mileage": 17957,
    "fuel": "Electric",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Blue",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Istanbul, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1727994832515-7888b6edd884?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1727994832515-7888b6edd884?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Ankara Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.8
    },
    "featured": false
  },
  {
    "id": "31",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2024,
    "price": 253084,
    "mileage": 26597,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Black",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1701985470695-e430a8fdc8d6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1701985470695-e430a8fdc8d6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Istanbul Motors",
      "type": "Dealer",
      "verified": true,
      "rating": 5
    },
    "featured": true
  },
  {
    "id": "32",
    "brand": "BMW",
    "model": "M3 Touring",
    "year": 2022,
    "price": 113722,
    "mileage": 14383,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Green",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1724262706189-82b1347b97e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1724262706189-82b1347b97e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": false
  },
  {
    "id": "33",
    "brand": "BMW",
    "model": "M2",
    "year": 2023,
    "price": 128208,
    "mileage": 6685,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Blue",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1739576616400-1b79dd8c0019?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1739576616400-1b79dd8c0019?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Istanbul Motors",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": true
  },
  {
    "id": "34",
    "brand": "BMW",
    "model": "iX M60",
    "year": 2023,
    "price": 93074,
    "mileage": 36043,
    "fuel": "Electric",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Black",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Istanbul, Turkey",
    "images": [
      "https://images.pexels.com/photos/30140362/pexels-photo-30140362.jpeg", "https://images.pexels.com/photos/30140362/pexels-photo-30140362.jpeg"],
    "seller": {
      "name": "Ankara Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 5
    },
    "featured": false
  },
  {
    "id": "35",
    "brand": "BMW",
    "model": "Z4 M40i",
    "year": 2022,
    "price": 139017,
    "mileage": 15168,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Purple",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.pexels.com/photos/15626681/pexels-photo-15626681.jpeg", "https://images.pexels.com/photos/15626681/pexels-photo-15626681.jpeg"],
    "seller": {
      "name": "Ankara Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.8
    },
    "featured": true
  },
  {
    "id": "36",
    "brand": "BMW",
    "model": "760i xDrive",
    "year": 2022,
    "price": 245155,
    "mileage": 39086,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Sedan",
    "color": "Black",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Ankara, Turkey",
    "images": [
      "https://images.pexels.com/photos/11139403/pexels-photo-11139403.jpeg", "https://images.pexels.com/photos/11139403/pexels-photo-11139403.jpeg"],
    "seller": {
      "name": "Ankara Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.8
    },
    "featured": false
  },
  {
    "id": "37",
    "brand": "Audi",
    "model": "R8 V10 Performance",
    "year": 2022,
    "price": 59502,
    "mileage": 4165,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1666000301667-1a3a8b1665ff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1666000301667-1a3a8b1665ff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Izmir Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.9
    },
    "featured": true
  },
  {
    "id": "38",
    "brand": "Audi",
    "model": "RS6 Avant",
    "year": 2022,
    "price": 160025,
    "mileage": 2325,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1618056210931-39f730ebbf67?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1618056210931-39f730ebbf67?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Ankara Elite",
      "type": "Dealer",
      "verified": true,
      "rating": 4.9
    },
    "featured": true
  },
  {
    "id": "39",
    "brand": "Audi",
    "model": "RSQ8",
    "year": 2024,
    "price": 182447,
    "mileage": 8258,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Green",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1655283281667-9497cc154137?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1655283281667-9497cc154137?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Istanbul Motors",
      "type": "Dealer",
      "verified": true,
      "rating": 4.6
    },
    "featured": true
  },
  {
    "id": "40",
    "brand": "Audi",
    "model": "e-tron S Sportback",
    "year": 2021,
    "price": 148775,
    "mileage": 39399,
    "fuel": "Electric",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Silver",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.pexels.com/photos/18353715/pexels-photo-18353715.jpeg", "https://images.pexels.com/photos/18353715/pexels-photo-18353715.jpeg"],
    "seller": {
      "name": "Istanbul Motors",
      "type": "Dealer",
      "verified": true,
      "rating": 4.6
    },
    "featured": true
  },
  {
    "id": "41",
    "brand": "Audi",
    "model": "RS7 Sportback",
    "year": 2024,
    "price": 93044,
    "mileage": 17806,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Black",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Antalya, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1655284345297-32ac916ce235?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1655284345297-32ac916ce235?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.8
    },
    "featured": true
  },
  {
    "id": "42",
    "brand": "Audi",
    "model": "RS5 Coupe",
    "year": 2024,
    "price": 107470,
    "mileage": 31296,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Silver",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Ankara, Turkey",
    "images": [
      "https://images.pexels.com/photos/17156936/pexels-photo-17156936.jpeg", "https://images.pexels.com/photos/17156936/pexels-photo-17156936.jpeg"],
    "seller": {
      "name": "Antalya Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.6
    },
    "featured": true
  },
  {
    "id": "43",
    "brand": "Audi",
    "model": "SQ8",
    "year": 2021,
    "price": 76515,
    "mileage": 6393,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Blue",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Istanbul, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1607853202588-c9324f281b0b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1607853202588-c9324f281b0b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Antalya Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.7
    },
    "featured": true
  },
  {
    "id": "44",
    "brand": "Audi",
    "model": "S8",
    "year": 2021,
    "price": 250870,
    "mileage": 34665,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "White",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1555652736-e92021d28a10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1555652736-e92021d28a10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Izmir Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.5
    },
    "featured": true
  },
  {
    "id": "45",
    "brand": "Audi",
    "model": "RS3 Sedan",
    "year": 2024,
    "price": 76830,
    "mileage": 16657,
    "fuel": "Petrol",
    "transmission": "Automatic",
    "bodyType": "Coupe",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Ankara, Turkey",
    "images": [
      "https://images.unsplash.com/photo-1672400853441-5e00e8ce3a7b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1672400853441-5e00e8ce3a7b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    "seller": {
      "name": "Izmir Premium",
      "type": "Dealer",
      "verified": true,
      "rating": 4.9
    },
    "featured": false
  },
  {
    "id": "46",
    "brand": "Audi",
    "model": "Q8 e-tron",
    "year": 2022,
    "price": 283946,
    "mileage": 1322,
    "fuel": "Electric",
    "transmission": "Automatic",
    "bodyType": "SUV",
    "color": "Grey",
    "damage": "None",
    "owner": "1st Owner",
    "location": "Izmir, Turkey",
    "images": [
      "https://images.pexels.com/photos/28751639/pexels-photo-28751639.jpeg", "https://images.pexels.com/photos/28751639/pexels-photo-28751639.jpeg"],
    "seller": {
      "name": "Antalya Autos",
      "type": "Dealer",
      "verified": true,
      "rating": 4.9
    },
    "featured": false
  }
];

export const trendingBrands = [
  "Porsche", "Mercedes-Benz", "BMW", "Audi"
];

export const categories = [
  { name: "Sedan", icon: "Car" },
  { name: "SUV", icon: "CarFront" },
  { name: "Coupe", icon: "Code" }, // using code as placeholder for coupe icon
  { name: "Electric", icon: "Zap" },
  { name: "Commercial", icon: "Truck" },
  { name: "Hatchback", icon: "Car" }
];
