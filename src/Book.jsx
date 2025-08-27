function Book() {
  return (
    <div>
      <div className="booking-widget" id="booking">
        <h3>Book Your Stay</h3>
        <form className="booking-form" id="booking-form">
          <div className="form-group">
            <label htmlFor="check-in" style={{ color: 'black' }}>Check-In</label>
            <input type="date" id="check-in" required />
          </div>
          <div className="form-group">
            <label htmlFor="check-out" style={{ color: 'black' }}>Check-Out</label>
            <input type="date" id="check-out" required />
          </div>
          <div className="form-group">
            <label htmlFor="adults" style={{ color: 'black' }}>Adults</label>
            <select id="adults" required>
              <option value="1">1 Adult</option>
              <option value="2" selected>2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="children" style={{ color: 'black' }}>Children</label>
            <select id="children">
              <option value="0" selected>No Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3 Children</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name" style={{ color: 'black' }}>Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: 'black' }}>Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={{ color: 'black' }}>Phone</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="room-type">Room Type</label>
            <select id="room-type" name="room-type" required>
              <option value="deluxe">Deluxe Room</option>
              <option value="executive">Executive Suite</option>
              <option value="family">Family Suite</option>
            </select>
          </div>
          <button type="submit" className="search-btn">Complete Booking</button>
        </form>
      </div>
    </div>
  );
}

export default Book;
