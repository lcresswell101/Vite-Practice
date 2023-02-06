export default function GridItem({ colSpan = "1", rowSpan = "1", children }) {
  return (
    <div className={`col-span-${colSpan} row-span-${rowSpan}`}>
      {children}
    </div>
  )
}