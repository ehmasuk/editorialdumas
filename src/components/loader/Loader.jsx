import './loader.css'

function Loader() {
    window.scrollTo(0,0)
  return (
    <div className="loader-wraper">
        <div className="spinner"></div>
    </div>
  )
}

export default Loader