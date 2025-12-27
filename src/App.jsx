import Cards from './components/Cards'

const App = () => {

  const jobOpenings = [
  {
    "brandLogo": "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
    "companyName": "Google",
    "datePosted": "2 days ago",
    "post": "Senior Software Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$95/hr",
    "location": "Mountain View, CA"
  },
  {
    "brandLogo": "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    "companyName": "Meta",
    "datePosted": "1 week ago",
    "post": "Product Designer",
    "tag1": "Full Time",
    "tag2": "Mid-Senior Level",
    "pay": "$88/hr",
    "location": "Menlo Park, CA"
  },
  {
    "brandLogo": "https://www.citypng.com/public/uploads/preview/square-amazon-app-logo-icon-701751695133387c8mdvsejvz.png",
    "companyName": "Amazon",
    "datePosted": "5 days ago",
    "post": "Cloud Support Associate",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$55/hr",
    "location": "Seattle, WA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
    "companyName": "Apple",
    "datePosted": "3 weeks ago",
    "post": "iOS Developer",
    "tag1": "Contract",
    "tag2": "Mid Level",
    "pay": "$75/hr",
    "location": "Cupertino, CA"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    "companyName": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Data Scientist",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$92/hr",
    "location": "Redmond, WA"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    "companyName": "Netflix",
    "datePosted": "10 days ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$120/hr",
    "location": "Los Gatos, CA"
  },
  {
    "brandLogo": "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    "companyName": "NVIDIA",
    "datePosted": "2 weeks ago",
    "post": "AI Research Intern",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "$50/hr",
    "location": "Santa Clara, CA"
  },
  {
    "brandLogo": "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    "companyName": "Adobe",
    "datePosted": "6 days ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$70/hr",
    "location": "San Jose, CA"
  },
  {
    "brandLogo": "https://pngimg.com/d/tesla_logo_PNG12.png",
    "companyName": "Tesla",
    "datePosted": "1 month ago",
    "post": "Autopilot Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$110/hr",
    "location": "Austin, TX"
  },
  {
    "brandLogo": "https://images.seeklogo.com/logo-png/25/1/salesforce-logo-png_seeklogo-256541.png",
    "companyName": "Salesforce",
    "datePosted": "8 weeks ago",
    "post": "Technical Support Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$45/hr",
    "location": "San Francisco, CA"
  }
];
 
  return (
    <div className ='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
          <Cards logo ={elem.brandLogo} name ={elem.companyName} date ={elem.datePosted} post = {elem.post} 
          t1 = {elem.tag1} t2 = {elem.tag2} pay = {elem.pay} location={elem.location} />
          </div>
      })}
    </div>
  )
}

export default App
