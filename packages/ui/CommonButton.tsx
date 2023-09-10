import * as React from 'react'

export function CommonButton({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  )
}
