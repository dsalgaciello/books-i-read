export default function Header({ title }) {
  return (
  <>
    <h1 className="title">
      <a href={"/"}>
        <img src={"thebooksiread.png"} alt={title} title={title}/>
      </a>
    </h1>
  </>
  )
}
