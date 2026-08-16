export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const PHONE_NUMBER = '+917067588181';
export const PHONE_DISPLAY = '+91 70675 88181';
export const WHATSAPP_URL = `https://wa.me/917067588181`;
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/gtB5faz6youdwoeUA';
export const INSTAGRAM_URL = 'https://www.instagram.com/khalifah.bhopal';
export const INSTAGRAM_HANDLE = '@khalifah.bhopal';
export const OPENING_HOURS = '4:00 PM — 12:00 AM';

export const menuCategories: MenuCategory[] = [
  {
    id: 'fries-snacks',
    name: 'FRIES',
    items: [
      { name: 'Chicken Lollipop', price: 90, description: 'Juicy chicken lollipops, crispy fried to perfection' },
      { name: 'Chicken Stripes', price: 90, description: 'Crispy golden chicken strips with a crunchy coating' },
      { name: 'Chicken Nuggets', price: 110, description: 'Tender chicken nuggets, perfectly seasoned and fried' },
    ],
  },
  {
    id: 'fries-x-chicken',
    name: 'FRIES X CHICKEN',
    items: [
      { name: 'Cheesy Fries X Hot Chicken', price: 160, description: 'Loaded cheesy fries topped with spicy hot chicken' },
      { name: 'Fries X Hot Chicken', price: 130, description: 'Crispy fries paired with fiery hot chicken' },
    ],
  },
  {
    id: 'chicken-burgers',
    name: 'CHICKEN BURGERS',
    items: [
      { name: 'Classic Chicken', price: 85, description: 'Classic crispy chicken burger with fresh toppings' },
      { name: 'Chicken Cheese', price: 100, description: 'Chicken burger loaded with melted cheese' },
      { name: 'Double Cheese Single Chicken', price: 110, description: 'Double cheese, single crispy chicken patty' },
      { name: 'Double Chicken Single Cheese', price: 140, description: 'Two crispy chicken patties with cheese' },
      { name: 'Double Chicken', price: 130, description: 'Double stacked crispy chicken burger' },
      { name: 'Double Chicken Double Cheese', price: 150, description: 'The ultimate — double chicken, double cheese' },
    ],
  },
  {
    id: 'blaggers',
    name: 'BLAGGERS',
    items: [
      { name: 'Classic Blagger', price: 110, description: 'Our signature blagger with premium sauce' },
      { name: 'Cheese Blagger', price: 120, description: 'Blagger loaded with melted cheese' },
      { name: 'Double Cheese Single Chicken', price: 130, description: 'Double cheese blagger with single chicken' },
      { name: 'Double Chicken Single Cheese', price: 160, description: 'Double chicken blagger with cheese' },
      { name: 'Double Chicken', price: 150, description: 'Double stacked chicken blagger' },
      { name: 'Double Chicken Double Cheese', price: 170, description: 'The loaded blagger — double everything' },
    ],
  },
  {
    id: 'dips',
    name: 'DIPS',
    items: [
      { name: 'Jalapeno Dip', price: 20, description: 'Spicy jalapeno dipping sauce' },
      { name: 'Cheese Dip', price: 20, description: 'Rich and creamy cheese dip' },
    ],
  },
  {
    id: 'french-fries',
    name: 'FRENCH FRIES',
    items: [
      { name: 'Salted', price: 60, description: 'Classic salted golden french fries' },
      { name: 'Peri Peri', price: 70, description: 'French fries with fiery peri peri seasoning' },
      { name: 'Cheesy Fries', price: 70, description: 'Fries smothered in melted cheese' },
      { name: 'Mozzy Fries', price: 100, description: 'Fries loaded with stretchy mozzarella' },
    ],
  },
  {
    id: 'veg-burgers',
    name: 'VEG BURGERS',
    items: [
      { name: 'Aloo Tikki', price: 65, description: 'Crispy aloo tikki patty burger' },
      { name: 'Cheese Aloo Tikki', price: 80, description: 'Aloo tikki burger with melted cheese' },
    ],
  },
  {
    id: 'pizza',
    name: 'PIZZA',
    items: [
      { name: 'Chicken Pizza', price: 160, description: 'Loaded chicken pizza with premium toppings' },
      { name: 'Veggies Pizza', price: 140, description: 'Fresh vegetable pizza with mozzarella' },
      { name: 'Margherita Pizza', price: 140, description: 'Classic margherita with fresh basil' },
      { name: 'Black Pizza Bomber', price: 110, description: 'Our signature black crust pizza' },
    ],
  },
];

export interface SignatureProduct {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const signatureProducts: SignatureProduct[] = [
  {
    name: 'Chicken Burger',
    description: 'Crispy chicken, melted cheese, fresh toppings. The classic done right.',
    price: 85,
    image: '/images/food/chicken-burger.png',
  },
  {
    name: 'Blagger',
    description: 'Our signature loaded blagger. Bigger, bolder, better.',
    price: 110,
    image: '/images/food/blagger.png',
  },
  {
    name: 'Chicken Broast',
    description: 'Golden crispy broast. Juicy inside, crunchy outside.',
    price: 160,
    image: '/images/food/chicken-broast.png',
  },
  {
    name: 'French Fries',
    description: 'Loaded cheesy fries with our secret seasoning.',
    price: 60,
    image: '/images/food/french-fries.png',
  },
  {
    name: 'Pizza',
    description: 'Stretchy cheese, premium toppings, fresh from the oven.',
    price: 140,
    image: '/images/food/pizza.png',
  },
];
