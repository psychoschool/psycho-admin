import { useState } from 'react'

type SelectedCollection = Collection<string, string>
export const useSelected = () => {
  const [selected, setSelected] = useState<SelectedCollection>({})

  const handleSelect = (courseId: string, planId: string) => () => {
    if (selected[courseId] === planId) {
      setSelected(prev => {
        delete prev[courseId]
        return { ...prev }
      })
    } else {
      setSelected(prev => ({ ...prev, [courseId]: planId }))
    }
  }

  const removeSelect = (courseId: string) => () => {
    if (courseId in selected) {
      setSelected(prev => {
        delete prev[courseId]
        return { ...prev }
      })
    }
  }

  const resetSelected = () => setSelected({})

  return { selected, handleSelect, removeSelect, resetSelected }
}
