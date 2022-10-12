
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';

function App() {
  const router=createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  errorElement:<ErrorPage></ErrorPage>, 
  children:[
    {
      path:'/',
      loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Home></Home>,    
    },
    {
      path:'/home',
      loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Home></Home>
    },
    {
path:'/quizcart/:quizId',
loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
element:<QuizDetails></QuizDetails>
    },
    {
      path:'statistics',
      
      element:<Statistics></Statistics>
    },
    {
      path:'blog',
      element:<Blog></Blog>
    }
  ]
}
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
