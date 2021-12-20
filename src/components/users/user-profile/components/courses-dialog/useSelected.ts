import { useState } from 'react'

type SelectedCollection = Collection<string, string>
export const useSelected = () => {
  const [selected, setSelected] = useState<SelectedCollection>({})

  const handleSelect = (id: string, planId: string) => () => {
    if (selected[id] === planId) {
      setSelected(prev => {
        delete prev[id]
        return { ...prev }
      })
    } else {
      setSelected(prev => ({ ...prev, [id]: planId }))
    }
  }

  const removeSelect = (id: string) => () => {
    if (id in selected) {
      setSelected(prev => {
        delete prev[id]
        return { ...prev }
      })
    }
  }

  const resetSelected = () => setSelected({})

  return { selected, handleSelect, removeSelect, resetSelected }
}
