import React from 'react'

const TableElement = ({a,b,c,d}) => {
  return (
    <tr>
        <td>{a}</td>
        <td>{b}</td>
        <td>{c}</td>
        <td className="text-center">{d}</td>
    </tr>
  )
}

export default TableElement