export default function Home({students}){
    return(
        <div>
            <div class="container text-center">
  <div className="row">
    {students.map((detail)=>
     <div className="col-md-3">
     <div   className="card">
    <img src={detail.image}
   className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">
        {detail.name}</h5>
        <ul class="list-group list-group-flush">
  <li className="list-group-item">Age: {detail.age}</li>
  <li className="list-group-item">course: {detail.course}</li>

</ul>

   </div>
 </div>
     </div>



    )}


  </div>
</div>


        </div>
    )
}