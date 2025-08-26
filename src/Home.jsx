function Home() {
  return (
    <div>
      <section id="rooms">
        <div className="container">
          <div className="section-title">
            <h2>Luxurious Accommodations</h2>
            <p>Choose from our selection of exquisite rooms and suites</p>
          </div>
          <div className="rooms-grid">
            <div className="room-card">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Deluxe Room" />
                <div className="room-badge">Most Popular</div>
              </div>
              <div className="room-content">
                <h3>Deluxe Room</h3>
                <p>Spacious room with modern amenities and a comfortable seating area.</p>
                <div className="room-features">
                  <span><i className="fas fa-user"></i> 2 Guests</span>
                  <span><i className="fas fa-expand"></i> 35m²</span>
                </div>
                <div className="room-price">
                  <div className="price">$70 <small>/night</small></div>
                  <a href="#booking" className="book-btn">Book Now</a>
                </div>
              </div>
            </div>
            <div className="room-card">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Executive Suite" />
                <div className="room-badge">Best Value</div>
              </div>
              <div className="room-content">
                <h3>Executive Suite</h3>
                <p>Separate living area with premium amenities and extra space.</p>
                <div className="room-features">
                  <span><i className="fas fa-user"></i> 3 Guests</span>
                  <span><i className="fas fa-expand"></i> 55m²</span>
                </div>
                <div className="room-price">
                  <div className="price">$110 <small>/night</small></div>
                  <a href="#booking" className="book-btn">Book Now</a>
                </div>
              </div>
            </div>
            <div className="room-card">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Family Suite" />
              </div>
              <div className="room-content">
                <h3>Family Suite</h3>
                <p>Perfect for families with connecting rooms and child-friendly amenities.</p>
                <div className="room-features">
                  <span><i className="fas fa-user"></i> 4 Guests</span>
                  <span><i className="fas fa-expand"></i> 65m²</span>
                </div>
                <div className="room-price">
                  <div className="price">$150 <small>/night</small></div>
                  <a href="#booking" className="book-btn">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant section */}
      <section id="restaurant">
        <div className="container">
          <div className="section-title">
            <h2>Restaurant</h2>
            <p>Choose from our selection of delicious dishes</p>
          </div>
          <div className="rooms-grid">
            <div className="room-card">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Grilled Salmon" />
                <div className="room-badge">Most Popular</div>
              </div>
              <div className="room-content">
                <h3>Grilled Salmon</h3>
                <p>Fresh salmon fillet grilled to perfection, served with seasonal vegetables.</p>
                <div className="room-features">
                  <span><i className="fas fa-user"></i> 2 People</span>
                </div>
                <div className="room-price">
                  <div className="price">$15 <small>/dish</small></div>
                  <a href="#booking" className="book-btn">Order Now</a>
                </div>
              </div>
            </div>
            <div className="room-card">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Caesar Salad" />
                <div className="room-badge">Best Value</div>
              </div>
              <div className="room-content">
                <h3>Caesar Salad</h3>
                <p>Crisp romaine lettuce, parmesan cheese, and croutons, tossed in Caesar dressing.</p>
                <div className="room-features">
                  <span><i className="fas fa-user"></i> 3 People</span>
                </div>
                <div className="room-price">
                  <div className="price">$10 <small>/dish</small></div>
                  <a href="#booking" className="book-btn">Order Now</a>
                </div>
              </div>
            </div>
            <div className="room-card">
              <div className="room-img">
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Spaghetti Carbonara" />
              </div>
              <div className="room-content">
                <h3>Spaghetti Carbonara</h3>
                <p>Creamy pasta with pancetta, egg, and parmesan cheese.</p>
                <div className="room-features">
                  <span><i className="fas fa-user"></i> 4 People</span>
                </div>
                <div className="room-price">
                  <div className="price">$15 <small>/dish</small></div>
                  <a href="#booking" className="book-btn">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" style={{ backgroundColor: '#f1f7fa' }}>
        <div className="container">
          <div className="section-title">
            <h2>Hotel Amenities</h2>
            <p>Enjoy our premium facilities during your stay</p>
          </div>
          <div className="amenities-grid">
            <div className="amenity-card">
              <div className="amenity-icon">
                <i className="fas fa-swimming-pool"></i>
              </div>
              <h3>Swimming Pool</h3>
              <p>Relax and unwind in our sparkling outdoor pool</p>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Restaurant</h3>
              <p>Savor local and international cuisine at our on-site restaurant</p>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon">
                <i className="fas fa-spa"></i>
              </div>
              <h3>Spa Services</h3>
              <p>Pamper yourself with our range of relaxing treatments</p>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon">
                <i className="fas fa-wifi"></i>
              </div>
              <h3>Free WiFi</h3>
              <p>Stay connected with high-speed internet throughout the hotel</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
