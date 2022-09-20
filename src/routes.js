import { Home } from 'views/Home';
import { Map } from 'views/Map';
import { Costs } from 'views/Costs';
import { Locations } from 'views/Locations';
import { City } from 'views/City';
import { Socials } from 'views/Socials';

export const ROUTES = [
  { // hero image with text in the middle?
    label: 'Home',
    path: '/',
    view: (props) => <Home {...props} />,
    exact: true,
  },
  { // iframe of my myMaps
    label: 'Map',
    path: '/map',
    view: (props) => <Map {...props} />,
  },
  { // chartjs stacked bar chart per location, ranked lowest to highest (use a sorter in the code)
    label: 'Costs',
    path: '/costs',
    view: (props) => <Costs {...props} />
  },
  { // list of locations and dates for places traveled thus far and link to specific location pages with more details
    // https://mui.com/material-ui/react-timeline/
    label: 'Locations',
    path: '/locations',
    view: (props) => <Locations {...props} />
  },
  { // each location with have cost breakdown, link to myMap with recs, link to youtube, link to serena's blog post, instagram dance, instagram post, dslr photos (google photos link)
    label: 'City',
    path: '/city/:city?',
    view: (props) => <City {...props} />,
  },
  { // external links to my photography instagram and youtube and serena's blog
    label: 'Socials',
    path: '/socials',
    view: (props) => <Socials {...props} />
  },
]