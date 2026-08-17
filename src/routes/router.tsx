import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import { HomePage } from '@/pages/HomePage'
import { SearchResultsPage } from '@/pages/SearchResultsPage'
import { HotelDetailsPage } from '@/pages/HotelDetailsPage'
import { CheckoutPage } from '@/pages/CheckoutPage'
import { ConfirmationPage } from '@/pages/ConfirmationPage'
import { ROUTES } from '@/lib/constants'

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'search', element: <SearchResultsPage /> },
      { path: 'hotels/:hotelId', element: <HotelDetailsPage /> },
      { path: 'hotels/:hotelId/checkout', element: <CheckoutPage /> },
      { path: 'bookings/:bookingId/confirmation', element: <ConfirmationPage /> },
    ],
  },
])
