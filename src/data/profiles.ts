// src/data/articulosData.ts

export interface Profile {
  id: number
  name: string
  role: string
  company: string
  image: string
  skills: string[]
  bio: string
}
export const profiles: Profile[] = [
  {
    id: 1,
    name: "Product Designer 1",
    role: "Product Designer",
    company: "Meta",
    image: "/images/fondo_12.webp",
    skills: ["UX/UI", "Product Design", "Copywriting"],
    bio: "With 15+ years of experience in the dynamic IT industr...",
  },
  {
    id: 2,
    name: "Product Designer 2",
    role: "Product Designer",
    company: "Meta",
    image: "/images/fondo_12.webp",
    skills: ["UX/UI", "Product Design", "Copywriting"],
    bio: "With 15+ years of experience in the dynamic IT industr...",
  },
  {
    id: 3,
    name: "Product Designer 3",
    role: "Product Designer",
    company: "Meta",
    image: "/images/fondo_12.webp",
    skills: ["UX/UI", "Product Design", "Copywriting"],
    bio: "With 15+ years of experience in the dynamic IT industr...",
  },

  {
    id: 4,
    name: "Product Designer 4",
    role: "Product Designer",
    company: "Meta",
    image: "/images/fondo_12.webp",
    skills: ["UX/UI", "Product Design", "Copywriting"],
    bio: "With 15+ years of experience in the dynamic IT industr...",
  },
]

