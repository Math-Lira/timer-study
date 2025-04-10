import { Outlet } from 'react-router-dom'
import { GlobalHeader } from '../../components/GlobalHeader'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <GlobalHeader />
      <Outlet />
    </LayoutContainer>
  )
}
