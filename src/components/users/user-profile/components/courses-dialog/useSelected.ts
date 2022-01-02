import { useState } from 'react'

export const useSelected = () => {
  const [selected, setSelected] = useState<Array<string>>([])

  const handleSelect = (courseId: string) => () => {
    if (selected.includes(courseId)) {
      setSelected(prev => prev.filter(id => id !== courseId))
    } else {
      setSelected(prev => [...prev, courseId])
    }
  }

  const resetSelected = () => setSelected([])

  return { selected, handleSelect, resetSelected }
}
