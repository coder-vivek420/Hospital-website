
  const doctors = [
    {name:'Dr. Asha Patel', spec:'Cardiologist', exp:12, rating:4.9},
    {name:'Dr. Rohit Kumar', spec:'General Physician', exp:8, rating:4.7},
    {name:'Dr. Meera Singh', spec:'Dermatologist', exp:6, rating:4.6},
    {name:'Dr. S. Reddy', spec:'Orthopedic', exp:10, rating:4.8},
    {name:'Dr. Lina Gomez', spec:'Pediatrician', exp:9, rating:4.9},
    {name:'Dr. Omar Ali', spec:'Neurologist', exp:14, rating:4.8}
  ];

  const docList = document.getElementById('docList');
  doctors.forEach(d => {
    const el = document.createElement('div');
    el.className = 'doctor';
    el.innerHTML = `
      <div class="avatar">${d.name.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
      <div>
        <h4>${d.name}</h4>
        <p style="color:var(--muted)">${d.spec} • ${d.exp} yrs</p>
        <div class="tags">
          <div class="tag">⭐ ${d.rating}</div>
          <div class="tag">Online</div>
        </div>
      </div>
    `;
    docList.appendChild(el);
  });

  function bookAppointment() {
    const name = document.getElementById('name').value.trim();
    if (!name) return;
    document.getElementById('apptMsg').style.display = 'block';
    setTimeout(() => document.getElementById('apptMsg').style.display = 'none', 3000);
  }

  function openTele() {
    alert('Teleconsultation started (demo).');
  }
