// DEFAULT PAGES
import Contact from './default/Contact';
import Details from './default/Details';
import Landing from './default/Landing';
import News from './default/News';
import StockBrowse from './default/Browse/components/StockBrowse';
// AUTH PAGES
import AddInvestments from './authenticatedPages/AddInvestment';
import Profile from './authenticatedPages/Profile';
import UpdateInvestments from './authenticatedPages/UpdateInvestment';

// DEFAULT PAGES
export const defaultPages = [
  {
    title: 'Contact',
    path: '/contact',
    element: <Contact />,
    showDefault: true,
  },
  {
    title: 'Details',
    path: '/details/:symbol',
    element: <Details />,
    showDefault: true,
  },
  {
    title: 'Landing',
    path: '/',
    element: <Landing />,
    showDefault: true,
  },
  {
    title: 'News',
    path: '/news',
    element: <News />,
    showDefault: true,
  },
  {
    title: 'Stock Browse',
    path: '/browse/stock',
    element: <StockBrowse />,
    showDefault: true,
  },
];

// AUTH PAGES
export const authPages = [
  {
    title: 'Add',
    path: '/add',
    element: <AddInvestments />,
    showDefault: false,
  },
  {
    title: 'Profile',
    path: '/profile',
    element: <Profile />,
    showDefault: false,
  },
  {
    title: 'Update Crypto',
    path: '/updateInvestment/:asset/:symbol/:quantity',
    element: <UpdateInvestments />,
    showDefault: false,
  },
];

// ERROR HANDLER
const errorhandler = {
  title: 'Not Found',
  path: '*',
  element: <h1>404 not found</h1>,
  showDefault: true,
};

const pagesData = [...defaultPages, ...authPages, errorhandler];

export default pagesData;
