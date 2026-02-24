export type Speaker = {
  slug: string
  name: string
  image: string
  sessionTime: string
  sessionRole: string | null
  shortBio: string
  whatToExpect: string
  status: "draft" | "published"
}

export const speakers: Speaker[] = [
  {
    slug: "francisco-cantu",
    name: "Francisco Cantú",
    image: "/SpeakersHeadshots/Francisco.png",
    sessionTime: "Thursday, April 2 • 7:30–8:30 PM",
    sessionRole: null,
    shortBio:
      "Former U.S. Border Patrol agent turned acclaimed author. His memoir The Line Becomes a River offers a rare insider's perspective on border enforcement, blending personal experience with profound moral reckoning. Cantú's work has appeared in The New York Times, Harper's, and The Guardian.",
    whatToExpect:
      "A raw, honest examination of what it means to enforce immigration policy on the ground, and the human cost of the border.",
    status: "published",
  },
  {
    slug: "tanya-golash-boza",
    name: "Dr. Tanya Golash-Boza",
    image: "/SpeakersHeadshots/Tanya.png",
    sessionTime: "Friday, April 3 • 1:00–2:00 PM",
    sessionRole: null,
    shortBio:
      "Professor of Sociology at UC Merced and leading scholar on deportation and immigration policy. Author of Deported: Immigrant Policing, Disposable Labor, and Global Capitalism and Race and Racisms: A Critical Approach. Dr. Golash-Boza has interviewed hundreds of deportees across three continents.",
    whatToExpect:
      "Data-driven insights into mass deportation's impact on families and communities, grounded in years of field research.",
    status: "published",
  },
  {
    slug: "laurie-vazquez-scolari",
    name: "Dr. Laurie Vázquez Scolari",
    image: "/SpeakersHeadshots/Laurie.png",
    sessionTime: "Friday, April 3 • 2:20–3:10 PM",
    sessionRole: null,
    shortBio:
      "Laurie Vázquez Scolari is a Latina higher-education speaker, leader and equity strategist whose personal journey from the lettuce fields of California's Salinas Valley to the college vice presidency shows her commitment to first-generation students and communities of color. Her career spans roles as Dean and Associate Dean of Counseling and Student Support at City College of San Francisco and leadership positions at UC Santa Cruz, the California Community College system, and the City and School District of San Francisco, where she has led cross-sector initiatives to improve college access and success for students of color.",
    whatToExpect:
      "Insights from a first-generation Latina leader on college access, equity, and student success for communities of color–including her work at Foothill College, City College of San Francisco, UC Santa Cruz, and her storytelling platform \"Hoop Talk with Laurie.\"",
    status: "published",
  },
  {
    slug: "lauren-blodgett",
    name: "Lauren Blodgett",
    image: "/SpeakersHeadshots/Lauren.png",
    sessionTime: "Friday, April 3 • 3:20–4:10 PM",
    sessionRole: null,
    shortBio:
      "Lauren Blodgett is an immigration attorney and founder of The Brave House in New York City, a nonprofit providing legal, holistic, and community support to young immigrant women and gender-expansive youth. Previously an Equal Justice Works Fellow and staff attorney at Safe Passage Project, she represented over 70 refugee children fleeing gender-based violence. A Forbes 30 Under 30 honoree, TEDx speaker, and Executive Director of The Brave House since 2018, her work addresses critical gaps in support for immigrant girls facing deportation and trauma.",
    whatToExpect:
      "Real-world legal advocacy for immigrant youth, holistic wraparound support models, and stories from representing refugee children and leading The Brave House–integrating legal aid with mentorship and shelter services.",
    status: "published",
  },
  {
    slug: "lola-adeyemo",
    name: "Dr. Lola Adeyemo",
    image: "/SpeakersHeadshots/Lola.png",
    sessionTime: "Friday, April 3 • 7:30–8:30 PM",
    sessionRole: "Keynote Speaker",
    shortBio:
      "Scholar, storyteller, and expert on immigrant identity and belonging. Dr. Adeyemo's research examines how immigrant communities build home in new lands while maintaining connections to their heritage. Her work bridges academic research with deeply personal narrative.",
    whatToExpect:
      "A powerful closing keynote on what \"home\" means when you carry it across borders–and how we can build a more welcoming America.",
    status: "published",
  },
]

export const publishedSpeakers = speakers.filter((s) => s.status === "published")

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return speakers.find((s) => s.slug === slug)
}
