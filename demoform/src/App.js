import logo from './logo.svg';
import './App.css';
import{useState} from 'react'

function App() {

  const[formData,setFormData] = useState({firstName:"",lastName:"",email:"",country:"India",streetAdd:"",city:"",state:"",postalCode:"",
          comments:false,candidates:false,offers:false,pushNotification:""})

  function changeHandler(event){
      const{name,value,checked,type} = event.target;
      setFormData((prev) => ({...prev,[name]:type ==="checkbox" ? checked : value}))
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing the value of form data");
    console.log(formData);
  }

  return (
    <div className='flex flex-col item-center mt-2'>
      <form onSubmit={submitHandler}>

        <label htmlFor='firstName'>First Name</label>

        <br></br>
        <input 
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Ayush'
        value={formData.firstName}
        onChange={changeHandler}
        className='outline rounded-md'/>

        <br></br>

         <label htmlFor='lastName'>Last Name</label>

        <br></br>
        <input 
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Dwivedi'
        value={formData.lastName}
        onChange={changeHandler}
        className='outline rounded-md'/>

        <br></br>

         <label htmlFor='email'>Email Address</label>

        <br></br>
        <input 
        type='email'
        name='email'
        id='email'
        placeholder='ayush@gmail.com'
        value={formData.email}
        onChange={changeHandler}
        className='outline rounded-md'/>

        <br/>

        <label htmlFor='country'>Country</label>
        <br/>

        <select 
         id='country'
         name='country'
         value={formData.country}
         onChange={changeHandler}
         className='outline'>

          <option>India</option>
           <option>United States</option>
            <option>Canada</option>
             <option>Mexico</option>
        </select>

        <br></br>

<label htmlFor='streetAdd'>Street Address</label>

<br></br>
<input 
type='text'
name='streetAdd'
id='streetAdd'
placeholder='129-B'
value={formData.streetAdd}
onChange={changeHandler}
className='outline rounded-md'/>

<br></br>

<label htmlFor='city'>City</label>

<br></br>
<input 
type='text'
name='city'
id='city'
placeholder='Delhi'
value={formData.city}
onChange={changeHandler}
className='outline rounded-md'/>

<br></br>

<label htmlFor='state'>State</label>

<br></br>
<input 
type='text'
name='state'
id='state'
placeholder='Delhi'
value={formData.state}
onChange={changeHandler}
className='outline rounded-md'/>

<br></br>

<label htmlFor='postalCode'>Postal Code</label>

<br></br>
<input 
type='text'
name='postalCode'
id='postalCode'
placeholder='201206'
value={formData.postalCode}
onChange={changeHandler}
className='outline rounded-md'/>

<br/>

<fieldset>

  <legend>By Email</legend>

 <div className='flex'>

 <input 
  id='comments'
  name='comments'
  checked={formData.comments}
  type='checkbox'
  onChange={changeHandler}/>

    <div>
      <label htmlFor='comments'>Comments</label>
      <p>Get notified when someone posts a comment on a position</p>
    </div>
 </div>

 <div className='flex'>

 <input 
  id='candidates'
  name='candidates'
  checked={formData.candidates}
  type='checkbox'
  onChange={changeHandler}/>

    <div>
      <label htmlFor='candidates'>Candidates</label>
      <p>Get notified when a candidate applies for a job</p>
    </div>
 </div>

 <div className='flex'>

 <input 
  id='offers'
  name='offers'
  checked={formData.offers}
  type='checkbox'
  onChange={changeHandler}/>

    <div>
      <label htmlFor='offers'>Offers</label>
      <p>Get notified when a candidate accepts or rejects an offer</p>
    </div>
 </div>


</fieldset>

<fieldset>

  <legend>Push Notifications</legend>
  <p>
    These are delivered via SMS to your mobile phone.
  </p>
<br/>
  <input 
  type='radio'
  id='pushEverything'
  name='pushNotification'
  value="Everything"
  onChange={changeHandler}
  ></input>

  <label htmlFor='pushEverything'>Everything</label>
<br/>
  <input 
  type='radio'
  id='pushEmail'
  name='pushNotification'
  value="Same as Email"
  onChange={changeHandler}
  ></input>

  <label htmlFor='pushEmail'>Same as email</label>

<br/>
  <input 
  type='radio'
  id='pushNothing'
  name='pushNotification'
  value="No Push Notification"
  onChange={changeHandler}
  ></input>

  <label htmlFor='pushNothing'>No Push Notifications </label>
</fieldset>


<button className='bg-blue-500 text-white font-bold rounded-sm py-2'>Save</button>

      </form>
    </div>
  );
}

export default App;
