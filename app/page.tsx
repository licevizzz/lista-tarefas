"use client"

import { useState } from "react"

export default function Home () {

const [tarefas, setTarefas] = useState<string[]>([])
const [texto, setTexto] = useState("")

function clicouNoBotao() {
  if (texto.trim() === "") return 

  setTarefas([...tarefas, texto])
  setTexto("")
}

return (
<div className="p-6 max-w-md mx-auto bg-blue-300">
  <h1 className="text-2xl font-bold mb-4">
    Lista de tarefas
  </h1>
  <input className="border px-3 "
    value={texto}
    onChange={(e) => setTexto(e.target.value)}
  />
  <button className="border px-3 py-1 bg-purple-400"  onClick={clicouNoBotao}>
    Adicionar
  </button>

  {tarefas.length === 0 && (
    <p className="text-gray-500">
      Nenhuma tarefa foi adicionada ainda
    </p>
  )}

  <ul>
    {tarefas.map((tarefa, index) => (
      <li key={index}>{tarefa}</li>
    ))}
  </ul>
</div>
)
}

