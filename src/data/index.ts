import { Collection, NavigationItem, Product, FooterSection, SocialMedia } from '../types';

export const featuredProducts: Product[] = [
  {
    id: '1',
    title: 'Modern Desk Lamp',
    price: 89.00,
    compareAtPrice: 129.00,
    imageSrc: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hoverImageSrc: 'https://images.pexels.com/photos/172147/pexels-photo-172147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'sale',
    available: true,
  },
  {
    id: '2',
    title: 'Ceramic Planter',
    price: 42.00,
    imageSrc: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hoverImageSrc: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'new',
    available: true,
  },
  {
    id: '3',
    title: 'Wooden Side Table',
    price: 149.00,
    imageSrc: 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hoverImageSrc: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    available: true,
  },
  {
    id: '4',
    title: 'Minimalist Clock',
    price: 65.00,
    compareAtPrice: 85.00,
    imageSrc: 'https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hoverImageSrc: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'sale',
    available: true,
  },
];

export const collections: Collection[] = [
  {
    id: 'living-room',
    title: 'Living Room',
    description: 'Transform your living space with our modern collection.',
    imageSrc: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: featuredProducts,
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    description: 'Elevate your cooking experience with our premium kitchen essentials.',
    imageSrc: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: featuredProducts,
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: 'Create a peaceful sanctuary with our bedroom collection.',
    imageSrc: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    products: featuredProducts,
  },
];

export const navigationItems: NavigationItem[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Collections',
    url: '/collections',
    megaMenu: true,
    featured: {
      title: 'New Arrivals',
      imageSrc: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: '/collections/new-arrivals',
    },
    children: [
      { title: 'Living Room', url: '/collections/living-room' },
      { title: 'Kitchen', url: '/collections/kitchen' },
      { title: 'Bedroom', url: '/collections/bedroom' },
      { title: 'Office', url: '/collections/office' },
      { title: 'Outdoor', url: '/collections/outdoor' },
    ],
  },
  {
    title: 'Products',
    url: '/products',
    children: [
      { title: 'Furniture', url: '/collections/furniture' },
      { title: 'Lighting', url: '/collections/lighting' },
      { title: 'Decor', url: '/collections/decor' },
      { title: 'Kitchenware', url: '/collections/kitchenware' },
    ],
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Shop',
    links: [
      { title: 'All Products', url: '/collections/all' },
      { title: 'New Arrivals', url: '/collections/new-arrivals' },
      { title: 'Best Sellers', url: '/collections/best-sellers' },
      { title: 'Sale', url: '/collections/sale' },
    ],
  },
  {
    title: 'About',
    links: [
      { title: 'Our Story', url: '/pages/our-story' },
      { title: 'Sustainability', url: '/pages/sustainability' },
      { title: 'Blog', url: '/blogs/news' },
      { title: 'Press', url: '/pages/press' },
    ],
  },
  {
    title: 'Customer Service',
    links: [
      { title: 'Contact Us', url: '/pages/contact' },
      { title: 'Shipping & Returns', url: '/pages/shipping-returns' },
      { title: 'FAQ', url: '/pages/faq' },
      { title: 'Privacy Policy', url: '/pages/privacy-policy' },
    ],
  },
];

export const socialMedia: SocialMedia[] = [
  { platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { platform: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { platform: 'Pinterest', url: 'https://pinterest.com', icon: 'pin' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];