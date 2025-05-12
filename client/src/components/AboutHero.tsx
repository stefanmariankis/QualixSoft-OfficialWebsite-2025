import PageHero from "./PageHero";

export default function AboutHero() {
  return (
    <PageHero
      title="Cine suntem noi"
      description="Ne concentrăm pe aducerea obiectivelor tale în prim plan și pe realizarea lor. Cu noi, alegi un partener dedicat succesului tău."
      breadcrumbs={{
        home: "Despre Noi",
        current: "Despre QualixSoft"
      }}
    />
  );
}