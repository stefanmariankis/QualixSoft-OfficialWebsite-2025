import PageHero from "./PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      title="How we can help you"
      description="Lorem ipsum dolor sit amet consectetur. Proin ut ultricies eget eget diam. Sed pellentesque vel elementum augue lacus diam feugiat libero dolor. Velit gravidas."
      breadcrumbs={{
        home: "Homepage",
        current: "Services"
      }}
    />
  );
}
