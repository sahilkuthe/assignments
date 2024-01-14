
import './App.css'



function App() {

  const cardProps = {
    name: "Sahil Kuthe",
    description: "Average 19 year old programmer and asthetics chaser",
    interests: ['React', 'JavaScript', 'Web Development'],
    linkedin: 'https://www.linkedin.com/in/sahil-kuthe-0068071b9/',
    twitter: 'https://twitter.com/sahilkuthe04',
    
  };

  return (
    <>
    <BusinessCard {...cardProps} ></BusinessCard>
      
    </>
  )
}


function BusinessCard(props){
  return (
    <>
      <div className='card'>
        <h1 className='name'>{props.name}</h1>
        <h3 className='description'>{props.description}</h3>
        <h2 className='interests'>Interests</h2>
        <p>
          {props.interests.map((interest) =>(
            <li className='interestItem'>{interest}</li>
          ))}
        </p>

        <div className='socialLinks'>
          <a className='link' href={props.linkedin} style={{className: "link", marginLeft: '0px'}}> LinkedIn </a><br />
          <a className='link' href={props.twitter} style={{className: "link", marginLeft: '0px'}}> Twitter </a>

        </div>


      </div>
    </>
  )
}

export default App






















