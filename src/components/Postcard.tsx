

type Post = {
    key:number
    title:string,
    body:string
}
const Postcard = ({title,body}:Post) => {
return (
    <div>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
}

export default Postcard