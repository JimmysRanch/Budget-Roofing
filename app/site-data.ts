export type ServiceArea = {
  name: string;
  slug: string;
  group: string;
  context: string;
};

export const areaGroups = [
  {
    name: "San Antonio & Central",
    description: "Central neighborhoods, established communities, and the fast-growing northwest side.",
    areas: [
      ["San Antonio", "san-antonio"],
      ["Alamo Heights", "alamo-heights"],
      ["Stone Oak", "stone-oak"],
      ["Far West Side", "far-west-side"],
      ["Alamo Ranch", "alamo-ranch"],
      ["Helotes", "helotes"],
      ["Leon Valley", "leon-valley"],
      ["Shavano Park", "shavano-park"],
      ["Castle Hills", "castle-hills"],
      ["Olmos Park", "olmos-park"],
      ["Terrell Hills", "terrell-hills"],
      ["Hollywood Park", "hollywood-park"],
      ["Timberwood Park", "timberwood-park"],
      ["Leon Springs", "leon-springs"],
    ],
  },
  {
    name: "Hill Country & North",
    description: "Hill Country homes, acreage properties, and communities along the US-281 corridor.",
    areas: [
      ["Fair Oaks Ranch", "fair-oaks-ranch"],
      ["Boerne", "boerne"],
      ["Bulverde", "bulverde"],
      ["Spring Branch", "spring-branch"],
      ["Canyon Lake", "canyon-lake"],
      ["Garden Ridge", "garden-ridge"],
    ],
  },
  {
    name: "Northeast & I-35",
    description: "The growing communities between San Antonio, New Braunfels, and Seguin.",
    areas: [
      ["Live Oak", "live-oak"],
      ["Universal City", "universal-city"],
      ["Selma", "selma"],
      ["Schertz", "schertz"],
      ["Cibolo", "cibolo"],
      ["New Braunfels", "new-braunfels"],
      ["Seguin", "seguin"],
      ["Converse", "converse"],
    ],
  },
  {
    name: "South, East & West",
    description: "Small towns, rural properties, and growing communities beyond the metro core.",
    areas: [
      ["La Vernia", "la-vernia"],
      ["Floresville", "floresville"],
      ["Castroville", "castroville"],
      ["Lytle", "lytle"],
      ["Natalia", "natalia"],
      ["Devine", "devine"],
      ["Somerset", "somerset"],
    ],
  },
] as const;

export const serviceAreas: ServiceArea[] = areaGroups.flatMap((group) =>
  group.areas.map(([name, slug]) => ({
    name,
    slug,
    group: group.name,
    context: group.description,
  })),
);

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
