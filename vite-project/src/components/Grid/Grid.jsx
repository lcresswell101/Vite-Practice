export default function Grid({ children, gap = "4", gridCols = "2", gridRows = "3", classes = ""}) {
  return (
    <div className={`grid gap-${gap} grid-cols-${gridCols} grid-rows-${gridRows} ${classes}`}>
      {children}
    </div>
  )
}