import CareersPage from '../../../components/careers-page';
import { careersMetadata } from '../../../lib/careers';

export const metadata = careersMetadata('en');

export default function Careers() {
  return <CareersPage locale="en" />;
}
