import './App.css';
import Card1 from './components/card1/Card1';
import Card2 from './components/card2/Card2';
import Card3 from './components/card3/Card3';
import Card4 from './components/card4/Card4';
import Card5 from './components/card5/Card5';
import Card6 from './components/card6/Card6';
import Card7 from './components/card7/Card7';
import Header from './components/header/Header.jsx'


const info = [
  ["feel special more often.","exclusive rewards for paying your bills","every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.","Explore Rewards"],
  ["we take your money matters seriously.","so that you don’t have to.","never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.","Expierence the upgrade"],
  ["for your eclectic taste.","more cash in your pockets.", "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.","Digital wallet"],
  ["security first and second.","what’s yours remains only yours.","CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any.","Become a memeber"],
  
]
const backpic = [
  "https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg",
  "https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6vK0901HwBt6iMtIthl7U4wOI1kDZ5qYHw&usqp=CAU",
  "https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg",
]

function App() {


  return (
    <div className="App">
      <Header />
      <Card1 />
      <Card2 info = {info[0]} picture = {backpic[0]}/>
      <Card3 />
      <Card2 info = {info[1]} picture = {backpic[1]}/>
      <Card2 info = {info[2]} picture ={backpic[2]}/>
      <Card2 info = {info[3]} picture = {backpic[3]}/>
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

export default App;
