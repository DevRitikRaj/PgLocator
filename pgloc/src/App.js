
import './App.css';

function App() {
  return (
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
           
            <a href="index.html" class="logo">
            </a>
           
            <ul class="nav">
              <li><a href="index.html" class="active">Home</a></li>
              <li><a href="category.htm">About</a></li>
              <li><a href="listing.ht">Listing</a></li>
              <li><a href="contact.htm">Contact Us</a></li> 
              <li><div class="main-white-button"><a href="#"><i class="fa fa-plus"></i> Add Your Listing</a></div></li> 
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
          
          </nav>
        </div>
      </div>
    </div>
  </header>
  );
}

export default App;
