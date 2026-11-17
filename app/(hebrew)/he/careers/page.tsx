import CareersPage from '../../../../components/careers-page';
import { careersMetadata } from '../../../../lib/careers';

export const metadata = careersMetadata('he');

export default function HebrewCareers() {
  return <CareersPage locale="he" />;
}
