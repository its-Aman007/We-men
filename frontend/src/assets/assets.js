import logo from './logo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=85',
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85',
    contact_img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=85',
    razorpay_logo,
    stripe_logo,
    cross_icon
}

const image = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`

export const products = [
    {
        _id: 'sweet001', name: 'Pistachio Rose Mithai Box',
        description: 'Soft milk fudge scented with rose and finished with roasted pistachios. A fragrant celebration sweet for sharing.',
        price: 18, image: [image('photo-1601050690597-df0568f70950')], category: 'Sweets', subCategory: 'Indian Sweets',
        sizes: ['250 g', '500 g', '1 kg'], date: 1716634345448, bestSeller: true
    },
    {
        _id: 'sweet002', name: 'Gulab Jamun Treats',
        description: 'Golden, syrup-soaked dumplings with a delicate cardamom finish, prepared fresh for dessert tables and gifting.',
        price: 12, image: [image('photo-1666190094763-7a2a9e8c9f72')], category: 'Sweets', subCategory: 'Indian Sweets',
        sizes: ['6 pieces', '12 pieces', '24 pieces'], date: 1716621345448, bestSeller: true
    },
    {
        _id: 'sweet003', name: 'Salted Caramel Brownies',
        description: 'Fudgy chocolate brownies topped with sea salt and ribbons of buttery caramel for a rich afternoon bite.',
        price: 16, image: [image('photo-1564355808539-22fda35bed7e')], category: 'Sweets', subCategory: 'Bakery',
        sizes: ['4 pieces', '8 pieces', '12 pieces'], date: 1716234545448, bestSeller: false
    },
    {
        _id: 'sweet004', name: 'Strawberry Cream Cake',
        description: 'Light vanilla sponge layered with whipped cream and bright strawberry preserve, finished with fresh berries.',
        price: 28, image: [image('photo-1578985545062-69928b1d9587')], category: 'Sweets', subCategory: 'Cakes',
        sizes: ['6 inch', '8 inch', '10 inch'], date: 1716622345448, bestSeller: true
    },
    {
        _id: 'sweet005', name: 'Chocolate Chip Cookies',
        description: 'Crisp-edged, soft-centered cookies packed with dark chocolate chips and baked in small batches.',
        price: 10, image: [image('photo-1499636136210-6f4ee915583e')], category: 'Sweets', subCategory: 'Bakery',
        sizes: ['6 pieces', '12 pieces', '24 pieces'], date: 1716623423448, bestSeller: true
    },
    {
        _id: 'food001', name: 'Truffle Mushroom Pasta',
        description: 'Silky pasta tossed with roasted mushrooms, parmesan, herbs, and a hint of earthy truffle oil.',
        price: 22, image: [image('photo-1473093295043-cdd812d0e601')], category: 'Food', subCategory: 'Mains',
        sizes: ['Regular', 'Large'], date: 1716621542448, bestSeller: true
    },
    {
        _id: 'food002', name: 'Garden Fresh Pizza',
        description: 'A hand-stretched crust layered with tomato sauce, mozzarella, roasted peppers, olives, and basil.',
        price: 20, image: [image('photo-1574071318508-1cdbab80d002')], category: 'Food', subCategory: 'Mains',
        sizes: ['10 inch', '12 inch', '14 inch'], date: 1716621235448, bestSeller: true
    },
    {
        _id: 'food003', name: 'Avocado Toast Brunch',
        description: 'Sourdough toast with smashed avocado, cherry tomatoes, chili flakes, and a squeeze of lemon.',
        price: 14, image: [image('photo-1541519227354-08fa5d50c44d')], category: 'Food', subCategory: 'Breakfast',
        sizes: ['1 serving', '2 servings'], date: 1716622235448, bestSeller: false
    },
    {
        _id: 'food004', name: 'Crispy Chicken Burger',
        description: 'Crunchy chicken, fresh lettuce, pickles, and house sauce tucked into a toasted brioche bun.',
        price: 17, image: [image('photo-1568901346375-23c9450c58cd')], category: 'Food', subCategory: 'Mains',
        sizes: ['Single', 'Combo'], date: 1716623345448, bestSeller: true
    },
    {
        _id: 'food005', name: 'Roasted Rainbow Salad',
        description: 'A colorful bowl of seasonal greens, roasted vegetables, feta, seeds, and citrus herb dressing.',
        price: 15, image: [image('photo-1512621776951-a57141f2eefd')], category: 'Food', subCategory: 'Healthy Bites',
        sizes: ['Regular', 'Large'], date: 1716624445448, bestSeller: false
    },
    {
        _id: 'drink001', name: 'Mango Lassi',
        description: 'A chilled, creamy yogurt drink blended with ripe mango and a touch of cardamom.',
        price: 8, image: [image('photo-1577805947697-89e18249d767')], category: 'Drinks', subCategory: 'Cold Drinks',
        sizes: ['300 ml', '500 ml', '1 litre'], date: 1716625545448, bestSeller: true
    },
    {
        _id: 'drink002', name: 'Iced Berry Lemonade',
        description: 'Fresh lemon juice shaken with mixed berries, a little sweetness, and plenty of ice.',
        price: 9, image: [image('photo-1513558161293-cdaf765ed2fd')], category: 'Drinks', subCategory: 'Cold Drinks',
        sizes: ['300 ml', '500 ml', '1 litre'], date: 1716626645448, bestSeller: false
    },
    {
        _id: 'snack001', name: 'Masala Snack Mix',
        description: 'A crunchy blend of roasted nuts, chickpea noodles, lentils, and warm Indian spices.',
        price: 11, image: [image('photo-1621939514649-280e2aa4a2a7')], category: 'Snacks', subCategory: 'Savory Snacks',
        sizes: ['250 g', '500 g', '1 kg'], date: 1716627745448, bestSeller: false
    },
    {
        _id: 'snack002', name: 'Cinnamon Granola Jar',
        description: 'Oven-toasted oats with almonds, pumpkin seeds, cinnamon, and golden honey for a wholesome crunch.',
        price: 13, image: [image('photo-1517093728432-a0440f8d45af')], category: 'Snacks', subCategory: 'Healthy Snacks',
        sizes: ['300 g', '600 g'], date: 1716628845448, bestSeller: false
    }
]

export default assets;
