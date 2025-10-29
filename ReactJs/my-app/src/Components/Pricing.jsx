import React from 'react'
import './Pricing.css'
function Pricing() {
  return (
    <div>
        <section class="custom-pricing">
  <div class="container">
    <h2 class="custom-heading">Plans for Every Stage</h2>
    <p class="custom-subheading">Whether you're just starting or scaling fast, we’ve got you covered.</p>
    
    <div class="custom-grid">
      <div class="custom-card">
        <div class="custom-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>
        </div>
        <h3>Basic</h3>
        <p class="price">$0 <span>/mo</span></p>
        <ul class="features">
          <li>Starter Dashboard</li>
          <li>Community Forums</li>
          <li>Email Alerts</li>
        </ul>
        <button class="btn-outline">Try Free</button>
      </div>

      <div class="custom-card highlighted">
        <div class="custom-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M7 13l3-3 4 4 5-5"/></svg>
        </div>
        <h3>Growth</h3>
        <p class="price">$29 <span>/mo</span></p>
        <ul class="features">
          <li>All Basic Features</li>
          <li>Priority Support</li>
          <li>Analytics Dashboard</li>
        </ul>
        <button class="btn-filled">Upgrade</button>
      </div>

      <div class="custom-card">
        <div class="custom-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </div>
        <h3>Enterprise</h3>
        <p class="price">$99 <span>/mo</span></p>
        <ul class="features">
          <li>All Growth Features</li>
          <li>Account Manager</li>
          <li>Custom Solutions</li>
        </ul>
        <button class="btn-outline">Contact Us</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export { Pricing };