import { Map } from 'views/Map';
import { Costs } from 'views/Costs';
import { Locations } from 'views/Locations';
import { City } from 'views/City';
import { NotFound } from 'views/NotFound';

export const ROUTES = [
  { // hero image with text in the middle?
    label: 'Home',
    path: '/',
    View: (props) => <Locations {...props} />,
    exact: true,
  },
  { // iframe of my myMaps
    label: 'Map',
    path: '/map',
    View: (props) => <Map {...props} />,
  },
  { // chartjs stacked bar chart per location, ranked lowest to highest (use a sorter in the code)
    label: 'Costs',
    path: '/costs',
    View: (props) => <Costs {...props} />
  },
  {
    label: 'City',
    path: '/city',
    View: (props) => <City {...props} />,
    slug: ':cityId',
  },
  {
    label: 'Not Found',
    path: ':anyPage*/',
    View: () => <NotFound />
  }
]