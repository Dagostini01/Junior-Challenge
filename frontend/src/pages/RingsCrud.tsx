import { useEffect, useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Ring } from "../interfaces/ring.interface"
import { createRing, deleteRing, getRings, updateRing } from "../services/ring.service"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const forjadores = ["Elfos", "Anões", "Homens", "Sauron"]

export default function RingsCrud() {
  const [rings, setRings] = useState<Ring[]>([])
  const [form, setForm] = useState<Partial<Ring>>({})
  const [editId, setEditId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const fetchRings = async () => {
    const data = await getRings()
    setRings(data)
  }

  useEffect(() => {
    fetchRings()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any
    if (name === "imagem" && files?.length) {
      const reader = new FileReader()
      reader.onload = () => {
        setForm({ ...form, imagem: reader.result as string })
      }
      reader.readAsDataURL(files[0])
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    try {
      if (editId) {
        await updateRing(editId, form)
        setSuccess("Anel atualizado com sucesso!")
      } else {
        await createRing(form)
        setSuccess("Anel criado com sucesso!")
      }
      setForm({})
      setEditId(null)
      fetchRings()
    } catch (err: any) {
      const message = err?.response?.data?.message || "Erro ao salvar anel."
      setError(message)
    }
  }

  const handleEdit = (ring: Ring) => {
    setForm(ring)
    setEditId(ring.id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = async (id: string) => {
    const confirmar = window.confirm("Tem certeza que deseja apagar este anel?")
    if (!confirmar) return
    await deleteRing(id)
    fetchRings()
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Gerenciar Anéis do Poder</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow mb-8 border"
      >
        <div>
          <Label>Nome</Label>
          <Input name="nome" value={form.nome || ""} onChange={handleChange} required />
        </div>
        <div>
          <Label>Poder</Label>
          <Input name="poder" value={form.poder || ""} onChange={handleChange} required />
        </div>
        <div>
          <Label>Portador</Label>
          <Input name="portador" value={form.portador || ""} onChange={handleChange} required />
        </div>
        <div>
          <Label>Forjado Por</Label>
          <select
            name="forjadoPor"
            className="w-full border rounded px-2 py-2"
            value={form.forjadoPor || ""}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            {forjadores.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <Label>Imagem</Label>
          <Input type="file" name="imagem" accept="image/*" onChange={handleChange} />
        </div>
        {error && (
          <div className="md:col-span-2 text-red-600 text-sm text-center font-medium">
            {error}
          </div>
        )}
        {success && (
          <div className="md:col-span-2 text-green-600 text-sm text-center font-medium">
            {success}
          </div>
        )}
        <div className="md:col-span-2 text-center">
          <Button type="submit" className="w-full">
            {editId ? "Atualizar Anel" : "Criar Anel"}
          </Button>
        </div>
      </form>

      <Slider {...sliderSettings}>
        {rings.map((ring) => (
          <div
            key={ring.id}
            className="p-4"
          >
            <div className="rounded-xl border shadow p-4 flex flex-col items-center bg-white">
              <img
                src={ring.imagem}
                alt={ring.nome}
                className="w-[200px] h-[200px] object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold text-center mb-1">{ring.nome}</h2>
              <p className="text-sm text-center"><strong>Poder:</strong> {ring.poder}</p>
              <p className="text-sm text-center"><strong>Portador:</strong> {ring.portador}</p>
              <p className="text-sm text-center"><strong>Forjado por:</strong> {ring.forjadoPor}</p>
              <div className="flex gap-2 mt-4">
                <Button variant="destructive" onClick={() => handleEdit(ring)}>Editar</Button>
                <Button variant="destructive" onClick={() => handleDelete(ring.id)}>Deletar</Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
