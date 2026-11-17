import SiteDocument from '../../components/site-document';
export { metadata } from '../../components/site-document';

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument language="en">{children}</SiteDocument>;
}
