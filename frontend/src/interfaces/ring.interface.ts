export type Forjador = "Elfos" | "Anões" | "Homens" | "Sauron"

export interface Ring {
  id: string
  nome: string
  poder: string
  portador: string
  forjadoPor: Forjador
  imagem: string
}
