import MenuItem from './components/MenuItem';
import { mainCourses, desserts } from './data/menuData';
import './index.css'; 

function App() {
  const restaurantName = "The Flavor Factory";
  const tagline = "Delicious Food, Made Fresh Daily";
  
  const totalMenuItems = mainCourses.length + desserts.length;
  
  const menuCategories = [
    { title: "Main Courses", items: mainCourses },
    { title: "Desserts", items: desserts },
  ];

  return (
    <div className="restaurant-menu-app">
      
      <header className="header-section">
        <h1>{restaurantName}</h1>
        <p className="tagline">{tagline}</p>
      </header>

      <section className="menu-section">
        <h2>Our Menu</h2>
        
        {menuCategories.map((category, index) => (
          
          <div key={index} className="category-section">
            <h3>{category.title}</h3>
            <div className="menu-list">
              
              {category.items.map((item, itemIndex) => (
                <MenuItem 
                  key={itemIndex} 
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  description={item.description}
                  isVegetarian={item.isVegetarian}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      
      <section className="info-section">
        <h2>Restaurant Info</h2>
        <p>Total Items on Menu: **{totalMenuItems}**</p>
        <p>Hours: **Open Daily: 11 AM - 10 PM**</p>
        <p>Contact: **(555) 123-4567** | 123 Main St, Anytown, USA</p>
      </section>

      <footer className="footer-section">
        <p>{restaurantName}</p>
        <p>Email: <a href="mailto:info@flavorfactory.com">info@flavorfactory.com</a></p>
        <p>&copy; **2025** {restaurantName}</p>
      </footer>
    </div>
  );
}

export default App;