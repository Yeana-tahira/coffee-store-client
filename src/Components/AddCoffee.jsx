import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {

const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch('https://coffee-store-server-orpin-six.vercel.app/coffees', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
          console.log('Coffee added successfully')

          Swal.fire({
              title: "Coffee added successfully!",
              icon: "success",
              draggable: true
       });
        } 
    })
}

  return (
    <div className=" p-24">
      <div className=" p-12 text-center space-y-4">
        <h1 className=" text-6xl">Add Coffee</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          animi! Aliquid ea, ipsum commodi veritatis ut pariatur delectus
          beatae, eius, nesciunt sit mollitia aut rem at ratione adipisci
          numquam eum facilis nam officia asperiores eaque aspernatur sapiente
          velit hic. In suscipit maiores placeat eum iusto nulla minus aut ab
          atque! Quo ducimus officiis culpa nihil recusandae ut eos id
          asperiores!
        </p>
      </div>

      <form onSubmit={handleAddCoffee}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">            
            <label className="label">Name</label>
            <input type="text" name="name" className="input w-full" placeholder="name" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">            
            <label className="label">Quantity</label>
            <input type="text" name="quantity" className="input w-full" placeholder="Quantity" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">            
            <label className="label">Supplier</label>
            <input type="text" name="supplier" className="input w-full" placeholder="Supplier" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">            
            <label className="label">Taste</label>
            <input type="text" name="taste" className="input w-full" placeholder="Taste" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">            
            <label className="label">Price</label>
            <input type="text" name="price" className="input w-full" placeholder="Price per cup" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">            
            <label className="label">Details</label>
            <input type="text" name="details" className="input w-full" placeholder="Details" />
          </fieldset>
        </div>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">            
            <label className="label">Photo</label>
            <input type="text" name="photo" className="input w-full" placeholder="Photo URL" />
          </fieldset>

          <input type="submit" className=" btn w-full" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
