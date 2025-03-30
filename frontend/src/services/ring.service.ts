import api from "../lib/axios"
import { Ring } from "../interfaces/ring.interface"

export const getRings = async (): Promise<Ring[]> => {
  const res = await api.get("/rings")
  return res.data
}

export const createRing = (data: Partial<Ring>) => api.post("/rings", data)

export const updateRing = (id: string, data: Partial<Ring>) =>
  api.patch(`/rings/${id}`, data)

export const deleteRing = (id: string) => api.delete(`/rings/${id}`)
