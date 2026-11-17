import SiteDocument from '../../../components/site-document';
export { metadata } from '../../../components/site-document';

export default function HebrewLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument language="he">{children}</SiteDocument>;
}
