import dynamic from "next/dynamic";
const Tablist = dynamic(() => import("./TabNav/Tablist"), { ssr: false });
import PageWithTabContent from "./PageWithTabsContent";

export default function PageWithTab(props) {
  const page = props.page;
  const pageName = page.title_en;

  return (
    <>
      <Tablist page={page} pageName={pageName} />
      <PageWithTabContent page={page} pageName={pageName} album={props.album} />
    </>
  );
}
