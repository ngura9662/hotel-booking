function Order() {
  return (
    <div>
      <div className="booking-widget" id="booking">
        <h3>Reserve Your Table</h3>
        <form className="booking-form" id="booking-form">
          <div className="form-group">
            <label htmlFor="check-in" style={{ color: 'black' }}>Check-In</label>
            <input type="time" id="check-in" required />
          </div>
          <div className="form-group">
            <label htmlFor="check-out" style={{ color: 'black' }}>Check-Out</label>
            <input type="time" id="check-out" required />
          </div>
          <div className="form-group">
            <label htmlFor="adults" style={{ color: 'black' }}>Adults Plates</label>
            <select id="adults" required>
              <option value="1">1 Adult Plate</option>
              <option value="2" selected>2 Adult Plates</option>
              <option value="3">3 Adult Plates</option>
              <option value="4">4 Adult Plates</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="children" style={{ color: 'black' }}>Children Plates</label>
            <select id="children">
              <option value="0" selected>No Children Plates</option>
              <option value="1">1 Child Plate</option>
              <option value="2">2 Child Plates</option>
              <option value="3">3 Child Plates</option>
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
              <option value="deluxe">Grilled Salmon</option>
              <option value="executive">Caesar Salad</option>
              <option value="family">Spaghetti Carbonara</option>
            </select>
          </div>
          <button type="submit" className="search-btn">Complete Order</button>
        </form>
      </div>
    </div>
  );
}

export default Order;
