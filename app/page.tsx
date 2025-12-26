"use client"

import { useState } from "react"

type Tarefa = {
  texto: string
  concluida: boolean 
}

export default function Home () {

const [tarefas, setTarefas] = useState<Tarefa[]>([])
const [texto, setTexto] = useState("")

function clicouNoBotao() {
  if (texto.trim() === "") return 

  setTarefas([...tarefas,
    { texto: texto, concluida: false }
  ])
  setTexto("")
}

function alternarTarefa(index: number) {
  const novasTarefas = [...tarefas]
  novasTarefas[index].concluida = !novasTarefas[index].concluida
  setTarefas(novasTarefas)
}

function removerTarefa(index: number) {
  const novasTarefas = tarefas.filter ((_, i) => i !== index)
  setTarefas(novasTarefas)
}

return (
<div className="p-6 max-w-md mx-auto bg-blue-300">
  <h1 className="text-2xl font-bold mb-4">
    Lista de tarefas
  </h1>
  <input className="border px-3 bg-white"
    value={texto}
    onChange={(e) => setTexto(e.target.value)}
  />
  <button className="border px-2 py-1 mb-3 bg-purple-400"  
    onClick={clicouNoBotao}>
      Adicionar
  </button>

  {tarefas.length === 0 && (
    <p className="text-gray-500">
      Nenhuma tarefa foi adicionada ainda
    </p>
  )}

  <ul>
    {tarefas.map((tarefa, index) => (
      <li key={index} className="flex items-center gap-2">
        <input type="checkbox" />
        <span
          className={tarefa.concluida ? "line-through text-gray-500" : ""}
        >
          {tarefa.texto}
        </span>
      <button
        className="text-red-500 ml-auto"
        onClick={() => removerTarefa(index)}
      > 
        ❌
      </button>
      </li>
    ))}
  </ul>
</div>
)
}

