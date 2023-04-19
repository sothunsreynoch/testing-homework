
import './App.css';
import  {Welcome} from './components/Welcome';
import Avatar from './components/Welcome';
import { List } from './components/List';
import Greeting from './components/Greeting';
import { FormSubmit } from './components/Event';

function App() {
  // const products =[
  //   {
  //     title:"Welcome"
  //   },
  //   {
  //     title:"Hello world"
  //   }
  // ]
  // return (
  //   <>
  //   <Welcome title="Wec Class"/>
  //   <Avatar imageURL="https://cdn.pixabay.com/photo/2018/05/08/10/17/dandelion-3382663_960_720.jpg" size={300}/>
  //   <List products={products}/>
  //   </>
 // );
      return(
        <>
         <Greeting isLogin={false}/> 
         <FormSubmit/>
        </>
      )
}

export default App;
